import React from 'react';
import styled from 'styled-components';
import ImageArea from '../containers/ImageArea';
import SheetFooter from '../containers/SheetFooter';

const Container = styled.div`
  width: 300px;
  height: 600px;
  margin-top: 40px;
  margin-bottom: 40px;
  box-shadow: 0px 20px 40px rgba(0,0,0,0.4);
  position: relative;
`;

const SheetArea = () => (
  <Container>
    <ImageArea />
    <SheetFooter />
  </Container>
);

export default SheetArea;
