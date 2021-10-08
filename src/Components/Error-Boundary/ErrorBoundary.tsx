import React from 'react';
import './Error-Boundary.scss';

export const ErrorBoundary: React.FC<{}> = ({ children }) => {
    // fallback UI
    const Oops = () => (
        <h2 className="error-msg">Oops, something went wrong...</h2>
    );

    const hasError = false;

    return <>{hasError ? <Oops /> : children}</>
}
