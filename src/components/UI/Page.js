import styled, { css } from 'styled-components';
import React from 'react';

const ChapterTitle = ({ children }) => (
  <H2
    onClick={() => {
      window.location.hash = '';
    }}
  >
    {children}
  </H2>
);

const SubChapterTitle = ({ children }) => (
  <H3
    id={children.split(' ').join('-')}
    onClick={() => {
      const text = children.split(' ').join('-');
      window.location.hash = text;
    }}
  >
    {children}
  </H3>
);

const baseTitle = css`
  display: inline-block;
  &:hover {
    cursor: pointer;
    &::after {
      content: ' #';
    }
  }
`;

const H2 = styled.h2`
  font-size: 1.7rem;
  ${baseTitle};
`;

const H3 = styled.h3`
  font-size: 1.2rem;
  ${baseTitle};
`;

const Page = styled.div`
  min-height: 70vh;
  padding-bottom: 20px;
  line-height: 1.7;
`;

const Paragraph = styled.p`
  padding-bottom: 0.4rem;
  margin: 0;
`;

const ImageWrapper = props => (
  <ImgContainer>
    <ImgWrapper {...props}>
      <Img alt={props.label} src={props.children} />
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
  max-width: ${props => (props.inList ? '500px' : '500px')};
  @media only screen and (max-width: ${props => props.theme.breakMobile}) {
    max-width: ${props => (props.inList ? '290px' : '400px')};
  }
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
`;

const Italic = styled.span`
  font-style: italic;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Address = styled.span`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  @media only screen and (max-width: ${props => props.theme.breakMobile}) {
    font-size: 0.7rem;
    letter-spacing: 0;
    max-width: 280px;
  }
`;

export {
  ChapterTitle,
  SubChapterTitle,
  Italic,
  Bold,
  Paragraph,
  Page,
  ImageWrapper,
  Address,
};
