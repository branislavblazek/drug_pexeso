import React, { useCallback, useState } from 'react';
import Card from './Card/Card';
import './Pexeso.css';

const Pexeso = ({data, onScoreUpdate}) => {
    const [openCards, setOpenCards] = useState([]);
    const [viewCards, setViewCards] = useState([]);

    const calculateScore = useCallback(() => {
        const all = data.length;
        const ok = openCards.length + 2;
        onScoreUpdate(Math.floor((ok / all) * 100));
    }, [data, openCards, onScoreUpdate])

    const appendToViewing = useCallback(card => {
        const len = viewCards.length;
        if (len === 0 || len === 2) {
            setViewCards([card])
        } else if (len === 1) {
            const pairIndex = viewCards.findIndex(item => 
                item.id === card.pair && item.pair === card.id
            );
            if (pairIndex > -1) {
                setViewCards([]);
                setOpenCards(openCards.concat(viewCards[0], card));
                calculateScore();
            } else {
                setViewCards(viewCards.concat(card));
            }
        }
    }, [viewCards, openCards, calculateScore]);

    const handleClickOnCard = useCallback(targetId => {
        appendToViewing(targetId);
    }, [appendToViewing]);

    const searchForVisible = useCallback(id => {
        const viewIndex = viewCards.findIndex(i => i.id === id);
        if (viewIndex > -1) return true;

        const openIndex = openCards.findIndex(i => i.id === id);
        if (openIndex > -1) return true;

        return false;
    }, [viewCards, openCards]);

    const renderCards = () => {
        if (!data) return null;
        return data.map(i => (
            <Card 
                value={i.value}
                id={i.id}
                pair={i.pair}
                isVisible={searchForVisible(i.id)}
                onClick={handleClickOnCard}
                key={i.id}
            />
        ))
    };

    return (
        <div className="pexeso">
            {renderCards()}
        </div>
    );
};

export default React.memo(Pexeso);