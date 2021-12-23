import React from 'react';
import { Row, Col, Input, Select, Button } from 'antd';
import TodoItem from '../TodoItem';

const todoItem = [
  {
    id: 1,
    name: 'Đi mát xa',
    isCompleted: false,
    level: 'prioritize',
  },
  {
    id: 2,
    name: 'Học tư thế cổ truyền',
    isCompleted: true,
    level: 'medium',
  },
  {
    id: 3,
    name: 'Kỹ năng thượng thừa môn vác cày qua núi',
    isCompleted: true,
    level: 'low',
  }
]

function TodoList() {
  return (
    <div className='todolist' style={{ height: '100%' }}>
      <Row>
        <Col span={14}>
          <Input placeholder='Add new todo...' />
        </Col>
        <Col span={6}>
          <Select defaultValue='medium' style={{ width: '100%' }}>
            <Select.Option value='prioritize'>Prioritize</Select.Option>
            <Select.Option value='medium'>Medium</Select.Option>
            <Select.Option value='low'>Low</Select.Option>
          </Select>
        </Col>
        <Col span={4}>
          <Button type='primary' style={{ width: '100%' }}>ADD</Button>
        </Col>
      </Row>
      
      {todoItem.map(todo => <TodoItem todo={todo} key={todo.id} />)}
    </div>
  );
}

export default TodoList;