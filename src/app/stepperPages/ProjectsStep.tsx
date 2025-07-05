import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function ProjectsStep() {
  return (
    <Box sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
      <Box sx={{ }}>
        <Typography variant="h5" gutterBottom>
          2022 - 2024
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="Unified Video +" 
              secondary="Video streaming, enhancements platform, playing video on map - React" 
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Video-player" 
              secondary="Reusable component for UV+ Live and Archive mode - Storybook - React" 
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Prism library" 
              secondary="Component Library for UV+ Storybook - React" 
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="Udp2websoc player" 
              secondary="Low level video player, JavaScript" 
            />
          </ListItem>
        </List>
        <Typography variant="h5" gutterBottom>
          2021 - 2022
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="Anubis" 
              secondary="Live video, streaming enhancement platform, playing video on map - .NET, WPF, WinForms" 
            />
          </ListItem>
        </List>
        <Typography variant="h5" gutterBottom>
          2020 - 2021
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="Jet" 
              secondary="Video streaming, enhancements platform - Vue, Design and Development" 
            />
          </ListItem>
        </List>
          <Typography variant="h5" gutterBottom>
          2019 - 2020
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="Video-Library" 
              secondary="Work with video files, search, upload, paging, filters, ffmpeg editing, transcoding, playing video on webpage - Vue, .NET Core, PostgreSQL (Entity Framework)" 
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default ProjectsStep;