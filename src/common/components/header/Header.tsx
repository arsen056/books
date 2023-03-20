import React, {memo} from 'react';
import {Container} from "common/components/container";
import {Search} from "common/components/search";

export const Header = memo(() => {
  return (
    <header>
      <Container>
        <h1>Google book search</h1>
        <Search/>
      </Container>
    </header>
  );
});
