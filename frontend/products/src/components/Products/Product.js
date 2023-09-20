import React from 'react';
import { Typography, Box, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import './Products.css';

const Product = (props) => {
  return (
    <Box
      onMouseEnter={() => {
        props.hoverHandler(props.themeCode);
      }}
      sx={{
        background: props.colorAttrib,
      }}
    >
      <Paper>
        <img></img>
        <Typography variant="button">{props.name}</Typography>
        <Typography>{props.price}</Typography>
      </Paper>
    </Box>
  );
};

export default Product;
