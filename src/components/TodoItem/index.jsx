import React, { useEffect, useState } from 'react';
import { Row, Col, Checkbox, Tag } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import { removeTodo, checkedTodo } from '../../store/action';
import { useDispatch } from 'react-redux'; 

function TodoItem({ todo, index }) {
  const [color, setColor] = useState('');
  const [checked, setChecked] = useState(todo.isCompleted);

  const dispatch = useDispatch();

  useEffect(() => {
    switch(todo.level) {
      case 'prioritize':
        setColor('red');
        break;
      case 'medium':
        setColor('blue');
        break;
      default:
        setColor('gray');
        break;
    }
  }, [todo.level])

  const handleClickCompleted = (checkedStatus, index) => {
    setChecked(!checked);
    dispatch(checkedTodo(checkedStatus, index));
  }

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  }

  return (
    // eslint-disable-next-line no-sequences
    <Row style={{ marginTop: 10 }}>
      <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }} className={checked ? 'completed' : ''}>
        <Checkbox defaultChecked={checked} onClick={() => handleClickCompleted(checked, index)}>
          {todo.name}
        </Checkbox>
        <div>
          <Tag color={color}>
            {todo.level}
          </Tag>
          <CloseOutlined style={{ cursor: 'pointer' }} onClick={() => handleRemoveTodo(todo.id)} />
        </div>
      </Col>
    </Row>
  );
}

export default TodoItem;