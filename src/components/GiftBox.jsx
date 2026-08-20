import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift } from 'lucide-react';

const GiftBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '4rem 1rem',
      width: '100%',
      zIndex: 10
    }}>
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="closed"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="glass-panel"
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem'
            }}
          >
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
            >
              <Gift size={80} color="var(--primary)" />
            </motion.div>
            <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Tap to Open Your Gift!</p>
          </motion.div>
        ) : (
          <motion.div
            key="opened"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-panel"
            style={{
              maxWidth: '90%',
              textAlign: 'center',
              padding: '2rem'
            }}
          >
            <motion.h2 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{ color: 'var(--primary)', marginBottom: '1rem' }}
            >
              I'm So Sorry I Couldn't Be There! 🥺
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ fontSize: '1.1rem', lineHeight: '1.6' }}
            >
              I actually planned to be there on the 20th and give you a huge surprise that I was in Kolkata for your birthday. 
              <br /><br />
              But unfortunately, I got caught up in some unexpected issues at home and just couldn't make it. I miss you so much on your special day.
              <br /><br />
              Don't worry though! Your gift order has been placed and it will reach you by the <strong>28th</strong>. 
              <br /><br />
              I love you, and I hope this small virtual surprise brings a smile to your face today. ❤️
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GiftBox;
