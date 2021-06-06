import React, { useCallback, useState, useEffect } from 'react';
import { shuffled } from '../../gameData'
import Pexeso from '../Pexeso/Pexeso';
import './GamePlace.css';

const GamePlace = () => {
    const [isFinished, setIsFinished] = useState(false);
    const [score, setScore] = useState(0);
    const [left, setLeft] = useState(90);

    useEffect(() => {
        if (left > 0) {
            const timer = setTimeout(() => {
                setLeft(left - 1);
                return () => clearTimeout(timer);
            }, 1000)
        } else {
            setIsFinished(true);
        }
    }, [left]);
    
    const handleScore = useCallback(score => {
        setScore(score);
    }, []);

    const renderModal = () => {
        if (!isFinished) return null;
        return (
            <div className="modal">
               <div className="backdrop" />
               <div className="window">
                    <p>{`Tvoje skóre je ${score} %`}</p>
                    <button onClick={() => window.location.reload()}>skúsiť znova</button>
                </div> 
            </div>
        )
    }

    return (
        <div className="game-place">
            {renderModal()}
            <div className="timestop">
                {`Zostáva ${left} sekúnd`}
            </div>
            <Pexeso data={shuffled} onScoreUpdate={handleScore} />
        </div>
    );
};

export default React.memo(GamePlace);