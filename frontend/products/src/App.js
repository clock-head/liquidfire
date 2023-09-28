import { useState, useEffect, Fragment } from 'react';
import React from 'react';
import ProductList from './components/Products/ProductList.js';
import Header from './components/Layout/Header.js';
import { Box, Paper, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import { green, purple } from '@mui/material/colors';
import lunarCollection from './components/Collections/lunarCollection';
import voidCollection from './components/Collections/lunarCollection';

const App = () => {
  const [collection, setCollection] = useState(lunarCollection);

  function toggleCollection(input) {
    setCollection(input);
    //setDark((prev) => !prev);
  }

  const imageURL =
    process.env.NODE_ENV === 'development' ? './img/galaxy.jpg' : '';

  const DynContainer = styled('div')((props) => ({
    position: 'relative',
    width: '100%',
    height: '2048px',
    background: props.bg,
    backgroundSize: 'cover',
  }));

  return (
    <Fragment>
      <DynContainer>
        <Header handleToggleCollection={toggleCollection} />
        <ProductList currentCollection={collection} />
      </DynContainer>
    </Fragment>
  );
};

export default App;
