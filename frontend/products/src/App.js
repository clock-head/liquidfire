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
    products: '#182C37',
    header: '#234851',
    headerText: '#D47523',
    main: '#B83D02',
  });
  const [dark, setDark] = useState(false);

  function toggleTheme(input) {
    setColor(input);
    //setDark((prev) => !prev);
    console.log(color);
  }

  const theme = createTheme({
    palette: {
      mode: dark ? 'dark' : 'light',
    },
  });

  const DynContainer = styled('div')((props) => ({
    position: 'relative',
    left: '20%',
    right: '40%',
    width: '75%',
    height: '2048px',
    maxWidth: '1024px',
    background: props.bg,
  }));

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        {/* <Box
          sx={{ width: 900, position: 'relative', left: '20%', right: '40%' }}
        > */}
        <DynContainer bg={color.main}>
          <Paper
            color="primary"
            sx={{
              width: '75%',
              position: 'relative',
              left: '10%',
              right: '20%',
            }}
          >
            <Header headerColor={color.header} textColor={color.headerText} />
          </Paper>
          <ProductList
            theme={theme}
            toggleFunc={toggleTheme}
            productColor={color.products}
          />
        </DynContainer>
        {/* </Box> */}
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
