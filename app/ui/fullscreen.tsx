'use client'

import { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';

export default function FullScreenComponent() {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  useEffect(() => {
    if (!isMobile) return; // Exit early if not on a mobile device

    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    const suggestFS = () => {
      if (window.innerWidth > window.innerHeight && !document.fullscreenElement) {
        alert('Please enter fullscreen for a better experience');
      }
    };

    document.addEventListener('fullscreenchange', onFullscreenChange);
    window.addEventListener('resize', suggestFS);

    suggestFS();

    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange);
      window.removeEventListener('resize', suggestFS);
    };
  }, []);

  const enterFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.log(`Error attempting to enable full-screen mode: ${err.message} ${err.name}`);
      });
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch((err) => {
        console.log(`Error attempting to exit full-screen mode: ${err.message} ${err.name}`);
      });
    }
  };

  if (!isMobile) return null; // Do not render the button on non-mobile devices

  return (
    <div>
      <button onClick={isFullscreen ? exitFullscreen : enterFullscreen} className='text-white text-xs'>
        {isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
      </button>
    </div>
  );
}
