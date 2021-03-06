import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { App } from '../../components';

export const Root = ({store}) => {
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