import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import { Header, Footer } from '../components';
import UiContext from './UiContext';
import { lightTheme, darkTheme } from '../styles';
import { Location } from '@reach/router';
import Head from './Head';

export default class BaseLayout extends React.Component {
  constructor(props) {
    super(props);

    this.lastScrollPosition = 100000;
    let isBigScreen = true;
    if (typeof window !== 'undefined') {
      theme = localStorage.getItem('theme') || 'light';
      isBigScreen = window.innerWidth > 1100;
    }

    let theme = 'light';
    this.state = {
      theme,
      isBigScreen,
      isSideBarOpen: false,
      isShowNavBar: true,
    };
    this.UiActions = {
      toggleSideBar: () => {
        if (!this.state.isSideBarOpen) {
          document.body.classList.add('no-scroll');
        }
        this.setState({ isSideBarOpen: !this.state.isSideBarOpen });
      },
      closeSideBar: () => {
        document.body.classList.remove('no-scroll');
        if (this.state.isSideBarOpen) this.setState({ isSideBarOpen: false });
      },
      changeTheme: () => {
        const newTheme = this.state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        this.setState({ theme: newTheme });
      },
    };
  }

  managePageScroll = e => {
    if (this.props.location.pathname === '/') return;
    const firedBy = e.target.id;
    if (firedBy === 'side-menu') return;
    const newScrollPosition = window.scrollY;
    if (newScrollPosition <= 0) {
      this.setState({
        isShowNavBar: true,
      });
      return;
    }
    if (newScrollPosition <= this.lastScrollPosition) {
      if (!this.state.isShowNavBar) {
        this.setState({
          isShowNavBar: true,
        });
      }
    } else if (this.state.isShowNavBar) {
      this.setState({
        isShowNavBar: false,
      });
    }
    this.lastScrollPosition = newScrollPosition;
  };
  componentDidMount() {
    console.log(this.props);
    console.log('COMPONENT DID MOUNT');
    if (process.env.NODE_ENV === 'production') {
      console.log('SET DOC SEARCH');
      try {
        window.docsearch({
          apiKey: 'c69eb7c785de370820ad099a5f64a3fa',
          indexName: 'blockbook',
          inputSelector: '#search-box',
          debug: false, // Set debug to true if you want to inspect the dropdown
        });
      } catch (e) {
        console.log(e.message);
      }
    }

    window.addEventListener(
      'resize',
      () => {
        this.setState({
          isBigScreen: window.innerWidth > 1100,
        });
      },
      true
    );
    window.addEventListener('scroll', this.managePageScroll, true);
  }
  componentWillUnmount() {
    // window.removeEventListener('resize', true);
    // window.removeEventListener('scroll', this.managePageScroll, true);
  }

  // side swipe
  onTouchStart = e => {
    this.touchStart = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY,
    };
  };
  onTouchEnd = e => {
    const dx = e.changedTouches[0].clientX - this.touchStart.x;
    const dy = e.changedTouches[0].clientY - this.touchStart.y;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx > 0 && this.touchStart.x <= 80) {
        this.UiActions.toggleSideBar();
      } else {
        // this.toggleSidebar(false);
        console.log('side bar close');
      }
    }
  };

  render() {
    console.log('RENDER BASE LAYOUT');
    console.log(this.props.location.pathname);
    const currentPath = this.props.location.pathname;
    const isHome = currentPath === '/';
    let theme;
    if (isHome) {
      theme = lightTheme;
    } else {
      theme = this.state.theme === 'light' ? lightTheme : darkTheme;
    }
    return (
      <UiContext.Provider value={{ ...this.UiActions, ...this.state }}>
        <ThemeProvider theme={theme}>
          <AppContainer onClick={this.UiActions.closeSideBar} isHome={isHome}>
            <Head />
            <Header
              isHome={isHome}
              theme={this.state.theme}
              changeTheme={this.UiActions.changeTheme}
              isShowNavBar={this.state.isShowNavBar}
              toggleSideBar={this.UiActions.toggleSideBar}
              isBigScreen={this.state.isBigScreen}
            />
            <Main onTouchStart={this.onTouchStart} onTouchEnd={this.onTouchEnd}>
              {this.props.children}
            </Main>
            <Footer />
          </AppContainer>
        </ThemeProvider>
      </UiContext.Provider>
    );
  }
}

const AppContainer = styled.div`
  background-color: ${props =>
    props.isHome ? 'transparent' : props.theme.backgroundColor};
  color: ${props => props.theme.baseTextColor};
  font-size: 16px;
  position: relative;
`;

injectGlobal`
  *,
  *:after,
  *:before {
      box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-font-smoothing: antialiased;
    transition: background-color .2s ease;
  }
  .no-scroll {
    overflow-y: hidden;
  }
  ::-webkit-scrollbar {
    display: none;
  }

  .algolia-autocomplete .ds-dropdown-menu {
    @media (max-width: 600px) {
      z-index: 100;
      position: fixed!important;
      top: 40px!important;
      left: auto!important;
      right: 1rem!important;
      min-width: calc(100% - 2rem);
      max-width: calc(100% - 2rem);
      max-height: calc(100% - 5rem);
      display: block;
      ::before {
        left: 50%;
      }
    }
  }
  .algolia-autocomplete.algolia-autocomplete-right .ds-dropdown-menu {
    right: 1rem !important;
    left: inherit!important;
  }

`;

const Main = styled.div`
  min-height: 100vh;
`;
