import React from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import NavbarDesktopMenuItem from './navbar-desktop-menu-item';
import classes from './navbar-desktop-menu-link.module.scss';

type NavbarDesktopMenuLinkProps = {
  to: string,
  children: React.ReactNode,
  isChild?: boolean,
  onClick: NavLinkProps['onClick'],
};

const NavbarDesktopMenuLink: React.FC<NavbarDesktopMenuLinkProps> = ({
  to,
  children,
  isChild = false,
  onClick,
}) => (
  <NavbarDesktopMenuItem>
    <NavLink
      className={({ isActive }) => {
        const classList = [classes.link];
        if (isActive) classList.push(classes.active);
        if (isChild) classList.push(classes.child);

        return classList.join(' ');
      }}
      to={to}
      onClick={onClick}
    >
      {children}
    </NavLink>
  </NavbarDesktopMenuItem>
);

export default NavbarDesktopMenuLink;
