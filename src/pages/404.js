import React from 'react';
import styled from 'styled-components';
import { Link } from 'components';

export default () => (
  <NotFoundPage>
    <NotFound>NOT FOUND</NotFound>
    <Link to="/">Home</Link>
  </NotFoundPage>
);

const NotFound = styled.h1`
  font-size: 5rem;
  font-weight: 200;
`;
const NotFoundPage = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
