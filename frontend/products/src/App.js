import { useState, Fragment } from 'react';
import React from 'react';
import ProductList from './components/Products/ProductList.js';
import Header from './components/Layout/Header.js';
import { Box, Paper, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import { green, purple } from '@mui/material/colors';

const App = () => {
  const [color, setColor] = useState({
    products: '#234C6A',
    header: '#234851',
    headerText: '#5BDEF0',
    main: '#234C6A',
  });
  const [dark, setDark] = useState(true);

  function toggleColor(input) {
    setColor(input);
    //setDark((prev) => !prev);
    console.log(color);
  }

  const theme = createTheme({
    palette: {
      mode: dark ? 'dark' : 'light',
    },
  });

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
        <Header headerColor={color.header} textColor={color.headerText} />
        <ProductList
          theme={theme}
          toggleFunc={toggleColor}
          productColor={color.products}
        />
      </DynContainer>
    </Fragment>
  );
};

export default App;
