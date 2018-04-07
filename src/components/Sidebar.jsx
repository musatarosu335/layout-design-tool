import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageButton from './ImageButton';

const Container = styled.div`
  width: 20%;
  background-color: #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
`;

const Title = styled.div`
  margin-top: 40px;
  font-size: 16px;
  font-weight: bold;
`;

const Sidebar = ({ images, selectImage }) => (
  <Container>
    <Title>シート一覧</Title>
    {images.map(image => (
      <ImageButton
        key={image}
        url={image}
        selectImage={selectImage}
      />
    ))}
  </Container>
);

Sidebar.propTypes = {
  images: PropTypes.array.isRequired,
  selectImage: PropTypes.func.isRequired,
};

export default Sidebar;
