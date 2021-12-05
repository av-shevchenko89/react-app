import React from 'react';
import classNames from 'classnames';

import './btn.css';

interface Props {
  label: string;
  type?: 'solid' | 'transparent' | 'grey';
  onClick?: () => void;
}

export const Btn = ({ label, type, onClick }: Props) => {
  const btnClass = type ? classNames(['btn', type]) : classNames(['btn']);

  return (
    <button className={btnClass} onClick={onClick}>
      {label}
    </button>
  );
};
