import React from 'react';
import styled from 'styled-components';
import { Link } from './UI';
import { toc } from '../tableOfContents';
import UiContext from './UiContext';

class TreeView extends React.Component {
  render() {
    let childNodes;
    const { node } = this.props;
    if (node.childNodes != null) {
      childNodes = node.childNodes.map(childNode => (
        <TreeView key={childNode.url} node={childNode} />
      ));
    }

    return (
      <Li>
        <UiContext.Consumer>
          {({ closeSideBar }) => (
            <SideBarLink
              exact
              to={node.url}
              onClick={closeSideBar}
              activeClassName="active"
            >
              {node.title}
            </SideBarLink>
          )}
        </UiContext.Consumer>
        {childNodes ? <Ul>{childNodes}</Ul> : null}
      </Li>
    );
  }
}

export default () => (
  <SideBar onClick={e => e.stopPropagation()}>
    <SideBarTitle
      to="/"
      onClick={() => document.body.classList.remove('no-scroll')}
    >
      Index
    </SideBarTitle>
    <Ul>{toc.map(node => <TreeView key={node.url} node={node} />)}</Ul>
  </SideBar>
);

const SideBarLink = styled(Link)`
  &.active {
    border-left: 5px solid ${props => props.theme.mainColor};
    padding-left: 10px;
    margin-left: -10px;
  }
`;
const SideBarTitle = styled(Link)`
  font-size: 1em;
  font-weight: bold;
`;

const Li = styled.li`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  border-left: none;
`;

const Ul = styled.ul`
  list-style-type: none;
  padding-left: 1rem;
  /* border-left: 1px solid ${props => props.theme.baseTextColor}; */
`;

const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0;
  padding-left: 1rem;
  font-size: 15px;
  padding-right: 1rem;
`;
