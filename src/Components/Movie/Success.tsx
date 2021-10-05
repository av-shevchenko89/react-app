import React from 'react';
import success from '../../assets/images/ok.svg';

export function Success() {
    return (
        <div className="success">
            <img src={success} alt="success" className="icon" />
            <h1>congratulations !</h1>
            <p>The movie has been added <br /> to database successfully </p>
        </div>
    )
}
