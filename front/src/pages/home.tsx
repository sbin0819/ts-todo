import React from 'react';
import styled from 'styled-components';

import Header from '../components/header';
import Body from '../components/body';

const Outer = styled.div`
  width: 80vw;
  margin: 30px auto;
  border: 1px solid rgb(221, 222, 221);
`;

const BodyWrapper = styled.div`
  height: 80vh;
  display: flex;
`;

const Home = () => {
  return (
    <Outer>
      <Header />
      <BodyWrapper>
        <Body />
      </BodyWrapper>
    </Outer>
  );
};

export default Home;
