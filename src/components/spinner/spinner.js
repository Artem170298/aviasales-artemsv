/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';
import './spinner.css';

const Spinner = () => (
  <div className="spinner">
    <Flex align="center" gap="middle">
      <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
    </Flex>
  </div>
);
export default Spinner;
