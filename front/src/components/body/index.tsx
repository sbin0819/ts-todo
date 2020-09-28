import React from 'react';

import Folder from '../folder';
import List from '../list';
import Todo from '../todo';

import { folder } from '../dummy';

const Body = () => {
  return (
    <>
      <Folder />
      <List />
      <Todo />
    </>
  );
};

export default Body;
