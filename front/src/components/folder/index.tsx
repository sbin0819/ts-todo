import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  background: yellowgreen;
  width: 180px;
`;

const Folder = () => {
  return (
    <Container>
      <div>폴더</div>
    </Container>
  );
};

export default Folder;
