import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContactAddressBar from '@/components/ContactAddressBar';
import StepperMui from '@/components/StepperMui';

export default function Home() {
  return (
      <Box
        sx={{
          maxWidth: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{
          width: '100%',
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
        }}>
        <ContactAddressBar/>
        <Box sx={{
          width: '100%',
          maxWidth: '100%',
        }}>
          <Typography className='fade-slide-x' variant="h4" component="h1" sx={{ pl: 7, pt: 2, mb: 2 }}>
            I'm Marko Đokić - Software Engineer
          </Typography>
          <Typography className='fade-slide-x' variant="h5" component="h3" sx={{ pl: 6, mb: 2 }}>
          React | .NET | Vue
          </Typography>
          <StepperMui/>
        </Box>
        </Box>
      </Box>
  );
}
