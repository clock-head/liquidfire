import React, { Fragment } from 'react';
import { Box, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

const imageURL =
  process.env.NODE_ENV === 'development' ? './img/galaxy.jpg' : '';

const Background = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundImage: imageURL,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
});

export default Background;
