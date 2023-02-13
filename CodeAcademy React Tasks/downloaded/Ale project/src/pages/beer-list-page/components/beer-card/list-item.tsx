import React from 'react';
import classes from './list-item.module.scss';

export type ListItemProps = {
  name: string,
  children: React.ReactNode,
};

const ListItem: React.FC<ListItemProps> = ({ name, children }) => (
  <li className={classes.listItem}>
    <span>{name}</span>
    <span>{children}</span>
  </li>
);

export default ListItem;
