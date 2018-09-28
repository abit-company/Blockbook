import styled, { css } from 'styled-components';
import React from 'react';
// import Highlightable from './Highlightable';

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

const HighlightableParagraph = styled.p`
  padding-bottom: 0.4rem;
  margin: 0;
`;

const Paragraph = styled.p`
  padding-bottom: 0.4rem;
  margin: 0;
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
  Address,
  HighlightableParagraph,
};
