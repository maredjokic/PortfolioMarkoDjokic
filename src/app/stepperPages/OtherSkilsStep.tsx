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
            primary="Testing tools" 
            secondary="Storybook, Unit Testing (Mocha, Jest)" 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="Development utilities" 
            secondary="Bash, GitBash, Vim" 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="Operating systems" 
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
            primary="UI/UX collaboration" 
            secondary="Experienced in following UI designs using Figma" 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="Favorite Book" 
            secondary="Clean Code - Robert C. Martin" 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="Driver's license" 
            secondary="B category" 
          />
        </ListItem>
        <ListItem>
          <ListItemText 
            primary="Hobby" 
            secondary="Football, Futsal" 
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Attitude towards work" 
            secondary="Excellent interpersonal and communication skills, enabling effective collaboration with team members and stakeholders." 
          />
          </ListItem>
          <ListItem>
          <ListItemText 
            secondary="Highly adaptable and open-minded, fostering a team-oriented environment." 
          />
          </ListItem>
          <ListItem>
          <ListItemText 
            secondary="Ego-free approach to problem-solving, prioritizing the success of the team and project over personal recognition." 
          />
          </ListItem>
      </List>
    </Box>
  );
}

export default OtherSkillsStep;