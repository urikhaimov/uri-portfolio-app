import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Typography, Box } from '@mui/material';


export default function Contact() {
  return (
    <AnimatedSection>
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">Contact</Typography>
        <Typography>Email: urikhaimov@gmail.com</Typography>
        <Typography>LinkedIn: <a href="https://www.linkedin.com/in/uri-khaimov-75287b6a/" target="_blank" rel="noopener">linkedin.com/in/urikhaimov</a></Typography>
        <Typography>GitHub: <a href="https://github.com/urikhaimov" target="_blank" rel="noopener">github.com/urikhaimov</a></Typography>
      </Box>
    </AnimatedSection>
  );
}
