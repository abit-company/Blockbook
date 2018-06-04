import React from 'react';
import { Paragraph, Page, ChapterTitle } from 'components';
import PageLayout from 'layouts/PageLayout';

export default () => (
  <PageLayout>
    <Page>
      <ChapterTitle>A new kind in the block</ChapterTitle>
      <Paragraph>
        During the last few years, media have periodically reported news about
        Bitcoin. Sometimes it was about its incredible raise in price, sometimes
        about its incredible drop in price and sometimes about how Bitcoin was
        allegedly used by the criminals all over the world. Lots of people
        labeled Bitcoin as a ponzi scheme, other compared Bitcoin to the tulips
        bubble of 1637. Meanwhile, someone else started digging deeper, trying
        to understand how to make it possible for people all over the world to
        transfer money without a bank. They found a system that was open,
        public, censorship-resistant, secure and where innovation could be
        developed without asking any permission: the Blockchain technology.
      </Paragraph>
      <Paragraph>
        The Blockchain technology is becoming one of the top strategic
        priorities of the most influential companies and business leaders
        worldwide, with the promise of reducing costs, enhance trust, minimise
        inefficiencies and radically transform business models.
      </Paragraph>
    </Page>
  </PageLayout>
);
