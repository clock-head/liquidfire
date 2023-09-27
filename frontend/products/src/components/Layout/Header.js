import React, { Fragment } from 'react';
import { Box, Typography, Paper, Switch } from '@mui/material';

const Header = (props) => {
  return (
    <Fragment>
      <Box
        sx={{
          width: '100%',
          height: '110px',
          background: props.headerColor,
          borderRadius: '3px',
          minWidth: '400px',
          maxWidth: '1890px',
        }}
      >
        <Typography
          sx={{
            color: 'white',
            position: 'relative',
            top: '20px',
            fontSize: '80px',
          }}
          variant="h1"
          component="p"
          color={props.textColor}
        >
          Liquidfire
        </Typography>
      </Box>
    </Fragment>
  );
};

export default Header;
