import React, {useEffect} from 'react';
import { Header } from "common/components/header";
import {Book} from "common/components/book";
import {API} from "api/api";

export function App() {
  useEffect(() => {
    API.getBooks({q: ''})
  }, [])

  return (
    <div className="App">
      <Header/>
      <Book/>
    </div>
  );
}

