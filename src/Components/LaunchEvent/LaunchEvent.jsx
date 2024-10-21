'use client'

import React, { useState, useEffect } from 'react'
import { X } from 'react-bootstrap-icons'
import styles from './LaunchEvent.module.css'

export default function LaunchEvent() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const hasBeenShown = localStorage.getItem('launchEventShown')
        if (!hasBeenShown) {
            setIsVisible(true)
            localStorage.setItem('launchEventShown', 'true')
        }
    }, [])

    const handleClose = () => {
        setIsVisible(false)
    }

    if (!isVisible) return null

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <button className={`${styles.closeButton} shadow`} onClick={handleClose}>
                    <X size={30} />
                </button>
                <img
                    src="/images/launch-event.jpeg"
                    alt="Launch Event"
                    className={styles.eventImage}
                />
            </div>
        </div>
    )
}