import React, { useState } from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
} from '@mui/material';

const AboutPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <div>O</div>
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        sx={{
          mt: 10,
        }}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation" mt={10}>
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};

export default AboutPage;
