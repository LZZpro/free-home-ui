import React from 'react';
import { Upload } from '@douyinfe/semi-ui';
import '../css/UploadPage.css';
import { IconBolt } from '@douyinfe/semi-icons';
import imgURL from '../assets/dowload.jpg'

const UploadPage = () => {
  return (
    <div className="upload-page">
      <aside className="sidebar">
        <ul className="sidebar-menu">
          <li>首页</li>
          <li>内容管理</li>
          <li>数据中心</li>
          <li>粉丝管理</li>
          <li>互动管理</li>
          <li>创作成长</li>
          <li>创作权益</li>
          <li>创作设置</li>
          <img src='../assets/dowload.jpg' />
        </ul>
      </aside>
      <section className="upload-section">
        <div className="upload-header">
          <h2>视频投稿</h2>
          <Upload
            action="https://api.semi.design/upload"
            dragIcon={<IconBolt />}
            draggable={true}
            accept="application/pdf,.jpeg"
            style={{ marginTop: 10 }}
          >
            <div className="components-upload-demo-drag-area">
              <img
                src={imgURL}
                height="96"
                alt="demo img"
                style={{ borderRadius: 4 }}
              />
              <div
                style={{
                  fontSize: 14,
                  marginTop: 8,
                  flexBasis: '100%',
                  textAlign: 'center',
                  color: 'var(--semi-color-tertiary)',
                }}
              >
                点击上传文件或拖拽文件到这里
              </div>
            </div>
          </Upload>
          <div className="upload-info">
            <p>当前审核队列：快速</p>
            <p>禁止上传的违规内容</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UploadPage;
