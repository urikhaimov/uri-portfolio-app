import React from 'react';
import { Typography, Box, Button, Card, CardContent, Grid } from '@mui/material';
import AnimatedSection from '../components/AnimatedSection';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';


export default function Projects() {
  return (
    <AnimatedSection>
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">Projects</Typography>
        <Grid container spacing={2}>
          {projects.map((project, index) => (
             <ProjectCard   
              key={index}
              project={project}
              index={index} />
          ))}
        </Grid>
      </Box>
    </AnimatedSection>
  );
}