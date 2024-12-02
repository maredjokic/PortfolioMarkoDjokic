import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function OtherSkillsStep() {
  return (
    <Box sx={{ p: 4, bgcolor: 'background.paper' }}>
      <List sx={{ }}>
        <ListItem>
          <ListItemText 
            primary="Testing Tools" 
            secondary="Storybook, Unit Testing (Mocha, Jest)" 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="Development Tools" 
            secondary="Bash, GitBash, Vim" 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="Operating Systems" 
            secondary="Windows, Linux" 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="IDEs" 
            secondary="Visual Studio, VS Code" 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="UI/UX Collaboration" 
            secondary="Experienced in following UI designs using Figma" 
          />
        </ListItem>
      </List>
    </Box>
  );
}

export default OtherSkillsStep;