import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1 1 auto;
  height: 100%;
  .todo {
    height: 100%;
    padding: 5px 15px;
    .header {
      color: rgb(155, 155, 154);
      font-size: 11px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .content {
      align-self: stretch;
      padding-top: 15px;
      font-size: 14px;
    }
  }
`;

const Todo = () => {
  return (
    <Container>
      <div className='todo'>
        <div className='header'>September 25, 2020, 11:59 AM</div>
        <div className='content'>#1 todolist 만들기</div>
      </div>
    </Container>
  );
};

export default Todo;
