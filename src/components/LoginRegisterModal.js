// LoginRegisterModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import  '../css/LoginRegisterModal.css';
import axios from 'axios';

Modal.setAppElement('#root'); // Set the root element for accessibility




const LoginRegisterModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ username: '', password: '', confirmPassword: '' });

  const handleSwitchForm = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e, formType) => {
    const { name, value } = e.target;
    if (formType === 'login') {
      setLoginForm({ ...loginForm, [name]: value });
    } else {
      setRegisterForm({ ...registerForm, [name]: value });
    }
  };

  const handleSubmit = (e, formType) => {
    e.preventDefault();
    console.log('formType',formType);
    if (formType === 'login') {
      // Handle login
       axios.post("/login",{
          username: loginForm.username,
          password: loginForm.password
       }).then(function (res){
           
       })
      console.log('Login form submitted:', loginForm);
    } else {
      // Handle registration
      if (registerForm.password !== registerForm.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      console.log('Register form submitted:', registerForm);
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal" overlayClassName="overlay">
      <div className="modal-header">
        <h2>{isLogin ? '登录' : '注册'}</h2>
        <button onClick={onClose} className="close-button">×</button>
      </div>
      <div className="modal-body">
        <form onSubmit={(e) => handleSubmit(e, isLogin ? 'login' : 'register')}>
          <input
            type="text"
            name="username"
            value={isLogin ? loginForm.username : registerForm.username}
            onChange={(e) => handleChange(e, isLogin ? 'login' : 'register')}
            placeholder="请输入账号"
            required
          />
          <input
            type="password"
            name="password"
            value={isLogin ? loginForm.password : registerForm.password}
            onChange={(e) => handleChange(e, isLogin ? 'login' : 'register')}
            placeholder="请输入密码"
            required
          />
          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              value={registerForm.confirmPassword}
              onChange={(e) => handleChange(e, 'register')}
              placeholder="请确认密码"
              required
            />
          )}
          <button type="submit" className="submit-button">{isLogin ? '登录' : '注册'}</button>
        </form>
      </div>
      <div className="modal-footer">
        <button onClick={handleSwitchForm} className="switch-button">
          {isLogin ? '没有账号？注册' : '已有账号？登录'}
        </button>
      </div>
    </Modal>
  );
};

export default LoginRegisterModal;
