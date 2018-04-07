import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const CompanyArea = ({ companyName, inputCompanyName }) => (
  <Container>
    <span>会社名：</span>
    <input
      type="text"
      value={companyName}
      onChange={e => inputCompanyName(e.target.value)}
    />
  </Container>
);

CompanyArea.propTypes = {
  companyName: PropTypes.string.isRequired,
  inputCompanyName: PropTypes.func.isRequired,
};

export default CompanyArea;
