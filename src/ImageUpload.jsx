import React from 'react';
import { Upload, message } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'imgStore';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/masterchef/image/upload';

function uploadToCloud({ file, onSuccess }) {
  request.post(CLOUDINARY_UPLOAD_URL)
    .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    .field('file', file)
    .end((error, response) => {
      // console.log(response);
      onSuccess(response);
    })
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

export default class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(info) {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // console.log(info.file.response.body)
      const { url } = info.file.response.body;
      // console.log(url);
      this.props.getURL(url);
      this.setState({
        imageUrl: url,
        loading: false,
      });
    }
    // if (info.file.status === 'error') {
    //   console.log('Error encountered when uploading img:', info);
    // }
  };

  render() {
    const uploadButton = (
      <div>
        {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    const { imageUrl } = this.state;
    return (
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        customRequest={uploadToCloud}
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="cover" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
    );
  }
}