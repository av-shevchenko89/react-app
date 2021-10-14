import React from 'react';
import './error-boundary.scss';

interface ErrorState {
    hasError: boolean;
}

export class ErrorBoundary extends React.Component {
    state: ErrorState;

    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        // fallback UI
        const Oops = () => (
            <h2 className="error-msg">Oops, something went wrong...</h2>
        );

        return this.state.hasError ? <Oops /> : this.props.children
    }
}
