import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Music } from 'lucide-react';

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(err => {
          console.log("Autoplay blocked:", err);
        });
    }
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      zIndex: 100,
      background: 'var(--card-bg)',
      backdropFilter: 'blur(12px)',
      border: '1px solid var(--glass-border)',
      borderRadius: '50px',
      padding: '10px 20px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
      cursor: 'pointer'
    }} onClick={togglePlay}>
      {/* 
        Note: You'll need to place your actual music file (e.g., phir-kabhi.mp3) 
        in the public/assets/ folder and update this src.
      */}
      <audio 
        ref={audioRef} 
        src="/assets/background-music.mp3" 
        loop
      />
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        background: 'var(--primary)',
        color: 'white'
      }}>
        {isPlaying ? <Pause size={18} /> : <Play size={18} style={{ marginLeft: '2px' }}/>}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', color: 'var(--text-color)' }}>
        <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>Song Suggestion</span>
        <span style={{ fontSize: '0.65rem', opacity: 0.8, display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Music size={10} /> {isPlaying ? 'Playing...' : 'Tap to Play'}
        </span>
      </div>
    </div>
  );
};

export default AudioPlayer;
