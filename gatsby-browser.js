import React from 'react';
import BaseLayout from './src/components/BaseLayout';
import PageTemplate from './src/templates/PageTemplate';

export const wrapPageElement = ({ element, props }) => {
  console.log('WRAP PAGE ELEMENT');
  console.log(props);
  return (
    <BaseLayout {...props}>
      {props.location.pathname === '/' ? (
        element
      ) : (
        <PageTemplate {...props}>{element}</PageTemplate>
      )}
    </BaseLayout>
  );
};

export const onRouteUpdate = ({ location }) => {
  console.log('new pathname', location.pathname);
  if (location.pathname === '/') return;
  localStorage.setItem('lastLocation', location.pathname);
};
