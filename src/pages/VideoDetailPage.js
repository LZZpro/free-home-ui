import React from 'react';
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import '../css/VideoDetailPage.css';
const VideoDetailPage = () => {
    const {urlSegment } = useParams();
    const videoParams = localStorage.getItem('videoData');
    const videoObj = JSON.parse(videoParams);
    console.log('videoObj',videoObj)
  // 根据 ID 获取视频的 URL 或其他详细信息
  const videoUrl = `http://localhost:8886/home/video/${urlSegment}`; // 这里应替换为实际的视频 URL

  return ( 
    <div className="video-detail-page">
    <div className="video-section">
        <h3>{videoObj[0].title}</h3>
      <ReactPlayer url={videoUrl} controls width="80%" height="auto" />
    </div>
    <div className="author-section">
        <img src={videoObj[2].avatar} alt="Author Avatar" className="author-avatar" />
        <h2 className="author-name">{videoObj[1].author}</h2>
        <p className="author-description">{videoObj[3].description}</p>
      </div>
  </div>
  );
};

export default VideoDetailPage;
