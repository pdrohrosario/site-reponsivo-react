import React from 'react';
import { oneOf, bool } from 'prop-types';
import { Link } from 'react-router-dom';
import cx from 'classnames';


const cbn = 'ui-button';

const UIButton = ({ onClick, to, theme, rounded, children, className, ...restProps }) => {
  const Component = to ? Link : 'button';

  return (
    <Component
      {...restProps}
      className={cx(className, cbn, `${cbn}--${theme}`, {
        [`${cbn}--rounded`]: rounded,
      })}
      onClick={onClick}
      to={to}
    >
      {children}
    </Component>
  )
}


export default UIButton;
