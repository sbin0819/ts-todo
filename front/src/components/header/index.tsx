import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: auto auto;
  height: 40px;
  align-items: center;
  justify-content: space-around;
  padding-left: 20px;
  border-bottom: 1px solid rgb(221, 222, 221);
  /* div {
    flex: 1 1 30%;
  } */
`;

const Header = () => {
  return (
    <Container>
      <div>종료</div>
      <div>글쓰기</div>
      <div>삭제</div>
      <div>서치바</div>
    </Container>
  );
};

export default Header;
