import React, { useRef, useState } from 'react';
import { Heart, Hand } from 'lucide-react';

export default function Letter({ onForgive }) {
  const [step, setStep] = useState(0);
  const [noBtnStyle, setNoBtnStyle] = useState({});
  const choiceCardRef = useRef(null);

  const moveNoButton = () => {
    if (!choiceCardRef.current) return;

    const card = choiceCardRef.current.getBoundingClientRect();

    const buttonWidth = 130;
    const buttonHeight = 52;
    const padding = 20;

    // card ke andar hi jagah nikaalo
    const availableWidth = card.width - buttonWidth - padding * 2;
    const availableHeight = card.height - buttonHeight - padding * 2;

    const randomX = Math.floor(Math.random() * Math.max(20, availableWidth)) + padding;
    const randomY = Math.floor(Math.random() * Math.max(20, availableHeight)) + padding;

    setNoBtnStyle({
      position: 'absolute',
      left: `${randomX}px`,
      top: `${randomY}px`,
      transition: 'all 0.18s ease-out',
      zIndex: 5,
    });
  };

  return (
    <div className="card-container">
      {step === 0 ? (
        <div className="apology-card fade-in">
          <div className="card-header">
            <span className="emoji-badge">🌸</span>
            <h1 className="main-heading">A Sincere Message</h1>
            <div className="accent-line" />
          </div>

          <div className="card-body">
            <p className="apology-paragraph">
              I’m really sorry for being aggressive, hyper, and immature. I’m sorry for irritating you, for not understanding things earlier, and for hurting you. I’m also sorry for the harsh things I said. Truly, I’m sorry for everything.
            </p>

            <p className="apology-paragraph">
              If you can, please give me a second chance. I truly understand my mistakes now, and I promise I will never repeat them again. Please forgive me.
            </p>
          </div>

          <div className="card-footer card-footer-column">
            <div className="forgive-hint top-hint">
              <span>Click here 👇</span>
              
            </div>

            <button
              className="primary-btn pulse highlight-btn"
              onClick={() => setStep(1)}
            >
              Please Forgive Me 🌺 !!!!!! 
            </button>

            <p>Click the “Forgive Me” button to go to the next page</p>
          </div>
        </div>
      ) : (
        <div
          className="choice-card choice-card-large fade-in"
          ref={choiceCardRef}
        >
          <div className="card-header">
            <span className="emoji-badge">🕊️🌼</span>
            <h2 className="sub-heading">Will you forgive me?</h2>
            <p className="sub-tagline">Please think carefully.</p>
          </div>

          <div className="choice-buttons choice-buttons-row">
            <button
              className="forgive-btn yes-btn"
              onClick={() => onForgive('forgiven')}
            >
              Yes, I do 😊
            </button>

            <button
              className="no-btn no-btn-red"
              style={noBtnStyle}
              onMouseEnter={moveNoButton}
              onMouseMove={moveNoButton}
              onClick={moveNoButton}
              onTouchStart={moveNoButton}
            >
              Nope 😑
            </button>
          </div>
        </div>
      )}
    </div>
  );
}