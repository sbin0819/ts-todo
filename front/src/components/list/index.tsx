import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  border-right: 1px solid rgb(221, 222, 221);
  .active {
    background: rgb(224, 225, 222);
  }
  .list {
    padding: 5px 15px;
    cursor: pointer;
    :hover {
      background: rgb(252, 226, 142);
    }
    .content {
      height: 60px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .title {
        font-weight: bold;
      }
    }
  }
`;

const List = () => {
  return (
    <Container>
      <div className='list active'>
        <div className='content'>
          <div className='title'>투두리스트 만들기</div>
          <div className='date'>Today</div>
        </div>
      </div>
      <div className='list'>
        <div className='content'>
          <div className='title'>와이어 프레임</div>
          <div className='date'>Yesterday</div>
        </div>
      </div>
    </Container>
  );
};

export default List;
