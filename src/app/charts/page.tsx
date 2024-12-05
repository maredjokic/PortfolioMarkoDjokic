"use client";

import * as React from 'react';
import { Container, Box, Typography } from '@mui/material';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function BitcoinChart() {
  const [data, setData] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  // Funkcija za preuzimanje podataka sa API-ja
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30'
      );
      const prices = response.data.prices;

      // Mapiranje podataka za graf
      const chartData = prices.map((price: [number, number]) => ({
        x: new Date(price[0]).toLocaleDateString(), // Datum u formatu (MM/DD/YYYY)
        y: price[1].toFixed(2), // Cena Bitcoina
      }));

      setData(chartData);
    } catch (err) {
      setError('Došlo je do greške pri dobijanju podataka.');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Bitcoin Prices for the Last 30 Days
        </Typography>
        {loading && <Typography>Loading...</Typography>}
        {error && <Typography color="error">{error}</Typography>}
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone"
              dataKey="y" 
              stroke="#8884d8" 
              dot={false}
              activeDot={{ r: 8 }}
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </Container>
  );
}