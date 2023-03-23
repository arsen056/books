import React, {memo} from 'react';
import {Container} from 'common/components/container';
import {Search} from 'features/search';

import {Sorts} from 'features/sorts';

import s from './Header.module.scss';

export const Header = memo(() => {
  return (
    <header className={s.header}>
      <Container>
        <h1>Google book search</h1>
        <Search/>
        <Sorts/>
      </Container>
    </header>
  );
});
