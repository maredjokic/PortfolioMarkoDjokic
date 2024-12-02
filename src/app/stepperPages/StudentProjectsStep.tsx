import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function StudentProjectsStep() {
  return (
    <Box sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
      <Box sx={{ }}>
        <Typography variant="h5" gutterBottom>
          2024
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="OCR and Image Processing Tool" 
              secondary="Windows Forms, C#" 
            />
          </ListItem>
        </List>
        <Typography variant="h5" gutterBottom>
          2023 - 2024
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="Automatic Running Plan" 
              secondary="React.js, .NET, PostgreSQL (EF)" 
            />
          </ListItem>
        </List>
        <Typography variant="h5" gutterBottom>
          2019 - 2020
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="Health and Nutrition" 
              secondary="Vue.js, .NET Core, PostgreSQL (EF)" 
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default StudentProjectsStep;