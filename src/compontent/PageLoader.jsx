import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    setIsFadingOut(false);
    
    // Start fading out after a short duration
    const fadeTimer = setTimeout(() => {
      setIsFadingOut(true);
    }, 500);

    // Completely remove from DOM after fade out completes
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [location.pathname]);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[99999] bg-white flex flex-col items-center justify-center transition-opacity duration-300 ${
        isFadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center justify-center gap-8">
        
        {/* Logo + Spinner */}
        <div className="relative flex items-center justify-center w-28 h-28">
          {/* Rotating Outer Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-gray-100 border-t-[#004080] border-r-[#004080] animate-spin" style={{ animationDuration: '1.5s' }} />
          
          {/* Second slower ring */}
          <div className="absolute inset-2 rounded-full border border-gray-100 border-b-[#c8a84b] border-l-[#c8a84b] animate-spin" style={{ animationDuration: '2.5s', animationDirection: 'reverse' }} />

          {/* Company Logo in center */}
          <img
            src="/logo.png"
            alt="MBA Contracting Logo"
            className="w-14 h-14 object-contain animate-pulse"
            style={{ animationDuration: '2s' }}
          />
        </div>

        {/* Loading Text */}
        <div className="text-[#0c1b2a] text-xs font-extrabold tracking-[0.4em] uppercase">
          Loading...
        </div>
      </div>
    </div>
  );
}
