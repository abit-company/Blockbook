import React from 'react';
import styled from 'styled-components';

const ImageWrapper = props => (
  <ImgContainer>
    <ImgWrapper {...props}>
      {props.children}
      <Label>{props.label}</Label>
    </ImgWrapper>
  </ImgContainer>
);

const Label = styled.div`
  font-size: 0.9rem;
  text-align: center;
  padding: 3px 10px;
  color: ${props => props.theme.alwaysDark};
  border-top: 1px solid ${props => props.theme.alwaysDark};
  margin-top: 10px;
`;
const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 2px;
  margin: 15px 0;
  padding: 15px;
  width: 500px;
  img {
    max-width: 100%;
    height: auto;
  }
  @media only screen and (max-width: ${props => props.theme.breakMobile}) {
    max-width: ${props => (props.inList ? '290px' : '400px')};
  }
  justify-content: center;
  /* align-items: center; */
`;

export default ImageWrapper;
