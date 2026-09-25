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
        
        {/* Minimalist Geometry Loader */}
        <div className="relative flex items-center justify-center w-24 h-24">
          {/* Rotating Outer Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-gray-100 border-t-[#004080] border-r-[#004080] animate-spin" style={{ animationDuration: '1.5s' }} />
          
          {/* Inner Pulsing Diamond */}
          <div className="absolute w-8 h-8 bg-[#0c1b2a] rotate-45 animate-pulse rounded-sm" />
        </div>

        {/* Loading Text */}
        <div className="text-[#0c1b2a] text-xs font-extrabold tracking-[0.4em] uppercase">
          Loading
        </div>
      </div>
    </div>
  );
}
