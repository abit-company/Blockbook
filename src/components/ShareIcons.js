import React from 'react';
import styled from 'styled-components';
import { IconTwitter, IconLinkedin } from './UI';

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

const ShareIcons = () => (
  <ShareIconsContainer>
    <ShareIcon onClick={shareOnTwitter}>
      <IconTwitter />
    </ShareIcon>
    <ShareIcon onClick={shareOnLinkedin}>
      <IconLinkedin />
    </ShareIcon>
  </ShareIconsContainer>
);

const ShareIcon = styled.div`
  height: 50px;
  width: 50px;
  &:hover {
    cursor: pointer;
  }
`;

const ShareIconsContainer = styled.div`
  display: flex;
`;

export default ShareIcons;
