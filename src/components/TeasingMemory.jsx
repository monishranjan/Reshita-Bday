import React from 'react';
import { motion } from 'framer-motion';

const TeasingMemory = ({ title, text, images = [], isReversed }) => {
  return (
    <div className={`glass-panel`} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      width: '100%',
      padding: '2rem',
      textAlign: 'left',
      alignItems: 'center'
    }}>
      <div style={{ width: '100%' }}>
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ 
            color: 'var(--primary)', 
            fontSize: '1.8rem', 
            marginBottom: '1.2rem',
            fontFamily: 'Playfair Display, serif'
          }}
        >
          {title}
        </motion.h3>
        
        {/* Render text with staggered animation if possible, or just a fade */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ 
            fontSize: '1.15rem', 
            lineHeight: '1.7', 
            opacity: 0.9,
            whiteSpace: 'pre-line' 
          }}
        >
          {text}
        </motion.div>
      </div>

      {images.length > 0 && (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: images.length > 1 ? 'repeat(auto-fit, minmax(200px, 1fr))' : '1fr',
          gap: '1rem',
          width: '100%',
          marginTop: '1rem'
        }}>
          {images.map((imgUrl, idx) => (
            <motion.img 
              key={idx}
              src={imgUrl} 
              alt="Memory" 
              initial={{ opacity: 0, scale: 0.8, rotate: Math.random() * 6 - 3 }} // Random tilt
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 * idx, type: 'spring' }}
              style={{
                width: '100%',
                maxHeight: '400px',
                borderRadius: '12px',
                objectFit: 'cover',
                border: '3px solid var(--primary)',
                boxShadow: '0 4px 15px rgba(255,123,156,0.3)',
                background: '#fff' // In case it's a transparent png, give it a polaroid feel
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TeasingMemory;
