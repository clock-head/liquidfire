import { mount } from 'products/ProductsIndex';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  });

  // the mount function renders the ReactDOM into the ref
  // which will be passed into the div

  return <div ref={ref} />;
};
