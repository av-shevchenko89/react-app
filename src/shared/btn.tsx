import React from 'react';

interface Props {
    label: string;
    onClick?: () => void;
}

export const Btn = (props: Props) => <button className="btn" onClick={props.onClick}>{props.label}</button>;
    
