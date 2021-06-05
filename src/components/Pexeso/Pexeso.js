import React, { useCallback, useState } from 'react';
import Card from './Card/Card';
import './Pexeso.css';

const Pexeso = ({data}) => {
    const [openCards, setOpenCards] = useState([]);
    const [viewCards, setViewCards] = useState([]);

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
            } else {
                setViewCards(viewCards.concat(card));
            }
        }
    }, [viewCards, openCards]);

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