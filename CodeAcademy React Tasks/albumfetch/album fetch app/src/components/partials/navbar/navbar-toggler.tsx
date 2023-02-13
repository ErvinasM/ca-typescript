import React from 'react';
import classes from './navbar-toggler.module.scss';

type NavbarTogglerProps = {
  isOpen: boolean,
  onClick: VoidFunction,
  logoText: string,
};

const NavbarToggler: React.FC<NavbarTogglerProps> = ({
  isOpen,
  onClick,
  logoText,
}) => (
  <div className={classes.toggler}>
    <span className={classes.logotext}>{logoText}</span>
    <i
      className={['fa-light', isOpen ? 'fa-xmark' : 'fa-bars'].join(' ')}
      onClick={onClick}
    />
  </div>
);

export default NavbarToggler;
