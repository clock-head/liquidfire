import React, { Fragment } from 'react';
import { Typography, Box, Paper, ImageListItem, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import './Products.css';

const Product = (props) => {
  const imagePath =
    process.env.NODE_ENV === 'development' ? `./img/${props.name}.jpg` : '';

  console.log(imagePath);

  return (
    <ImageListItem>
      <img
        src={`${imagePath}?w=328`}
        loading="lazy"
        style={{ cursor: 'pointer' }}
      ></img>
    </ImageListItem>
  );
};

export default Product;
