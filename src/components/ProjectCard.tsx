import React from 'react';
import {Typography, Button, Card, CardContent, Grid} from '@mui/material';


export default function ProjectCard({ project, index }: { project: { title: string; description: string; link: string }, index:number }) {
    return (
        <Grid item xs={12} sm={6} key={index}>
            <Card sx={{ height: '100%' }}>
                <CardContent>
                    <Typography variant="h6" fontWeight="bold">{project.title}</Typography>
                    <Typography variant="body2" paragraph>{project.description}</Typography>
                    <Button href={project.link} target="_blank" rel="noopener">View on GitHub</Button>
                </CardContent>
            </Card>
        </Grid>
    );
}