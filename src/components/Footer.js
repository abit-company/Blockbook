import React from 'react';
import styled, { css } from 'styled-components';
import {
  Link,
  IconFacebook,
  IconTwitter,
  IconLinkedin,
  IconMedium,
} from './UI';

import logo from './abit-logo.png';

const SocialIcon = ({ social }) => {
  const selectSocial = () => {
    switch (social) {
      case 'facebook':
        return (
          <Link to="https://www.facebook.com/abitcompany/">
            <SocialIconWrapper facebook>
              <IconFacebook />
            </SocialIconWrapper>
          </Link>
        );
      case 'twitter':
        return (
          <Link to="https://www.twitter.com/abitcompany/">
            <SocialIconWrapper twitter>
              <IconTwitter />
            </SocialIconWrapper>
          </Link>
        );
      case 'linkedin':
        return (
          <Link to="https://www.linkedin.com/company/abitcompany/">
            <SocialIconWrapper linkedin>
              <IconLinkedin />
            </SocialIconWrapper>
          </Link>
        );
      case 'medium':
        return (
          <Link to="https://medium.com/abitcompany">
            <SocialIconWrapper medium>
              <IconMedium />
            </SocialIconWrapper>
          </Link>
        );
      default:
        return <div />;
    }
  };
  return <div>{selectSocial()}</div>;
};

export default () => (
  <Footer id="footer">
    <LinksContainer>
      <SocialIcon social="facebook" />
      <SocialIcon social="twitter" />
      <SocialIcon social="linkedin" />
      <SocialIcon social="medium" />
    </LinksContainer>
    <MadeBy>
      Made with&nbsp;<span>❤</span>by&nbsp;
      <Link to="https://abit.company">
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          abitcompany
          <img
            src={logo}
            alt="abitcompany-logo"
            style={{ height: '20px', width: '20px', marginLeft: '10px' }}
          />
        </div>
      </Link>
    </MadeBy>
    <CreativeCommons
      rel="license noopener noreferrer"
      href="https://creativecommons.org/licenses/by-nc/4.0"
      target="_blank"
    >
      <img
        alt="Creative Commons License"
        src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png"
      />
    </CreativeCommons>
  </Footer>
);

const CreativeCommons = styled.a`
  margin: 15px;
`;
const SocialIconWrapper = styled.div`
  height: 40px;
  width: 40px;
  transform: rotate(45deg);
  ${props =>
    props.facebook &&
    css`
      background-color: #3b5998;
    `};
  ${props =>
    props.twitter &&
    css`
      background-color: #1da1f2;
    `};
  ${props =>
    props.linkedin &&
    css`
      background-color: #0077b5;
    `};
  ${props =>
    props.medium &&
    css`
      background-color: #000;
    `};
  border-radius: 6px;
  transition: all 1s;
  margin: 0 15px;
  position: relative;
  svg {
    transition: all 1s;
    transform: rotate(-45deg);
    fill: white;
  }
  &:hover {
    transform: rotate(360deg);
    svg {
      transform: rotate(-360deg);
    }
  }
`;
const Footer = styled.footer`
  letter-spacing: 1.5px;
  height: ${props => props.theme.footerHeight};
  background-color: ${props => props.theme.backgroundColor};
  border-top: 1px solid ${props => props.theme.lineColor};
  z-index: 100;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 10px;
`;

const MadeBy = styled.div`
  white-space: pre-line;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;
