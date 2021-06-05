import React from 'react';
import { data } from '../../gameData';
import Pexeso from '../Pexeso/Pexeso';
import TimeStop from '../TimeStop/TimeStop';

const GamePlace = () => {
    const renderTimeStop = () => {
        const date = new Date();
        const seconds = date.getMinutes() * 60 + date.getSeconds();
        return <TimeStop startSeconds={seconds} seconds={30} />
    }

    return (
        <div className="game-place">
            <div className="timestop">
                {renderTimeStop()}
            </div>
            <Pexeso data={data} />
        </div>
    );
};

export default React.memo(GamePlace);