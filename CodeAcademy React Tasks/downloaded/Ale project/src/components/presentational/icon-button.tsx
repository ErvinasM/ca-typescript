import React from 'react';
import { FontAwesomeIcon, type FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import cls from 'helpers/cls';
import classes from './icon-button.module.scss';

export type IconButtonProps = Omit<FontAwesomeIconProps, 'onClick' | 'color'> & {
  color?: 'primary' | 'white',
  onClick?: React.DOMAttributes<HTMLButtonElement>['onClick'],
  variant?: 'outlined' | 'solid'
};

const IconButton: React.FC<IconButtonProps> = ({
  color = 'primary',
  variant = 'solid',
  onClick,
  ...fontAwsomeIconProps
}) => (
  <button type="button" className={cls(classes.btn, classes[color], classes[variant])} onClick={onClick}>
    <FontAwesomeIcon {...fontAwsomeIconProps} />
  </button>
);

export default IconButton;
