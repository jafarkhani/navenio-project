import React from 'react';
import './loading.scss';

interface Props{
    message ?: string;
}

const Loading: React.FC<Props> = ({message}) => {

        return (
            <div data-testid="loading" className="loading">
                <span className="loading-icon" ></span>
                <div className="loading-text">{ message == null ? "loading..." : message }</div>
            </div>
        );
}

export default Loading;