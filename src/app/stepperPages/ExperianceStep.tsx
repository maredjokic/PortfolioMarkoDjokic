'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function ExperienceStep() {
  return (
    <Box sx={{ p: 4, bgcolor: 'background.paper'}}>
      <Box sx={{ }}>
        <Typography variant="h5" gutterBottom>
          Cubic Corporation (4 yrs 9 mos)
        </Typography>
        <Typography variant="body1" gutterBottom>
          Years of experience in the development of quality software in the U.S. Defence industry. 
          Worked on multiple projects, with different technologies, mentoring and leading the team. 
          Duties included project management, distribution of tasks, ticketing, component development 
          following best practices, and testing.
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Software Engineer" secondary="2021 - 2024 (2 yrs 9 mos)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Associate Software Engineer" secondary="2020 - 2021 (1 yr 11 mos)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Software Engineering Intern" secondary="2019 (2 mos)" />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default ExperienceStep;