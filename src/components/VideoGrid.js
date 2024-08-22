import React from 'react';
import VideoItem from './VideoItem';
import '../css/VideoGrid.css';

const videos = [
    {
      id: 1,
      // videoUrl: 'mov_bbb.mp4',
      videoUrl: 'FVLTYqNTLrLqQu.mp4',
      title: '我好喜欢啊',
      views: '132.6万',
      author: '小布呀',
      avatar: '这是头像',
      description: '二次元鬼畜',
      time: '6-28'
    },
    {
      id: 2,
      // videoUrl: 'movie.mp4',
      videoUrl: 'FVLTYqNTQtMqUv.mp4',
      title: '火男：你看你***呢！',
      views: '132.6万',
      author: '丁真',
      avatar: '这是头像',
      description: '你的顶针！！',
      time: '7-28'
    },
  ];
//id,videoUrl, title, views, comments, duration
//const preUrl = 'https://www.w3schools.com/html/';

const VideoGrid = () => {
  return (
    <div className="video-grid">
      {videos.map((video) => (
        <VideoItem 
          key={video.id} 
          videoUrl={video.videoUrl} 
          title={video.title} 
          views={video.views} 
          author={video.author} 
          avatar={video.avatar}
          description={video.description}
          time={video.time} 
        />
        
      ))}
    </div>
  );
};

export default VideoGrid;
