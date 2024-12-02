import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function EducationStep() {
  return (
    <Box sx={{ p: 4, bgcolor: 'background.paper' }}>
      <Box sx={{ }}>
        <Typography variant="h5" gutterBottom>
          Faculty of Electronic Engineering, Niš
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="Master’s Degree, Software Engineering" 
              secondary="2019 - 2024" 
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Engineer’s Degree, Computer Science (Bachelor)" 
              secondary="2015 - 2019" 
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default EducationStep;