import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageContainer = styled.img`
  width: 100%;
  height: 100%;
`;

const ImageArea = ({ selectedImage }) => (
  <ImageContainer src={selectedImage} />
);

ImageArea.propTypes = {
  selectedImage: PropTypes.string.isRequired,
};

export default ImageArea;
