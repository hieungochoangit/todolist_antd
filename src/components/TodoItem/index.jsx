import React, { useEffect, useState } from 'react';
import { Row, Col, Checkbox, Tag } from 'antd';

function TodoItem({ todo }) {
  const [color, setColor] = useState('');
  const [checked, setChecked] = useState(todo.isCompleted);

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

  const handleClickCompleted = () => {
    setChecked(!checked);
  }

  return (
    // eslint-disable-next-line no-sequences
    <Row style={{ marginTop: 10 }}>
      <Col span={24} style={{ display: 'flex', justifyContent: 'space-between' }} className={checked ? 'completed' : ''}>
        <Checkbox defaultChecked={checked} onClick={handleClickCompleted}>
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