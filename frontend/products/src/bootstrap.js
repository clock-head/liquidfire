import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mount = (el) => {
  let products = '';

  ReactDOM.render(<App />, el);
};

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which definitely has an element with an id of 'dev-products'
// We want to immediately render our app into that element

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-products');

  //Assuming our container doesnt have an element
  // with id 'dev-products'....
  if (el) {
    // we are probably running in isolation
    mount(el);
  }
}

// Context/Situation #2
// We are running this file in development or production
// through the container app
// No guarantee that an element with an id of 'dev-products' exists
// We do not want to try to immediately render the app
export { mount };
