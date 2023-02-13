import React from 'react';
import classes from './navbar-desktop-menu-item.module.scss';

type NavbarDesktopMenuItemProps = {
  children: React.ReactNode,
};

const NavbarDesktopMenuItem: React.FC<NavbarDesktopMenuItemProps> = ({
  children,
}) => (
  <div className={classes.item}>{children}</div>
);

export default NavbarDesktopMenuItem;
