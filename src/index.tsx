import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {App} from 'app';
import {ChakraProvider} from '@chakra-ui/react';
import {Provider} from 'react-redux';
import {store} from 'app/store';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <ChakraProvider>
      <App/>
    </ChakraProvider>
  </Provider>
);

reportWebVitals();
