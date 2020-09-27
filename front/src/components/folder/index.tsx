import React from 'react';
import styled from 'styled-components';

import Create from './create';

const Container = styled.div`
  width: 180px;
  border-right: 1px solid rgb(221, 222, 221);
  padding: 10px 10px 10px 10px;
  background: rgb(245, 246, 245);
`;

const Folder = () => {
  return (
    <Container>
      <Create />
      <div>Note</div>
    </Container>
  );
};

export default Folder;
