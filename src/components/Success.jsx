import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Coffee } from 'lucide-react';

export default function Success({ mode }) {
  useEffect(() => {
    // Heart confetti or standard confetti bursts on load
    const duration = 4 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff6b8b', '#ff4757', '#ffafbd']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff6b8b', '#ff4757', '#ffafbd']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  }, []);

  return (
    <div className="success-container fade-in">
      <div className="success-card">
        <div className="success-icon-wrapper">
          {mode === 'forgiven' ? (
            <div className="heart-halo">
              <Heart className="success-icon pulse fill" />
            </div>
          ) : (
            <div className="heart-halo">
              <Coffee className="success-icon pulse" />
            </div>
          )}
          <Sparkles className="sparkle-decorator sd-1" />
          <Sparkles className="sparkle-decorator sd-2" />
        </div>

        {mode === 'forgiven' ? (
          <>
            <h1 className="success-heading">Thank You 🤩! Tara....rarararara...rararra....</h1>
            <p className="success-message">
            You made me really happy. I promise I will be better, understand you more, and never repeat my mistakes. Thank you for giving me another chance.

            </p>
          </>
        ) : (
          <>
            <h1 className="success-heading">Let's Talk! 💬</h1>
            <p className="success-message">
              I completely understand. Talking things through is the best way to heal. I am ready to listen, understand, and learn. Please message me whenever you are ready.
            </p>
          </>
        )}

        <div className="success-footer">
          <div className="small-accent">A new beginning ✨</div>
        </div>
      </div>
    </div>
  );
}
