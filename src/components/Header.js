import React from 'react';
import styled, { css } from 'styled-components';
import SearchBar from './SearchBar';
import { IconNight, IconDay, IconSideBar, IconGithub } from './UI';
import Link from './Link';

export const Header = ({
  theme,
  changeTheme,
  isShowNavBar,
  isHome,
  toggleSideBar,
  isBigScreen,
}) => (
  <HeaderContainer isHome={isHome} isShowNavBar={isShowNavBar} id="header">
    <Nav>
      {!isBigScreen && !isHome ? (
        <NavLatButton
          onClick={e => {
            e.stopPropagation();
            toggleSideBar();
          }}
        >
          <IconSideBar />
        </NavLatButton>
      ) : null}
      {!isHome ? (
        <Link to="/">
          <NavTitle>Home</NavTitle>
        </Link>
      ) : null}
      <LeftLinks>
        {/* {!isHome ? (
          <>
            <NavIconWrapper>
              {theme === 'light' ? (
                <IconNight click={changeTheme} />
              ) : (
                <IconDay click={changeTheme} />
              )}
            </NavIconWrapper>
          </>
        ) : null} */}
        <SearchBar />
        <Link to={process.env.GITHUB_URL}>
          <NavIconWrapperGitHub>
            <IconGithub />
          </NavIconWrapperGitHub>
        </Link>
      </LeftLinks>
    </Nav>
  </HeaderContainer>
);

const NavLatButton = styled.div`
  height: 30px;
  width: 30px;
  fill: ${props => props.theme.baseTextColor};
`;

const NavTitle = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  @media only screen and (max-width: ${props => props.theme.breakSideBar}) {
    display: none;
  }
`;
const LeftLinks = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;
const NavIconWrapper = styled.div`
  height: 25px;
  width: 25px;
  margin: 0 15px;
  @media only screen and (max-width: ${props => props.theme.breakSideBar}) {
    margin: 0;
  }
`;
const NavIconWrapperGitHub = NavIconWrapper.extend`
  border-radius: 50%;
  background-color: ${props => props.theme.backgroundColor};
`;

const Nav = styled.nav`
  padding: 0 20px;
  margin: auto;
  max-width: 1000px;
  height: ${props => props.theme.navbarHeight};
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const HeaderContainer = styled.header`
  width: 100%;
  top: 0;
  z-index: 100;
  height: ${props => props.theme.navbarHeight};
  box-sizing: border-box;
  transition: top 0.3s;
  ${props =>
    !props.isShowNavBar &&
    css`
      top: -${props => props.theme.navbarHeight};
    `};
  ${props =>
    !props.isHome &&
    css`
      border-bottom: 1px solid ${props => props.theme.lineColor};
      background-color: ${props => props.theme.backgroundColor};
      position: fixed;
    `};
`;

export default Header;
