import React from 'react';
import routes from '../../../navigation/routes';
import type NavbarLinkData from './types/navbar-link-data';
import NavbarMobileMenu from './navbar-mobile-menu';
import NavbarDesktopMenu from './navbar-desktop-menu';
import NavbarToggler from './navbar-toggler';
import classes from './index.module.scss';

const breakpoint = Number(classes.breakpoint.slice(0, -2));

const linksData: NavbarLinkData[] = [
  { to: routes.HomePage, text: 'Home' },
  { to: routes.ExplorePage, text: 'Explore' },
  { to: routes.FeedPage, text: 'My Feed' },
];

const logoText = 'StoryHive';
const accountBtn = 'Account';

const linksGroups = [
  {
    title: 'About',
    linksData: [
      { to: routes.AboutFrameworkPage, text: 'Framework' },
      { to: routes.AboutDevelopmentPage, text: 'Development' },
    ],
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState<boolean>(false);

  return (
    <>
      <header className={classes.navbar}>
        <NavbarDesktopMenu logoText={logoText} accountBtn={accountBtn} linksData={linksData} linksGroups={linksGroups} />
        <NavbarToggler
          isOpen={navbarOpen}
          onClick={() => setNavbarOpen(!navbarOpen)}
          logoText={logoText}
        />
      </header>
      <NavbarMobileMenu
        breakpoint={breakpoint}
        navbarOpen={navbarOpen}
        linksData={linksData}
        onClick={() => setNavbarOpen(false)}
        linksGroups={linksGroups}
      />
    </>
  );
};

export default Navbar;
