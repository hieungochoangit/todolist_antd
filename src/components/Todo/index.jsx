import React from 'react';
import { Card, Typography, Divider } from 'antd';
import Filters from '../Filters';
import TodoList from '../TodoList';

function Todo() {
  return (
    <Card className='todo' style={{ width: 500, height: 600, backgroundColor: 'white' }}>
      <Typography.Title>TodoList - Redux - Antd Design</Typography.Title>
      <Divider style={{ backgroundColor: 'black', height: 1 }} />

      <Filters />
      <Divider style={{ backgroundColor: 'black', height: 1 }} />

      <TodoList />
    </Card>
  );
}

export default Todo;