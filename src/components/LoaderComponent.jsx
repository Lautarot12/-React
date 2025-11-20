import React from 'react'
import { motion } from 'framer-motion'
import '../styles/LoaderComponent.css'
import logo from '../assets/logopollosolonuevoanimation.png'

const LoaderComponent = () => {
    return (
        <div className="loader-container">
            <motion.img
                src={logo}
                alt="Logo Avícola Tello"
                className="loader-logo"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ 
                    opacity: 1, 
                    scale: [0.6, 1.05, 1],
                    rotate: [0, 2, -2, 0]
                }}
                transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    repeatDelay: 0.4,
                    ease: "easeInOut"
                }}
            />
            <motion.p 
                className="loader-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            >
                Cargando...
            </motion.p>
        </div>
    )
}

export default LoaderComponent
