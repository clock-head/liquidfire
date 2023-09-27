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
  // this is an array that will be sent forward from the server via an API call
  const productsArray = [
    {
      _id: 1,
      themeCode: {
        products: '#AEA19D',
        main: '#6C372D',
        header: '#82706A',
      },
      name: 'Authority',
      price: 12.99,
      sizing: standardSizing,
    },
    {
      _id: 2,
      themeCode: {},
      name: 'Fury',
      price: 12.99,
      sizing: standardSizing,
    },
    {
      _id: 3,
      themeCode: {},
      name: 'Greed',
      price: 12.99,
      sizing: standardSizing,
    },
    {
      _id: 4,
      name: 'PurpleRhino',
    },
  ];

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
        {productsArray.map((product) => (
          // <Card key={product._id}>
          <Product key={product._id} name={product.name} />

          /* </Card>; */
        ))}
      </ImageList>
    </Container>
  );
};

export default ProductList;
