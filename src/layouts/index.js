import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import { Header, Footer } from '../components';
import { lightTheme, darkTheme } from '../styles';
import UiContext from '../components/UiContext';

// const clearSelection = () => {
//   if (window.getSelection) {
//     window.getSelection().removeAllRanges();
//   } else if (document.selection) {
//     document.selection.empty();
//   }
// };

class Layout extends React.Component {
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
    if (this.props.location.pathname === '/') return;
    const firedBy = e.target.id;
    if (firedBy === 'side-menu') return;
    const newScrollPosition = window.scrollY;
    if (newScrollPosition < this.lastScrollPosition) {
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
    try {
      docsearch({
        apiKey: 'c69eb7c785de370820ad099a5f64a3fa',
        indexName: 'blockbook',
        inputSelector: '#search-box',
        debug: false, // Set debug to true if you want to inspect the dropdown
      });
    } catch (e) {
      console.log(e.message);
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
    window.addEventListener('scroll', e => this.managePageScroll(e), true);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', true);
    window.removeEventListener('scroll', this.managePageScroll, true);
  }

  render() {
    const currentPath = this.props.location.pathname;
    const isHome = currentPath === '/';
    let theme;
    if (isHome) {
      theme = lightTheme;
    } else {
      theme = this.state.theme === 'light' ? lightTheme : darkTheme;
    }
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
            <Helmet>
              <meta charSet="utf-8" />
              <title>Blockbook</title>
              <meta
                name="description"
                content="Introduction to Blockchain technology"
              />
              <meta
                name="keywords"
                content="blockchain,bitcoin,book,technology,cryptocurrency"
              />
              <meta property="og:url" content="https://blockbook.cc/" />
              <meta property="og:site_name" content="Blockbook" />
              <meta property="og:title" content="Blockbook" />
              <meta
                property="og:description"
                content="Introduction to Blockchain technology"
              />
              <meta property="og:type" content="website" />
              <meta
                property="og:image"
                content="https://blockbook.cc/abitcompany_logo.png"
              />

              <meta name="twitter:card" content="summary" />
              <meta name="twitter:site" content="@abitcompany" />
              <meta name="twitter:creator" content="@abitcompany" />
              <meta name="twitter:title" content="abitcompany" />
              <meta
                name="twitter:description"
                content="Introduction to Blockchain technology"
              />
              <meta
                name="twitter:image"
                content="https://blockbook.cc/abitcompany_logo.png"
              />
            </Helmet>
            <Header
              theme={this.state.theme}
              changeTheme={this.UiActions.changeTheme}
              isShowNavBar={this.state.isShowNavBar}
            />
            <Main>{this.props.children()}</Main>
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
`;

const Main = styled.div`
  min-height: 100vh;
`;

export default Layout;
