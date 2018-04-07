import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const CompanyArea = ({
  companyName,
  textPosition,
  inputCompanyName,
  inputTextPosition,
}) => (
  <Container>
    <span>会社名：</span>
    <input
      type="text"
      value={companyName}
      onChange={e => inputCompanyName(e.target.value)}
    />
    <input
      type="number"
      value={textPosition}
      onChange={e => inputTextPosition(e.target.value)}
    />
  </Container>
);

CompanyArea.propTypes = {
  companyName: PropTypes.string.isRequired,
  textPosition: PropTypes.number.isRequired,
  inputCompanyName: PropTypes.func.isRequired,
  inputTextPosition: PropTypes.func.isRequired,
};

export default CompanyArea;
