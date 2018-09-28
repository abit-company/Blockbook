import React from 'react';
import BaseLayout from './src/components/BaseLayout';
import PageTemplate from './src/templates/PageTemplate';

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  console.log('WRAP PAGE ELEMENT');
  console.log(props);
  if (props.location.pathname === '/') {
    return <BaseLayout {...props}>{element}</BaseLayout>;
  }
  return (
    <BaseLayout {...props}>
      <PageTemplate>{element}</PageTemplate>
    </BaseLayout>
  );
};

export const onRouteUpdate = ({ location }) => {
  console.log('new pathname', location.pathname);
};
