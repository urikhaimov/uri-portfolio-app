import React from 'react';

import { Typography, Box} from '@mui/material';
import AnimatedSection from '../components/AnimatedSection';

export default function Skills() {
  return (
    <AnimatedSection>
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">Skills & Technologies</Typography>
        <Typography paragraph fontSize={{ xs: '1rem', md: '1.2rem' }}>
          React, React Query, React Hook Form, Redux, Context API, TypeScript, JavaScript (ES6–ES2024), Material-UI, Tailwind CSS, SASS,
          Vite, Webpack, Module Federation, Node.js, Express, C++, OpenCV, Git, GitHub, CI/CD, Monorepos
        </Typography>
      </Box>
    </AnimatedSection>
  );
}