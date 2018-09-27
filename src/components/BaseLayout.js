import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import { Header, Footer } from '../components';
import { lightTheme, darkTheme } from '../styles';
console.log(lightTheme);
import UiContext from '../components/UiContext';
import { Location } from '@reach/router';

// const clearSelection = () => {
//   if (window.getSelection) {
//     window.getSelection().removeAllRanges();
//   } else if (document.selection) {
//     document.selection.empty();
//   }
// };

export default class BaseLayout extends React.Component {
  constructor(props) {
    super(props);

    this.lastLocation = '';
    this.lastScrollPosition = 100000;

    let theme = 'light';
    let isBigScreen = true;
    if (typeof window !== 'undefined') {
      theme = localStorage.getItem('theme') || 'light';
      this.lastLocation = localStorage.getItem('lastLocation') || '';
      isBigScreen = window.innerWidth > 1100;
    }
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
      updateLastLocation: lastLocation => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('lastLocation', lastLocation);
          this.lastLocation = lastLocation;
        }
      },
    };
  }

  managePageScroll = e => {
    if (window.location.href === '/') return;
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
    console.log(process);
    if (process.env.NODE_ENV === 'production') {
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
    window.removeEventListener('resize', true);
    window.removeEventListener('scroll', this.managePageScroll, true);
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
    // const currentPath = this.props.location.pathname;
    const currentPath = '/';
    const isHome = currentPath === '/';

    let theme;
    if (isHome) {
      theme = lightTheme;
    } else {
      theme = this.state.theme === 'light' ? lightTheme : darkTheme;
    }
    console.log(theme);
    const Paths = {
      currentPath,
      isHome,
      lastLocation: this.lastLocation,
    };

    return (
      <UiContext.Provider
        value={Object.assign({}, this.UiActions, Paths, this.state)}
      >
        <ThemeProvider theme={theme}>
          <AppContainer onClick={this.UiActions.closeSideBar} isHome={isHome}>
            <Header
              theme={this.state.theme}
              changeTheme={this.UiActions.changeTheme}
              isShowNavBar={this.state.isShowNavBar}
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
