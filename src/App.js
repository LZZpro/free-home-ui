import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/Home';
import VideoDetailPage from './pages/VideoDetailPage';
import Anime from './pages/Anime';
import UploadPage from './pages/UploadPage';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/html/:urlSegment" element={<VideoDetailPage />} />
        <Route path='/anime' element={<Anime />} />
        <Route path="/upload" element={<UploadPage/>} />
      </Routes>
    </Router>
  );
};
// 无关紧要的说明
export default App;
