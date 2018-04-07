import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #fff;
  z-index: 100;
  font-size: 24px;
  font-weight: bold;
  bottom: ${props => (props.textPosition)}px;
`;

const SheetFooter = ({ companyName, textPosition }) => (
  <Container textPosition={textPosition}>
    {companyName}
  </Container>
);

SheetFooter.propTypes = {
  companyName: PropTypes.string.isRequired,
  textPosition: PropTypes.number.isRequired,
};

export default SheetFooter;
