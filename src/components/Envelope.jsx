import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail } from 'lucide-react';

const Envelope = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1000); // Wait for the fade out animation
  };

  return (
    <AnimatePresence>
      {!isOpening && (
        <motion.div
          exit={{ opacity: 0, scale: 1.2, filter: 'blur(10px)' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'var(--bg-color)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
          }}
          onClick={handleOpen}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.5rem'
            }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <Mail size={100} color="var(--primary)" />
            </motion.div>
            
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ 
                fontFamily: 'Playfair Display, serif', 
                color: 'var(--text-color)',
                fontSize: '2rem',
                marginBottom: '0.5rem'
              }}>
                To Reshita
              </h1>
              <p style={{ 
                color: 'var(--secondary)', 
                letterSpacing: '2px', 
                textTransform: 'uppercase',
                fontSize: '0.8rem'
              }}>
                Tap to open your letter
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Envelope;
