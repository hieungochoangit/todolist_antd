import React, { useEffect, useState } from 'react';
import { Row, Col, Checkbox, Tag } from 'antd';

function TodoItem({ todo }) {
  const [color, setColor] = useState('');

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

  return (
    // eslint-disable-next-line no-sequences
    <Row style={{ marginTop: 20 }}>
      <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }} className={(todo.isCompleted) ? 'completed' : ''}>
        <Checkbox defaultChecked={todo.isCompleted}>
          {todo.name}
        </Checkbox>
        <Tag color={color}>
          {todo.level}
        </Tag>
      </Col>
    </Row>
  );
}

export default TodoItem;