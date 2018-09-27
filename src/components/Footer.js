import React from 'react';
import styled, { css } from 'styled-components';
import { IconFacebook, IconTwitter, IconLinkedin, IconMedium } from './UI';
import Link from './Link';
import logo from '../images/abitcompany-logo.png';

const addresses = [
  {
    coin: 'btc',
    coinName: 'Bitcoin',
    address: '16tN9LvFUMQduaMs3MsB1GLLw6LS1QnFGa',
  },
  {
    coin: 'eth',
    coinName: 'Ethereum',
    address: '0x32ddbd25ef7cb83a856794e7c16c175888859991',
  },
  {
    coin: 'ltc',
    coinName: 'Litecoin',
    address: 'LWBZPAQmJW5HDFXMXKSFHRmmszk9sjZdDm',
  },
];
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

const Footer = () => (
  <FooterContainer id="footer">
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
    <Donations>
      <span>If you want to support this book feel free to donate</span>
      <DonationAddressesContainer>
        {addresses.map(address => (
          <DonationAddress key={address.coin}>
            <img
              src={`https://abitcompany-cdn.sirv.com/crypto_images/${
                address.coin
              }.png`}
              width="18"
              height="18"
              alt="eth"
              style={{ marginRight: '5px' }}
            />
            {/* <CoinName>{`${address.coinName}:`}</CoinName> */}
            {`${address.address}`}
          </DonationAddress>
        ))}
      </DonationAddressesContainer>
    </Donations>
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
  </FooterContainer>
);

const CoinName = styled.span`
  font-weight: 600;
  @media only screen and (max-width: ${props => props.theme.breakMobile}) {
    display: none;
  }
`;
const DonationAddress = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 10px;
`;
const DonationAddressesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  flex-wrap: wrap;
  justify-content: center;
`;
const Donations = styled.div`
  margin: 10px;
  font-size: 0.8rem;
  text-align: center;
`;
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
const FooterContainer = styled.footer`
  letter-spacing: 1.5px;
  min-height: ${props => props.theme.footerHeight};
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

export default Footer;
