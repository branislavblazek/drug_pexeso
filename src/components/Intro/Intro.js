import React, { useCallback } from 'react';
import Background from './background.jpg';
import './Intro.css';

const Intro = ({onSubmit}) => {
    const handleSubmit = useCallback(() => onSubmit(), [onSubmit]);

    return (
        <div className="intro">
            <img src={Background} alt="Pozadie" />
            <div className="text">
                <div className="heading">
                    <h1>Čo vieš o drogách?</h1>
                </div>
                <div className="button-wrap">
                    <button onClick={handleSubmit}>ZISTI TU!</button>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Intro);