import React, { useState } from 'react';
import Greeting from './components/Greeting';
import GiftBox from './components/GiftBox';
import FloatingElements from './components/FloatingElements';
import LetterSection from './components/LetterSection';
import TeasingMemory from './components/TeasingMemory';
import AudioPlayer from './components/AudioPlayer';
import Envelope from './components/Envelope';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import './index.css';

function App() {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  return (
    <>
      {/* The Opening Envelope */}
      {!isLetterOpen && <Envelope onOpen={() => setIsLetterOpen(true)} />}

      {/* The Letter (only visible/scrollable once opened) */}
      <div style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: '4rem',
        opacity: isLetterOpen ? 1 : 0,
        pointerEvents: isLetterOpen ? 'auto' : 'none', // Prevent interaction before opening
        transition: 'opacity 1s ease-in-out',
        // Prevent scrolling while envelope is closed
        height: isLetterOpen ? 'auto' : '100vh',
        overflow: isLetterOpen ? 'visible' : 'hidden' 
      }}>
        <FloatingElements />
        {isLetterOpen && <AudioPlayer />}
        
        {/* 1. Cover / Main Message */}
        <section style={{ position: 'relative', minHeight: '100vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '4rem 1rem', boxSizing: 'border-box' }}>
          <Greeting />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isLetterOpen ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1, duration: 1 }}
            style={{ maxWidth: '500px', textAlign: 'center', marginTop: '1rem' }}
          >
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--text-color)' }}>
              Through every fight, late-night trip, and miles between us, you’re still my favorite person. I’m so sorry I couldn’t be in Kolkata today, but my heart is right there with you.
            </p>
          </motion.div>
          
          <motion.img 
            initial={{ opacity: 0, y: 20 }}
            animate={isLetterOpen ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.5, duration: 1 }}
            src="/assets/images/1.jpeg" 
            style={{ width: '180px', height: '180px', objectFit: 'cover', borderRadius: '50%', border: '4px solid var(--primary)', marginTop: '2rem', marginBottom: '4rem', boxShadow: '0 0 20px rgba(255,123,156,0.3)' }}
            alt="Us"
          />

          <motion.div
            initial={{ opacity: 0 }}
            animate={isLetterOpen ? { opacity: 1, y: [0, 10, 0] } : {}}
            transition={{ delay: 2, duration: 1.5, repeat: Infinity }}
            style={{ position: 'absolute', bottom: '20px', color: 'var(--primary)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
          >
            <span style={{ fontSize: '0.9rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll for more</span>
            <ChevronDown size={24} />
          </motion.div>
        </section>

        {/* 2. What I Love Most About You */}
        <LetterSection delay={0.2}>
          <TeasingMemory 
            title="What I Love Most About You" 
            text={"Although there are many, one is that I love your fiery drama—how you get angry over the smallest things, and how winning back your smile becomes the sweetest, most rewarding part of my entire day."}
            images={["/assets/images/2.jpeg", "/assets/images/3.jpeg"]}
          />
        </LetterSection>

        {/* 3. Our Story Intro & The First Meet */}
        <LetterSection>
          <TeasingMemory 
            title="Our Story" 
            text={"From Kolkata flowers and Mandarmani shores to navigating miles and silly fights, our year proved one thing: no matter what, we always find our way right back to each other.\n\nDo you remember our first meet in Kolkata? We stayed at the Demattrie hotel and had that dinner nearby around 7pm. I still remember how your face lit up when I gave you the flowers and bouquet. We watched movies together. The next morning at 6 AM, we were off to Mandarmani! Even though your health was down, sitting by the sea at night with you was perfect."}
            images={["/assets/images/4.jpeg", "/assets/images/5.jpeg"]}
          />
        </LetterSection>

        {/* 4. God's Plan */}
        <LetterSection>
          <TeasingMemory 
            title="God's Plan" 
            text={"Returning from Howrah, I thought our meet was over as I headed to Puri. But fate (or the Indian Railways) stepped in!\n\nMy train got delayed, forcing me to catch my Patna train and stay at Al Sana hotel. I'm so glad you came the next morning. We had such a beautiful time walking around Princep Garden. When you left me at the station later, I won't lie... I almost cried."}
            images={["/assets/images/6.jpeg", "/assets/images/7.jpeg"]}
          />
        </LetterSection>

        {/* 5. Recent Trip */}
        <LetterSection>
          <TeasingMemory 
            title="Making More Memories" 
            text={"Just recently, we were back at Demattrie hotel. Exploring the New Market area, eating all that amazing street food, watching movies, and just having the best time together.\n\nEvery trip with you is an adventure I never want to end."}
            images={["/assets/images/8.jpeg", "/assets/images/9.jpeg"]}
          />
        </LetterSection>

        {/* 6. Through It All */}
        <LetterSection>
          <TeasingMemory 
            title="Through It All" 
            text={"Neither of us actually remembers our exact relationship start date, but it was somewhere around April or May. It's been a year now.\n\nWe've had multiple fights, some so extreme that we both took a step back to give each other time. But fate brought us back every time, and I hope it does the same every time we are apart.\n\nBeing long-distance partners is incredibly hard for me. I wish I was there with you, and I hope to be with you soon."}
            images={["/assets/images/10.jpeg", "/assets/images/11.jpeg"]}
          />
        </LetterSection>

        {/* 7. Dreams Together */}
        <LetterSection>
          <TeasingMemory 
            title="Dreams Together" 
            text={"Flights above the clouds, quiet mountain escapes, and train journeys made for two—from side-lower views to private 1AC coupes.\n\nAbove all destinations, my biggest dream is giving you all my time, right by your side. A pending promise, but coming soon."}
            images={["/assets/images/12.jpeg", "/assets/images/13.jpeg"]}
          />
        </LetterSection>

        {/* 8. The Gift */}
        <LetterSection>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <h2 style={{ color: 'var(--text-color)', marginBottom: '2rem', fontFamily: 'Playfair Display, serif', fontSize: '2rem' }}>
              About Today...
            </h2>
            <GiftBox />
          </div>
        </LetterSection>

      </div>
    </>
  )
}

export default App;
