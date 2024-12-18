'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import dynamic from 'next/dynamic';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

const Map = dynamic(() => import('./Map'), { ssr: false });

function ContactAddressBar() {
const theme = useTheme();

  return (
    <Box sx={{ p: 3,  bgcolor: theme.palette.info.dark }}>
        <Image
                src="/static/images/mareImage.jpeg"
                width={300}
                height={200}
                alt="Picture of the author"
                layout="intrinsic"
            />
         <Box>
            <ListItemText primary="Email" secondary="marko.djokic.contact@gmail.com" />
            <ListItemText primary="Phone" secondary="+381644402202" />
            <ListItemText primary="Linkedin" secondary="https://www.linkedin.com/in/djokicmarko/" />
            <ListItemText primary="Location" />
         </Box>
        <Map />
    </Box>
  );
}

export default ContactAddressBar;
