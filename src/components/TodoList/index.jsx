import React, { useState } from 'react';
import { Row, Col, Input, Select, Button } from 'antd';
import TodoItem from '../TodoItem';
import { v4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../store/action';

function TodoList() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [level, setLevel] = useState('medium');

  const todos = useSelector((state => state.todo));

  const handleChangeInput = (e) => {
    setName(e.target.value);
  }

  const handleChangeLevel = (e) => {
    setLevel(e);
  }

  const handleAddTodo = () => {
    dispatch(addTodo({
      id: v4(),
      name: name,
      isCompleted: false,
      level: level,
    }));
    setName('');
    setLevel('medium');
  }

  return (
    <div className='todolist' style={{ height: '100%' }}>
      <Row>
        <Col span={14}>
          <Input placeholder='Add new todo...' value={name} onChange={handleChangeInput} />
        </Col>
        <Col span={6}>
          <Select defaultValue={level} style={{ width: '100%' }} onChange={handleChangeLevel}>
            <Select.Option value='prioritize'>Prioritize</Select.Option>
            <Select.Option value='medium'>Medium</Select.Option>
            <Select.Option value='low'>Low</Select.Option>
          </Select>
        </Col>
        <Col span={4}>
          <Button onClick={handleAddTodo} type='primary' style={{ width: '100%' }}>ADD</Button>
        </Col>
      </Row>
      
      {todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
    </div>
  );
}

export default TodoList;