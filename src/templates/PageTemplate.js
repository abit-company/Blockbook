import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import {
  SideBar,
  PageNavigationFooter,
  // Highlightable,
  Link,
  IconGithub,
} from '../components';
import UiContext from '../components/UiContext';

const EditOnGithub = ({ currentPath }) => (
  <div
    style={{
      padding: '15px 0',
      display: 'flex',
      flexDirextion: 'row',
      alignItems: 'center',
    }}
  >
    <Link
      to={`${
        process.env.GITHUB_URL
      }/tree/master/src/pages${currentPath}/index.js`}
      style={{ display: 'flex', alignItems: 'center', fontSize: '0.9rem' }}
    >
      <div style={{ display: 'flex' }}>
        Edit page on Github
        <div style={{ height: '20px', width: '20px', marginLeft: '10px' }}>
          <IconGithub />
        </div>
      </div>
    </Link>
  </div>
);

export default class PageTemplate extends React.Component {
  state = {
    blockSideMenu: false,
  };

  footerHeight = 0;

  manageSideBarScroll = () => {
    const footer = document.getElementById('footer');
    const sideMenu = document.getElementById('side-menu');
    const rectFooter = footer.getBoundingClientRect();
    const rectSideMenu = sideMenu.getBoundingClientRect();
    this.footerHeight = rectFooter.height;
    if (
      rectFooter.top <= rectSideMenu.height &&
      this.state.blockSideMenu == false
    ) {
      this.setState({
        blockSideMenu: true,
      });
    } else if (
      rectFooter.top >= rectSideMenu.height &&
      this.state.blockSideMenu == true
    ) {
      this.setState({
        blockSideMenu: false,
      });
    }
  };
  componentDidMount() {
    window.addEventListener('scroll', this.manageSideBarScroll, true);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.manageSideBarScroll, true);
  }

  render() {
    return (
      <UiContext.Consumer>
        {({ isSideBarOpen, isBigScreen }) => (
          <Page>
            <SideBarWrapper
              isSideBarOpen={isSideBarOpen}
              isBigScreen={isBigScreen}
              id="side-menu"
              footerHeight={this.footerHeight}
              blockSideMenu={this.state.blockSideMenu}
            >
              <SideBar />
            </SideBarWrapper>

            <ContentWrapper>
              <Content>
                {isSideBarOpen ? <OverlaySideBar /> : null}
                {this.props.children}
                <EditOnGithub currentPath={this.props.location.pathname} />
                <PageNavigationFooter
                  currentPath={this.props.location.pathname}
                />
              </Content>
            </ContentWrapper>
          </Page>
        )}
      </UiContext.Consumer>
    );
  }
}

const OverlaySideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.baseTextColor};
  opacity: 0.2;
  z-index: 100;
`;
const SideBarWrapper = styled.div`
  border-right: 1px solid ${props => props.theme.lineColor};
  background-color: ${props => props.theme.backgroundColor};
  position: fixed;
  z-index: ${props => (props.isBigScreen ? 40 : 101)};
  height: 100vh;
  overflow-y: auto;
  width: 22rem;
  padding-bottom: 2rem;
  padding-top: ${props => (props.isBigScreen ? '80px' : '2rem')};
  transition: transform 1s ease-in-out;
  ${props =>
    props.isSideBarOpen &&
    !props.isBigScreen &&
    css`
      transition: transform 0.3s ease-in-out;
      position: fixed;
      transform: translate(0);
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
      top: 0;
    `} ${props =>
    !props.isSideBarOpen &&
    !props.isBigScreen &&
    css`
      transition: transform 0.3s ease-in-out;
      position: fixed;
      transform: translate(-100%);
      top: 0;
      height: 100vh;
      overflow: auto;
    `};
  ${props =>
    props.isBigScreen &&
    props.blockSideMenu &&
    css`
      position: absolute !important;
      bottom: ${props => props.footerHeight}px;
    `};
`;

const Page = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;
const ContentWrapper = styled.div`
  padding-left: 22rem;
  width: 100%;
  margin-top: ${props => props.theme.navbarHeight};
  @media only screen and (max-width: ${props => props.theme.breakSideBar}) {
    padding-left: 0;
  }
`;
const Content = styled.div`
  max-width: 740px;
  margin: 0 auto;
  padding: 2rem 2.5rem;
`;
