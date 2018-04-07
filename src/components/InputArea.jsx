import React from 'react';
import styled from 'styled-components';
import CompanyArea from '../containers/CompanyArea';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  height: 100px;
  margin-bottom: 40px;
  border: 1px solid #B8B8B8;
  border-radius: 10px;
`;

const InputArea = () => (
  <Container>
    <CompanyArea />
  </Container>
);

export default InputArea;
