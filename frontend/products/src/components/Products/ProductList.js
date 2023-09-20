import React from 'react';
import Product from './Product';
import { Box, Grid } from '@mui/material';

const ProductList = (props) => {
  // this is an array that will be sent forward from the server via an API call
  const productsArray = [
    {
      key: 1,
      themeCode: {
        products: '#AEA19D',
        main: '#6C372D',
        header: '#82706A',
      },
      name: 'Authority',
      price: 12.99,
      displaySize: 4,
    },
  ];

  return (
    <Box
      sx={{
        width: '50%',
        position: 'relative',
        top: '5px',
        left: '20%',
        maxWidth: 'md',
      }}
    >
      <Grid container spacing={2} sx={{ position: 'relative', top: '10%' }}>
        {productsArray.map((product) => (
          <Grid item xs={product.displaySize}>
            <Product
              name={product.name}
              hoverHandler={props.toggleFunc}
              themeCode={product.themeCode}
              colorAttrib={props.productColor}
            ></Product>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductList;
