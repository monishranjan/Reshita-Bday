import React from 'react';
import { motion } from 'framer-motion';

const Greeting = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem 1rem',
        marginTop: '2rem',
        zIndex: 10
      }}
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 100 }}
        style={{
          fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
          marginBottom: '1rem',
          lineHeight: '1.2'
        }}
        className="text-gradient"
      >
        Happy Birthday<br />Reshita!
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{
          fontSize: '1.2rem',
          maxWidth: '400px',
          opacity: 0.9,
          marginBottom: '2rem'
        }}
      >
        Wishing you the most magical, beautiful, and joyous day ever. You mean the world to me.
      </motion.p>
      
      <motion.img
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        src="/assets/placeholders/placeholder.jpg"
        alt="Reshita"
        className="photo-frame"
      />
    </motion.div>
  );
};

export default Greeting;
