import React from 'react';
import { Typography, Box,  } from '@mui/material';
import AnimatedSection from '../components/AnimatedSection';
export default function Home() {
  return (
    <AnimatedSection>
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">About Me</Typography>
        <Typography paragraph fontSize={{ xs: '1rem', md: '1.2rem' }}>
          I’m Uri Khaimov, a Senior Frontend Developer with over 20 years of experience building scalable, high-performance web applications.
          I specialize in React, TypeScript, and modern frontend architecture, with hands-on expertise in optimizing UI performance, integrating complex APIs, and delivering pixel-perfect designs.
        </Typography>
      </Box>
    </AnimatedSection>
  );
}