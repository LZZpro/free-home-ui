import React from 'react';
import { Upload, Button } from '@douyinfe/semi-ui';
import '../css/UploadPage.css';
import { IconUpload,IconBolt } from '@douyinfe/semi-icons';
import imgURL from '../assets/dowload.jpg'

const UploadPage = () => {
  let action = 'http://localhost:8886/home/uploadVideo';
  // let imageOnly = 'image/*';
  let videoOnly = 'video/*';


  // 自定义上传函数
  const customRequest = ({ file, onProgress, onSuccess, onError }) => {
    // 创建 FormData 对象
    const formData = new FormData();
    formData.append('video', file); // 将文件追加到 FormData 中

    // 发送 POST 请求，上传文件
    const xhr = new XMLHttpRequest();
    xhr.open('POST', action, true);

    // 监听上传进度
    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percent = Math.round((event.loaded / event.total) * 100);
        onProgress({ percent });
      }
    };

    // 上传成功
    xhr.onload = () => {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError(new Error('Upload failed'));
      }
    };

    // 上传失败
    xhr.onerror = () => {
      onError(new Error('Upload failed'));
    };

    // 发送请求
    xhr.send(formData);
  };

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
           <Upload action={action} 
            accept={videoOnly}
            customRequest={customRequest} // 使用自定义上传函数 
            style={{ marginTop: 10 }}
            dragIcon={<IconBolt />}
            draggable={true}
            showUploadList={false} // 是否显示上传列表
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
                <span>点击上传文件或拖拽文件到这里</span>
                <Button icon={<IconUpload />} theme="light">
                    上传视频
                </Button>
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
