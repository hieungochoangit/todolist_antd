import React, { useState } from 'react';
import { Row, Col, Input, Radio, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { searchValueAction, statusValueAction, levelValueAction } from '../../store/action';

function Filters(props) {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState('');
  const [status, setStatus] = useState('all');

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
    dispatch(searchValueAction(searchValue));
  }

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
    dispatch(statusValueAction(e.target.value));
  }

  const handleChangeLevel = (e) => {
    dispatch(levelValueAction(e));
  }

  return (
    <Row style={{ marginTop: 20 }}>
      <Col span={24}>
        <Input placeholder='Search here...' value={searchValue} onChange={handleSearchValue} />
      </Col>
      <Col span={24}>
        <Radio.Group style={{ marginTop: 20 }} defaultValue={status} onChange={handleChangeStatus}>
          <Radio value='all'>All</Radio>
          <Radio value='completed'>Completed</Radio>
          <Radio value='pending'>Pending</Radio>
        </Radio.Group>
      </Col>
      <Col span={24}>
        <Select mode='multiple' placeholder='Select value...' style={{ width: '100%', marginTop: 20 }} onChange={handleChangeLevel}>
          <Select.Option value='prioritize' style={{ color: 'red' }}>Prioritize</Select.Option>
          <Select.Option value='medium' style={{ color: 'blue' }}>Medium</Select.Option>
          <Select.Option value='low' style={{ color: 'gray' }}>Low</Select.Option>
        </Select>
      </Col>
    </Row>
  );
}

export default Filters;