import React from 'react';
import classNames from 'classnames';

import './btn.scss';

interface Props {
  label: string;
  type?: string;
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
