import React, { useEffect, useState } from 'react';

const FullscreenComponent: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    const handleResize = () => {
      // Check if in landscape mode and not already in fullscreen
      if (window.innerWidth > window.innerHeight && !document.fullscreenElement) {
        // Show a button or message to prompt user to enter fullscreen
        alert("Please click the fullscreen button for a better experience in landscape mode.");
      }
    };

    document.addEventListener('fullscreenchange', onFullscreenChange);
    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      document.removeEventListener('fullscreenchange', onFullscreenChange);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const enterFullscreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <div>
      <button onClick={isFullscreen ? exitFullscreen : enterFullscreen}>
        {isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
      </button>
    </div>
  );
};

export default FullscreenComponent;
