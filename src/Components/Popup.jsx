import React from 'react';
import { Button, Popover, Space } from 'antd';
import '../css/popup.css'
const content = (
  <div style={{width:'200px'}}>
    <p>Unleash the Power of Your Social Media: Our platform helps you track, analyze, and optimize your social media performance across all major platforms. With real-time insights, audience analytics, and AI-driven recommendations.</p>
  </div>
);
const Popup = () => (
  <Space wrap>
    <Popover content={content} title="System" trigger="click">
      <Button>Get to know us ?</Button>
    </Popover>
  </Space>
);
export default Popup;