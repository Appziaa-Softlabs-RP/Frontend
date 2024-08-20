import React, { useState, useEffect } from 'react';

function CountDown() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [mins, setMins] = useState(0);
    const [secs, setSecs] = useState(0);

    useEffect(() => {
        const getRemainingTime = async () => {
            const today = new Date();
            const offerDate = new Date("May 31, 2024"); // Update with your actual offer date

            if (today.getSeconds() === offerDate.getSeconds()) {
                offerDate.setDate(offerDate.getDate() + 15); // Reset offer date every 15 days (adjust as needed)
            }

            const offerTime = offerDate - today;

            const offerDays = Math.floor(offerTime / (1000 * 60 * 60 * 24));
            const offerHours = Math.floor((offerTime / (1000 * 60 * 60)) % 24);
            const offerMins = Math.floor((offerTime / (1000 * 60)) % 60);
            const offerSecs = Math.floor((offerTime / 1000) % 60);

            setDays(offerDays);
            setHours(offerHours);
            setMins(offerMins);
            setSecs(offerSecs);
        };

        getRemainingTime();

        const intervalId = setInterval(getRemainingTime, 1000);

        return () => clearInterval(intervalId); // Cleanup function for the interval

    }, []); // Empty dependency array to run the effect only once after mount

    return (
        <div className="wrap">
            <div className="timer">
                <div className="days col">
                    <span id="days_left">{days}</span>
                    <span className="time_heading">Days</span>
                </div>
                <div className="hours col">
                    <span id="hours_left">{hours.toString().padStart(2, '0')}</span>
                    <span className="time_heading">Hours</span>
                </div>
                <div className="mins col">
                    <span id="mins_left">{mins.toString().padStart(2, '0')}</span>
                    <span className="time_heading">Mins</span>
                </div>
                <div className="secs col">
                    <span id="secs_left">{secs.toString().padStart(2, '0')}</span>
                    <span className="time_heading">Sec</span>
                </div>
            </div>
        </div>
    );
}

export default CountDown;