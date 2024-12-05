"use client"

import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import { Button } from '@mui/material';

export default function FortuneCookie() {
  const [fortune, setFortune] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://aphorismcookie.herokuapp.com');
      setFortune(response.data.data.message);
      console.log(response.data.data.message);
    } catch (err) {
      setError('Došlo je do greške pri dobijanju poruke.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Button onClick={handleClick}  variant="outlined">
          <img src="/static/images/fortuneCookie.svg" alt="Fortune Cookie" width="100px" />
        </Button>
        {loading && <Typography>Loading...</Typography>}
        {error && <Typography color="error">{error}</Typography>}
        {fortune && <Typography sx={{ mt: 2 }}><strong>Message:</strong> {fortune}</Typography>}
      </Box>
    </Container>
  );
}