import React from 'react';
import { Box, Typography, Paper, Switch } from '@mui/material';

const Header = (props) => {
  return (
    <React.Fragment>
      <Box
        sx={{
          width: '100%',
          background: props.headerColor,
        }}
      >
        <Typography variant="h1" component="p" color={props.textColor}>
          Liquidfire
        </Typography>
      </Box>
    </React.Fragment>
  );
};

export default Header;
