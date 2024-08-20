import VideoPlayer from './VideoPlayer';
import '../css/VideoItem.css';
//import { useNavigate } from 'react-router-dom';

const VideoItem = ({ id, videoUrl, title, views, author, avatar, description, time }) => {
    // const navigate = useNavigate();
    const handleClick = () => {
        // const proxyUrl = `/w3c/${videoUrl}`;
        // navigate(proxyUrl, { replace: true });
        const videoDetailsUrl = `/html/${videoUrl}`;
        // navigate(videoDetailsUrl,{state: {title:{title}, author: {author},avatar:{avatar},description:{description}}})
        const videoData = [{title},{author},{avatar},{description}]
        localStorage.setItem('videoData',JSON.stringify(videoData))
        window.open(videoDetailsUrl, '_blank');
    };

    return ( 
        <div className="video-item" onClick={handleClick}>
            <VideoPlayer videoUrl={videoUrl} />
            <div className="video-info">
                <h5 className="video-title">{title}</h5>
                <p className="video-meta">
                    {author} &middot; {time}
                </p>
            </div>
        </div>

    );
};

export default VideoItem;
