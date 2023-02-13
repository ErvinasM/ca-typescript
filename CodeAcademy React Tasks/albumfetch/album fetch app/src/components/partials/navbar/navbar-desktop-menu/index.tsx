import React from 'react';
import NavbarDesktopMenuLink from './navbar-desktop-menu-link';
import classes from './index.module.scss';
import type NavbarLinkData from '../types/navbar-link-data';
import NavbarDesktopMenuAccordion from './navbar-desktop-menu-accordion';

type NavbarDesktopMenuProps = {
  logoText: string,
  accountBtn: string,
  linksData: NavbarLinkData[],
  linksGroups: ({ title: string, linksData: NavbarLinkData[] })[]
};

const NavbarDesktopMenu: React.FC<NavbarDesktopMenuProps> = ({
  linksData,
  linksGroups,
  accountBtn,
  logoText,
}) => (
  <div className={classes.links}>
    <span className={classes.logo}>{logoText}</span>
    <div className={classes.navLinks}>
      {linksData.map(({ to, text }) => (
        <NavbarDesktopMenuLink
          key={to}
          to={to}
        >
          {text}
        </NavbarDesktopMenuLink>
      ))}

      {linksGroups.map((linksGroup) => (
        <NavbarDesktopMenuAccordion title={linksGroup.title}>
          {linksGroup.linksData.map(({ text, to }) => (
            <NavbarDesktopMenuLink key={to} to={to}>
              {text}
            </NavbarDesktopMenuLink>
          ))}
        </NavbarDesktopMenuAccordion>
      ))}
    </div>
    <button className={classes.abtn}>
      <i className="fa-regular fa-user" />
      {accountBtn}
    </button>
  </div>
);

export default NavbarDesktopMenu;
