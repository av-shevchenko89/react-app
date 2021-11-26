import React from 'react';
import success from '../assets/ok.svg';

export function SuccessModal() {
    return (
        <div className="success">
            <img src={success} alt="success" className="icon" />
            <h1>congratulations !</h1>
            <p>The movie has been added <br /> to database successfully </p>
        </div>
    )
}
