import React, { useCallback } from 'react';
import Cover from './cover.png';
import './Card.css';

const Card = ({value, id, pair, isVisible, onClick}) => {
    const handeClick = useCallback(() => {
        onClick({id, pair});
    }, [onClick, id, pair]);

    const renderCard = () => {
        if (!isVisible) return <img src={Cover} alt="cover" />
        else {
            if (id.indexOf('image') > -1) return <img src={value} alt={id} />
            return <p>{value}</p>
        };
    }

    const classname = isVisible ? "card visible" : "card";

    return (
        <div className={classname} onClick={handeClick}>
            {renderCard()}
        </div>
    );
}

export default React.memo(Card);