import React, { Fragment } from 'react';
import { Box, Typography, Paper, Switch, IconButton } from '@mui/material';
import NavBar from './NavBar';

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
            bottom: '15px',
            fontSize: '80px',
          }}
          variant="h1"
          component="p"
          color={props.textColor}
        >
          Liquidfire
        </Typography>
        <NavBar handleTogCollection={props.handleToggleCollection} />
      </Box>
    </Fragment>
  );
};

export default Header;
