import React from 'react';
import { motion } from 'framer-motion';

const LetterSection = ({ children, delay = 0 }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      style={{
        padding: '3rem 1.5rem',
        width: '100%',
        maxWidth: '600px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}
    >
      {children}
    </motion.section>
  );
};

export default LetterSection;
