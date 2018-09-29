import React from 'react';
import styled, { css } from 'styled-components';
import { IconTwitterHoverable, IconLinkedinHoverable } from './UI';

const shareOnTwitter = () => {
  const url = window.location.href;
  const text = 'Replace this with your text';
  window.open(
    'http://twitter.com/share?url=' +
      encodeURIComponent(url) +
      '&text=' +
      encodeURIComponent(text),
    '',
    'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
  );
  window.open(
    `http://twitter.com/share?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(
      text,
      'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
    )}`
  );
};

const shareOnLinkedin = () => {
  const url = window.location.href;
  const title = 'Replace this with a title.';
  const text = 'Replace this with your share copy.';
  window.open(
    'http://www.linkedin.com/shareArticle?mini=true&url=' +
      encodeURIComponent(url),
    '',
    'left=0,top=0,width=650,height=420,personalbar=0,toolbar=0,scrollbars=0,resizable=0'
  );
};

const ShareIcons = props => (
  <ShareIconsContainer {...props}>
    <ShareIcon onClick={shareOnTwitter}>
      <IconTwitterHoverable />
    </ShareIcon>
    <ShareIcon onClick={shareOnLinkedin}>
      <IconLinkedinHoverable />
    </ShareIcon>
  </ShareIconsContainer>
);

const ShareIcon = styled.div`
  height: 20px;
  width: 20px;
  margin: 0 10px;
`;

const ShareIconsContainer = styled.div`
  display: flex;
  align-items: center;
  ${props =>
    props.popup &&
    css`
      svg {
        fill: ${props => props.theme.inverseTextColor};
      }
    `};
`;

export default ShareIcons;
