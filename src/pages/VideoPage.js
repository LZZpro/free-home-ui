import React, { useState } from 'react';
import Danmu from '../components/Danmu';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import '../css/VideoPage.css';


const videos = {
  1: {
    url: '/video/first.mp4',
    title: '这火男。。',
  },
  2: {
    url: '/video/first',
    title: '这火男。。',
  },
  // 更多视频对象...
};


const VideoPage = () => {
  const { id } = useParams();
  const video = videos[id];
  const [comments, setComments] = useState(['Hello World!', 'Nice Video!', 'Bilibili!']);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div className="video-page">
      <h1>{video.title}</h1>
      <ReactPlayer url={video.url} controls width="100%" />
      <Danmu comments={comments} />
    </div>
  );
};

export default VideoPage;
