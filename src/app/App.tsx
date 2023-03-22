import React from 'react';
import {Header} from "common/components/header";
import {Books} from "features/books/";
import {ProgressBar} from "common/components/progressBar";
import {Snackbar} from "common/components/snackbar";

export function App() {
  return (
    <div className="app">
      <ProgressBar/>
      <Header/>
      <Books/>
      <Snackbar/>
    </div>
  );
}

