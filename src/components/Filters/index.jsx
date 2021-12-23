import React from 'react';
import { Row, Col, Input, Radio, Select } from 'antd';

function Filters(props) {
  return (
    <Row style={{ marginTop: 20 }}>
      <Col span={24}>
        <Input placeholder='Search here...' />
      </Col>
      <Col span={24}>
        <Radio.Group style={{ marginTop: 20 }}>
          <Radio value='all'>All</Radio>
          <Radio value='completed'>Completed</Radio>
          <Radio value='pending'>Pending</Radio>
        </Radio.Group>
      </Col>
      <Col span={24}>
        <Select mode='multiple' placeholder='Select value...' style={{ width: '100%', marginTop: 20 }}>
          <Select.Option value='prioritize' style={{ color: 'red' }}>Prioritize</Select.Option>
          <Select.Option value='medium' style={{ color: 'blue' }}>Medium</Select.Option>
          <Select.Option value='low' style={{ color: 'gray' }}>Low</Select.Option>
        </Select>
      </Col>
    </Row>
  );
}

export default Filters;