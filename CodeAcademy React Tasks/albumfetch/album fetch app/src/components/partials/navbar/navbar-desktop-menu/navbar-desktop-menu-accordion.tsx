import React from 'react';
import classes from './navbar-desktop-menu-accordion.module.scss';
import NavbarDesktopMenuItem from './navbar-desktop-menu-item';

type NavbarDesktopMenuAccordionProps = {
  title: string,
  children: React.ReactNode
};

const NavbarDesktopMenuAccordion: React.FC<NavbarDesktopMenuAccordionProps> = ({
  title,
  children,
}) => {
  const [open, setOpen] = React.useState<boolean>(false);

  const accordionWrapperClasses = [classes.accordion];
  if (open) accordionWrapperClasses.push(classes.open);

  return (
    <NavbarDesktopMenuItem>
      <div
        className={accordionWrapperClasses.join(' ')}
        onClick={() => setOpen(!open)}
      >
        <div className={classes.header}>
          <span>{title}</span>
          <i className={`fa-light fa-chevron-${open ? 'up' : 'down'}`} />
        </div>
        <div className={classes.content}>
          {children}
        </div>
      </div>
    </NavbarDesktopMenuItem>
  );
};

export default NavbarDesktopMenuAccordion;
