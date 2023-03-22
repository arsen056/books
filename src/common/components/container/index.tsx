import React, {ComponentProps, FC} from 'react';
import s from './Container.module.scss'

export const Container:FC<ComponentProps<'div'>> = ({className, ...rest}) => {
  return <div className={`${s.container} ${className}`} {...rest} />;
};
