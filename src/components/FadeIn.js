import React from 'react';

import {CSSTransition} from 'react-transition-group';

const FadeIn = ({children, ...props}) => (
  <CSSTransition
    {...props}
    timeout={500}
    classNames="fade"
  >
    {children}
  </CSSTransition>
);

export default FadeIn;
