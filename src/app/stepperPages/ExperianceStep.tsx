'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Image from 'next/image';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import image1 from '/public/static/images/cubic1.jpg';
import image2 from '/public/static/images/cubic2.jpg';
import image3 from '/public/static/images/cubic3.jpg';

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

        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        > Show photos </AccordionSummary>
           <AccordionDetails>
      <Box sx={{ 
          display: 'flex', 
          flexDirection: { sm: 'column', md: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          gap: 2,
          
        }}>
        <Image
          src={image1}
          alt="Project 1"
          width={1000}
          height={1000}
          style={{ objectFit: 'cover', width: '100%', height: 'auto', borderRadius: '8px' }}
        />
        <Image
          src={image3}
          alt="Project 3"
          width={1000}
          height={1000}
          style={{ objectFit: 'cover', width: '100%', height: 'auto', borderRadius: '8px' }}
        />
        <Image
          src={image2}
          alt="Project 2"
          width={1000}
          height={1000}
          style={{ objectFit: 'cover', width: '100%', height: 'auto', borderRadius: '8px' }}
        />
      </Box>
      </AccordionDetails>
      </Accordion>
      </Box>
    </Box>
  );
}

export default ExperienceStep;