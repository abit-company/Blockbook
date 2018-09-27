import React from 'react';
import styled from 'styled-components';

const SearchBar = () => (
  <SearchBarContainer>
    <SearchBox id="search-box" />
    <SearchIcon width="24" height="24" viewBox="0 0 24 24">
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </SearchIcon>
  </SearchBarContainer>
);
const SearchIcon = styled.svg`
  position: absolute;
  top: 5px;
  left: 10px;
`;
const SearchBarContainer = styled.div`
  margin: 0 20px;
  position: relative;
`;
const SearchBox = styled.input`
  cursor: text;
  width: 10rem;
  color: #4e6e8e;
  display: inline-block;
  border: 1px solid #cfd4db;
  border-radius: 2rem;
  font-size: 0.9rem;
  line-height: 2rem;
  padding: 0 0.5rem 0 2.5rem;
  outline: none;
  transition: all 0.2s ease;
  background: #fff;
  display: flex;
  align-items: center;
  height: 2rem;
  transition: border-color 0.3s ease;
  &:focus {
    transition: border-color 0.3s ease;
    border: 1px solid ${props => props.theme.mainColor};
    /* ${SearchIcon} {
      fill: ${props => props.theme.mainColor};
    } */
  }
`;

export default SearchBar;
