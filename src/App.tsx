import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, Button, Card, CardContent, Grid, Container, CssBaseline, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, Switch } from '@mui/material';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import AnimatedSection from './components/AnimatedSection';


import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';





export default function App() {
const [mode, setMode] = useState<'light' | 'dark'>('light');
const theme = createTheme({ palette: { mode } });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const toggleDarkMode = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  const navItems = [
    { text: 'About', path: '/' },
    { text: 'Projects', path: '/projects' },
    { text: 'Skills', path: '/skills' },
    { text: 'Contact', path: '/contact' }
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          {isMobile && (
            <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" sx={{ flexGrow: 1 }}>Uri Khaimov Portfolio</Typography>
          {!isMobile && navItems.map((item) => (
            <Button key={item.text} color="inherit" component={Link} to={item.path}>{item.text}</Button>
          ))}
          <Switch checked={mode === 'dark'} onChange={toggleDarkMode} color="default" />
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {navItems.map((item) => (
            <ListItem button component={Link} to={item.path} key={item.text} onClick={toggleDrawer}>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Container maxWidth="md">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}
