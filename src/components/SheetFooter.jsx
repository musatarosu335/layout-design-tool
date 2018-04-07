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
  bottom: 20px;
  background-color: #fff;
  z-index: 100;
  border: 1px solid #B8B8B8;
  font-size: 24px;
  font-weight: bold;
`;

const SheetFooter = ({ companyName }) => (
  <Container>
    {companyName}
  </Container>
);

SheetFooter.propTypes = {
  companyName: PropTypes.string.isRequired,
};

export default SheetFooter;
