import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './../../App';

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={App} />
          <Route path={`${process.env.PUBLIC_URL}/:path`} component={App} />
        </>
      </BrowserRouter>
    </Provider>
  )
}

export default Root;