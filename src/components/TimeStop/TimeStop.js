import React, {useEffect, useState} from 'react';

const TimeStop = ({startSeconds, seconds}) => {
    const [left, setLeft] = useState(seconds);

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const actual = date.getMinutes() * 60 + date.getSeconds();
            setLeft(30 - actual + startSeconds);
            if (actual >= startSeconds + seconds) {
                clearInterval(interval)
            }
        }, 1000)
    }, [setLeft, startSeconds, seconds]);

    return (
        <div className="TimeStop">
            {left}
        </div>
    );
};

export default React.memo(TimeStop);