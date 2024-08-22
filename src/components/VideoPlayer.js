import React, { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ videoUrl }) => {
  const playerRef = useRef(null);
  const canvasRef = useRef(null);
  const [thumbnail, setThumbnail] = useState('');
  
  // const completeUrl = 'https://www.w3schools.com/html/'+videoUrl;
  const completeUrl = 'http://localhost:8886/home/video/'+videoUrl;

  const captureThumbnail = () => {
    const player = playerRef.current.getInternalPlayer();
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    try {
      canvas.width = player.videoWidth;
      canvas.height = player.videoHeight;

      context.drawImage(player, 0, 0, canvas.width, canvas.height);
      setThumbnail(canvas.toDataURL('image/png'));
    } catch (e) {
      console.error('Failed to capture thumbnail:', e);
    }
  };

  useEffect(() => {
    const handlePlayerReady = () => {
      captureThumbnail();
    };

    const internalPlayer = playerRef.current?.getInternalPlayer();

    if (internalPlayer) {
      internalPlayer.addEventListener('loadeddata', handlePlayerReady);
    }

    return () => {
      if (internalPlayer) {
        internalPlayer.removeEventListener('loadeddata', handlePlayerReady);
      }
    };
  }, [videoUrl]);

  return (
    <div>
      {thumbnail ? (
        <img src={thumbnail} alt="Video Thumbnail" />
      ) : (
        <ReactPlayer
          ref={playerRef}
          url={completeUrl}
          width="100%"
          height="auto"
          style={{ display: 'block' }}
          controls={false}
          playing={false}
        />
      )}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
};


export default VideoPlayer;
