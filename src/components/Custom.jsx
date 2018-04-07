import React from 'react';
import styled from 'styled-components';
import SheetArea from './SheetArea';
import InputArea from './InputArea';

const Container = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Custom = () => (
  <Container>
    <SheetArea />
    <InputArea />
  </Container>
);

export default Custom;
