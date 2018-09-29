import React from 'react';
import styled from 'styled-components';

const IconBase = styled.svg`
  fill: ${props => props.theme.baseTextColor};
  transition: fill 0.2s ease;
  &:hover {
    cursor: pointer;
    transition: fill 0.2s ease;
    fill: ${props => props.theme.mainColor};
  }
`;

const HighlighIcon = styled(IconBase)`
  width: 30px;
  height: 30px;
  fill: ${props => props.theme.popUpIconColor};
`;

const IconSideBar = () => (
  <IconBase aria-hidden="true" viewBox="0 0 448 512">
    <path d="M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z" />
  </IconBase>
);

const IconNight = ({ click }) => (
  <IconBase
    viewBox="0 0 24 24"
    style={{ transform: 'rotate(180deg)' }}
    onClick={click}
  >
    <path d="M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </IconBase>
);

const IconDay = ({ click }) => (
  <IconBase viewBox="0 0 24 24" onClick={click}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 15.31L23.31 12 20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" />
  </IconBase>
);

const IconGithub = () => (
  <IconBase viewBox="0 0 32.58 31.77">
    <path d="M16.29,0a16.29,16.29,0,0,0-5.15,31.75c.81.15,1.11-.35,1.11-.79s0-1.41,0-2.77C7.7,29.18,6.74,26,6.74,26a4.31,4.31,0,0,0-1.81-2.38c-1.48-1,.11-1,.11-1a3.42,3.42,0,0,1,2.5,1.68,3.47,3.47,0,0,0,4.74,1.35,3.48,3.48,0,0,1,1-2.18C9.7,23.08,5.9,21.68,5.9,15.44a6.3,6.3,0,0,1,1.68-4.37,5.86,5.86,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.44,15.44,0,0,1,8.16,0c3.11-2.11,4.48-1.67,4.48-1.67A5.85,5.85,0,0,1,25,11.07a6.29,6.29,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.89,3.89,0,0,1,1.11,3c0,2.18,0,3.93,0,4.47s.29.94,1.12.78A16.29,16.29,0,0,0,16.29,0Z" />
  </IconBase>
);

const IconHeart = () => (
  <HighlighIcon viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </HighlighIcon>
);

const IconThumbUp = () => (
  <HighlighIcon viewBox="0 0 24 24">
    <path fill="none" d="M0,0h24v24H0V0z" />
    <path
      d="M1,21h4V9H1V21z M23,10c0-1.1-0.9-2-2-2h-6.31l0.95-4.57l0.03-0.32c0-0.41-0.17-0.79-0.44-1.06L14.17,1L7.59,7.59
      C7.22,7.95,7,8.45,7,9v10c0,1.1,0.9,2,2,2h9c0.83,0,1.54-0.5,1.84-1.22l3.02-7.05C22.95,12.5,23,12.26,23,12V10z"
    />
  </HighlighIcon>
);

const IconEdit = () => (
  <HighlighIcon viewBox="0 0 24 24">
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </HighlighIcon>
);

const IconFacebook = () => (
  <svg viewBox="0 0 50 50">
    <path
      d="M29.1,21.9h-2.8V20c0-0.7,0.5-0.9,0.8-0.9s2,0,2,0V16h-2.7c-3,0-3.7,2.3-3.7,3.7v2h-1.8V25h1.8
      c0,4,0,8.9,0,8.9h3.7c0,0,0-4.9,0-8.9h2.5L29.1,21.9z"
    />
  </svg>
);

const IconTwitter = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 250 203.14"
    className={className}
  >
    <g>
      <path d="M78.62,203.14C173,203.14,224.56,125,224.56,57.2c0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,250,24a102.38,102.38,0,0,1-29.46,8.07A51.47,51.47,0,0,0,243.09,3.72a102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,17.4,9.36,51.33,51.33,0,0,0,33.28,77.83,50.91,50.91,0,0,1,10,71.41v.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,0,180.1a145.21,145.21,0,0,0,78.62,23" />
    </g>
  </svg>
);

const IconTwitterHoverable = styled(IconTwitter)`
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    cursor: pointer;
    fill: #1da1f2;
  }
`;

const IconLinkedin = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 382 382"
    className={className}
  >
    <g>
      <path d="M347.45,0H34.56A34.56,34.56,0,0,0,0,34.56V347.44A34.56,34.56,0,0,0,34.56,382H347.44A34.56,34.56,0,0,0,382,347.44V34.56A34.56,34.56,0,0,0,347.45,0ZM118.21,329.84a10.06,10.06,0,0,1-10.06,10.06H65.35a10.06,10.06,0,0,1-10.06-10.06V150.4a10.06,10.06,0,0,1,10.06-10.06h42.81a10.06,10.06,0,0,1,10.06,10.06ZM86.75,123.43a40.67,40.67,0,1,1,40.67-40.67A40.67,40.67,0,0,1,86.75,123.43ZM341.91,330.65a9.25,9.25,0,0,1-9.25,9.25H286.73a9.25,9.25,0,0,1-9.25-9.25V246.49c0-12.56,3.68-55-32.81-55-28.31,0-34.05,29.07-35.2,42.11v97.08a9.25,9.25,0,0,1-9.25,9.25H155.8a9.25,9.25,0,0,1-9.25-9.25V149.59a9.25,9.25,0,0,1,9.25-9.25h44.43a9.25,9.25,0,0,1,9.25,9.25v15.65c10.5-15.75,26.1-27.91,59.31-27.91,73.55,0,73.13,68.72,73.13,106.47v86.85Z" />
    </g>
  </svg>
);
const IconLinkedinHoverable = styled(IconLinkedin)`
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    cursor: pointer;
    fill: #0077b7;
  }
`;

const IconMedium = ({ className }) => (
  <svg viewBox="0 0 50 50" className={className}>
    <path
      d="M16.9,20c0-0.3-0.1-0.5-0.3-0.7l-2-2.4v-0.4h6.2L25.6,27l4.2-10.5h5.9v0.4L34,18.5c-0.1,0.1-0.2,0.3-0.2,0.5v12
        c0,0.2,0,0.4,0.2,0.5l1.7,1.6v0.4h-8.4v-0.4l1.7-1.7c0.2-0.2,0.2-0.2,0.2-0.5v-9.7l-4.8,12.2h-0.6l-5.6-12.2v8.2
        c0,0.3,0.1,0.7,0.3,0.9l2.2,2.7v0.4h-6.4v-0.4l2.2-2.7c0.2-0.2,0.3-0.6,0.3-0.9V20z"
    />
  </svg>
);

export {
  IconEdit,
  IconThumbUp,
  IconHeart,
  IconGithub,
  IconDay,
  IconNight,
  IconSideBar,
  IconFacebook,
  IconTwitter,
  IconLinkedin,
  IconMedium,
  IconTwitterHoverable,
  IconLinkedinHoverable,
};
