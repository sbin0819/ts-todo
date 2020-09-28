import React from 'react';

import styled from 'styled-components';

const StyledButton = styled.div`
  cursor: pointer;
  :hover {
    background: pink;
  }
  margin: 5px;
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
