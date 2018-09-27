import React from 'react';
import styled from 'styled-components';
import { flattenToc } from '../tableOfContents';
import Link from './Link';
import UIContext from './UiContext';

const prevLink = currentPath => {
  const index = flattenToc.map(e => e.url).indexOf(currentPath);
  if (index) {
    const prev = flattenToc[index - 1];
    if (prev) {
      return (
        <Link style={{ float: 'left' }} to={prev.url}>
          <Arrow>&larr;</Arrow> <ChapterName>{prev.title}</ChapterName>
        </Link>
      );
    }
  }
  return null;
};

const nextLink = currentPath => {
  const index = flattenToc.map(e => e.url).indexOf(currentPath);
  if (index < flattenToc.length) {
    const next = flattenToc[index + 1];
    if (next) {
      return (
        <Link style={{ float: 'right' }} to={next.url}>
          <ChapterName>{next.title}</ChapterName> <Arrow>&rarr;</Arrow>
        </Link>
      );
    }
  }
  return null;
};
export default () => (
  <UIContext.Consumer>
    {({ currentPath }) => (
      <NavFooter>
        {prevLink(currentPath)}
        {nextLink(currentPath)}
      </NavFooter>
    )}
  </UIContext.Consumer>
);

const ChapterName = styled.span`
  @media only screen and (max-width: ${props => props.theme.breakSideBar}) {
    display: none;
  }
`;
const Arrow = styled.span`
  @media only screen and (max-width: ${props => props.theme.breakSideBar}) {
    font-size: 2rem;
  }
`;

const NavFooter = styled.div`
  border-top: 1px solid ${props => props.theme.grey};
  padding: 1rem 0;
`;
