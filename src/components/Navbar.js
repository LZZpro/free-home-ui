import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import LoginRegisterModal from './LoginRegisterModal';
import { Avatar } from '@douyinfe/semi-ui';
import '../css/Navbar.css';
const Navbar = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLoginSuccess = (username) => {
    setUser({ username, avatarUrl: 'https://placekitten.com/100/100' }); // Simulate avatar URL
  };

  const handlePostClick = () => {
    // 处理“投稿”按钮点击事件的逻辑
    window.open('/upload'); // 假设点击后打开一个新的页面
  };
  

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/images/freenight.png" alt="freenight" className="logo" />
        <div className="nav-links">
          <Link to="/">首页</Link>
          <Link to="/VideoPage">番剧</Link>  
          <Link to="/Anime">漫画</Link>
          <Link to="/lifeCycle">生活圈</Link>
        </div>
      </div>

      <div className="navbar-center">
        <input type="text" placeholder="搜索视频、番剧、UP主或AV号" className="search-input" />
        <button className="search-button">🔍</button>
      </div>

      <div className="navbar-right">

        {user ? (
          <Avatar onClick={handleOpenModal} src={user.avatarUrl} alt={user.username} style={{ backgroundColor: '#87d068', margin: 4 }} />
        ) : (
          <Avatar onClick={handleOpenModal} style={{ backgroundColor: '#87d068', margin: 4 }}>登录</Avatar>
        )}
        <LoginRegisterModal isOpen={isModalOpen} onClose={handleCloseModal} onLoginSuccess={handleLoginSuccess} />

        <Link to="/vip" className="nav-icon">🎖️大会员</Link>
        
        <Link to="/messages" className="nav-icon">✉️消息</Link>
        <Link to="/activities" className="nav-icon">📢动态</Link>
        <Link to="/favorites" className="nav-icon">⭐收藏</Link>
        <Link to="/history" className="nav-icon">🕓历史</Link>
        <button className="submit-button" onClick={handlePostClick}>投稿</button>
      </div>
    </nav>
  );
};

export default Navbar;
