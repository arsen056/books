import React from 'react';
import {ProgressBar} from 'common/components/progressBar';
import {Snackbar} from 'common/components/snackbar';
import {HashRouter} from 'react-router-dom';
import {Routs} from 'common/routes';
import {Header} from 'common/components/header';

export function App() {
  return (
    <HashRouter>
      <div className="app">
        <ProgressBar/>
        <Header/>
        <Routs/>
        <Snackbar/>
      </div>
    </HashRouter>
  );
}

