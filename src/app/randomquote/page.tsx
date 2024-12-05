"use client";

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import { Button } from '@mui/material';

export default function RandomQuote() {
  const [quote, setQuote] = React.useState<string | null>(null);
  const [author, setAuthor] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://quotes-api-self.vercel.app/quote');
      console.log(response);
      const data = response.data;
      console.log(data);
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (err) {
      setError('Error.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Button onClick={handleClick} variant="outlined">
          Get Random Quote
        </Button>
        {loading && <Typography>Loading...</Typography>}
        {error && <Typography color="error">{error}</Typography>}
        {quote && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h5" sx={{ mb: 1 }}>
              "{quote}"
            </Typography>
            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
              - {author}
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}