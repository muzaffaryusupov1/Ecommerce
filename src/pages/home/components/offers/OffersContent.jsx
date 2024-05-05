import React, { useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';

function OffersContent() {
    const initialTime = {
        day: 0,
        hour: 0,
        min: 0,
        sec: 0
    }
    const [time, setTime] = useState(initialTime)

    function generateTime(a) {
        const total = Date.parse(a) - Date.parse(new Date());
        const sec = Math.floor((total / 1000) % 60);
        const min = Math.floor((total / 1000 / 60) % 60);
        const hour = Math.floor((total / (1000 * 60 * 60)) % 24);
        const day = Math.floor(total / (1000 * 60 * 60 * 24));

        if (total <= 0) {
            setTime(initialTime)
        } else {
            setTime({
                day,
                hour,
                min,
                sec
            });
        }
    }

    function padString(a) {
        return String(a).padStart('2', '0')
    }

    const { productOffers } = useSelector(state => state.home);

    setInterval(() => generateTime('05/07/2024'), 1000)
    return (
        <>
            {
                productOffers.loading ? <Skeleton width={238} height={236} /> :
                    <div className="offers-content">
                        <div>
                            <h4 className="offers-title">Hafta chegirmalari</h4>
                            <p className="offers-subtitle">50% gacha</p>
                        </div>
                        <div className="offers-time">
                            <div className="offers-time__block">
                                <span className="offers-time__number">{padString(time.day)}</span>
                                <span className="offers-time__text">Kun</span>
                            </div>
                            <div className="offers-time__block">
                                <span className="offers-time__number">{padString(time.hour)}</span>
                                <span className="offers-time__text">Soat</span>
                            </div>
                            <div className="offers-time__block">
                                <span className="offers-time__number">{padString(time.min)}</span>
                                <span className="offers-time__text">Min</span>
                            </div>
                            <div className="offers-time__block">
                                <span className="offers-time__number">{padString(time.sec)}</span>
                                <span className="offers-time__text">Sec</span>
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default OffersContent