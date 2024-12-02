import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function LanguagesStep() {
  return (
    <Box sx={{ p: 4, bgcolor: 'background.paper'}}>
      <List sx={{}}>
        <ListItem>
          <ListItemText 
            primary="Serbian" 
            secondary="Native" 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="English" 
            secondary="Professional proficiency" 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="Hungarian" 
            secondary="Basic proficiency" 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="French" 
            secondary="Basic proficiency" 
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default LanguagesStep;