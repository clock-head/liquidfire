import React from 'react';
import Product from './Product';
import {
  Box,
  Grid,
  ImageList,
  ImageListItem,
  ThemeProvider,
  Container,
  Card,
} from '@mui/material';
import standardSizing from '../Styles/sizing';

const ProductList = (props) => {
  // this is an array that will be sent forward from the server via an API call\

  console.log(props.currentCollection);

  return (
    <Container
      sx={{
        width: '85%',
      }}
    >
      <ImageList
        gap={12}
        sx={{
          mb: 8,
          gridTemplateColumns:
            'repeat(auto-fill, minmax(280px, 1fr))!important',
        }}
      >
        {props.currentCollection.map((product) => (
          <Product key={product._id} name={product.name}></Product>
        ))}
      </ImageList>
    </Container>
  );
};

export default ProductList;
