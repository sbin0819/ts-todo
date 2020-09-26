import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: auto auto;
  height: 40px;
  align-items: center;
  padding-left: 20px;
  background: #999;
  div {
    flex: 1 1 30%;
  }
`;

const Header = () => {
  return (
    <Container>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </Container>
  );
};

export default Header;
