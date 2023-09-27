import React, { Fragment } from 'react';
import Products from './components/Products';
import Background from './components/Background';
import { Box, Grid } from '@mui/material';

export default () => {
  return (
    <Fragment>
      <Box>
        <p> liquidfire inc. copyright all rights reserve </p>
      </Box>
      <hr />
      <Products />
    </Fragment>
  );
};
