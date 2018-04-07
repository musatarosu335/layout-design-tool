import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid #B8B8B8;
  border-radius: 50%;
  margin-top: 30px;
  background-size: contain;
  cursor: pointer;
`;

const ImageButton = ({ url, selectImage }) => (
  <Button
    style={{ backgroundImage: `url(${url})` }}
    onClick={() => selectImage(url)}
  />
);

ImageButton.propTypes = {
  url: PropTypes.string.isRequired,
  selectImage: PropTypes.func.isRequired,
};

export default ImageButton;
