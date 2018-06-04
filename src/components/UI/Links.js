import React from 'react';
import GatsbyLink from 'gatsby-link';
import styled, { css } from 'styled-components';

const basicLinkStyle = css`
  text-decoration: none;
  color: ${props => props.theme.baseTextColor};
  transition: color 0.3s;
  :visited {
    color: ${props => props.theme.baseTextColor};
  }
  :hover {
    transition: color 0.3s;
    cursor: pointer;
    color: ${props => props.theme.mainColor};
  }
  &.active {
    color: ${props => props.theme.mainColor};
    font-weight: bold;
  }
`;

const StyledInternalLink = styled(GatsbyLink)`
  ${basicLinkStyle};
`;

const StyledExternalLink = styled.a`
  ${basicLinkStyle};
`;

export default ({ children, to, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);

  // Use gatsby-link for internal links, and <a> for others
  if (internal) {
    return (
      <StyledInternalLink to={to} {...other}>
        {children}
      </StyledInternalLink>
    );
  }
  return (
    <StyledExternalLink href={to} target="_blank" rel="noopener noreferrer">
      {children}
    </StyledExternalLink>
  );
};
