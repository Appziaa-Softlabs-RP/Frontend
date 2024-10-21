'use client'

import React, { useState, useEffect } from 'react'
import { X } from 'react-bootstrap-icons'
import styles from './LaunchEvent.module.css'

export default function LaunchEvent() {
    const [isVisible, setIsVisible] = useState(false)
    const [timeLeft, setTimeLeft] = useState(0)

    useEffect(() => {
        const hasBeenShown = localStorage.getItem('launchEventShown')
        if (!hasBeenShown) {
            setIsVisible(true)
            localStorage.setItem('launchEventShown', 'true')
        }

        const calculateTimeLeft = () => {
            const now = new Date()
            const target = new Date(now)
            target.setHours(18, 0, 0, 0) // Set to 6 PM today

            if (now >= target) {
                return 0
            }

            return Math.floor((target.getTime() - now.getTime()) / 1000)
        }

        setTimeLeft(calculateTimeLeft())

        const timer = setInterval(() => {
            const newTimeLeft = calculateTimeLeft()
            setTimeLeft(newTimeLeft)

            if (newTimeLeft <= 0) {
                clearInterval(timer)
            }
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const handleClose = () => {
        setIsVisible(false)
    }

    const formatTime = (seconds) => {
        if (seconds <= 0) return '00:00'
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
    }

    if (!isVisible) return null

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={styles.closeButton} onClick={handleClose}>
                    <X size={30} />
                </button>
                <div className={styles.countdownWrapper}>
                    <span className={styles.countdownText}>Time Left:</span>
                    <span className={styles.countdownTimer}>{formatTime(timeLeft)}</span>
                </div>
                <img
                    src="/images/launch-event.jpeg"
                    alt="Launch Event"
                    className={styles.eventImage}
                />
            </div>
        </div>
    )
}