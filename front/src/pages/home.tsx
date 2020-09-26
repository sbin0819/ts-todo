import React from 'react';
import styled from 'styled-components';

import Header from '../components/header';
import Folder from '../components/folder';
import List from '../components/list';
import Todo from '../components/todo';

const Outer = styled.div`
  width: 80vw;
  margin: auto auto;
`;

const Body = styled.div`
  background: rgb(224, 223, 224);
  height: 80vh;
  display: flex;
`;

const Home = () => {
  return (
    <Outer>
      <Header />
      <Body>
        <Folder />
        <List />
        <Todo />
      </Body>
    </Outer>
  );
};

export default Home;
