import React from 'react';
import styled from 'styled-components';

import Create from './create';

const Container = styled.div`
  width: 180px;
  border-right: 1px solid rgb(221, 222, 221);
  background: rgb(245, 246, 245);
  .folder {
    cursor: pointer;
    padding: 5px;
    :hover {
      background: silver;
    }
  }
`;

const Folder = () => {
  return (
    <Container>
      <Create />
      <div className='folder'>
        <div className='title'>Note</div>
      </div>
    </Container>
  );
};

export default Folder;
