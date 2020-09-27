import React from 'react';

import styled from 'styled-components';

const StyledButton = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
  :hover {
    background: pink;
  }
`;

const Create = () => {
  return (
    <StyledButton>
      <span>+</span>
      <span>New Folder</span>
    </StyledButton>
  );
};

export default Create;
