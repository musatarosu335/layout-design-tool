import React from 'react';
import styled from 'styled-components';
import Sidebar from '../containers/Sidebar';
import Custom from './Custom';

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: #eee;
`;

const App = () => (
  <Container>
    <Sidebar />
    <Custom />
  </Container>
);

export default App;
