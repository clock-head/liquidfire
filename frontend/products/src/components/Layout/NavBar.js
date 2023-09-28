import React, { Fragment } from 'react';
import { IconButton, Box } from '@mui/material';
import voidCollection from '../Collections/voidCollection';
import lunarCollection from '../Collections/lunarCollection';

const NavBar = (props) => {
  function toggle(e) {
    if (e.currentTarget.value === 'void') {
      console.log(e.currentTarget.value);
      props.handleTogCollection(voidCollection);
    }

    if (e.currentTarget.value === 'lunar') {
      console.log(e.currentTarget.value);
      props.handleTogCollection(lunarCollection);
    }
  }

  return (
    <Box
      sx={{
        width: '20%',
        height: '110px',
        position: 'relative',
        left: '80%',
        bottom: '90%',
      }}
    >
      <IconButton onClick={toggle} value="void">
        <img src="./img/void_logo_tn.png"></img>
      </IconButton>

      <IconButton onClick={toggle} value="lunar">
        <img src="./img/lunar_tn.png"></img>
      </IconButton>
    </Box>
  );
};

export default NavBar;
