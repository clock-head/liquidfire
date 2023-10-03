import React, { Fragment } from 'react';
import Products from './components/Products';
import { Box, Grid } from '@mui/material';

export default () => {
  return (
    <Fragment>
      <Box>
        <p> liquidfire tech and clothing inc. copyright all rights reserve </p>
      </Box>
      <hr />
      <Products />
    </Fragment>
  );
};
