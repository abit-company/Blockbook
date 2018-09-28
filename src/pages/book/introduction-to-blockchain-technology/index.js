import React from 'react';
import { Paragraph, Page, ChapterTitle, Bold, Important } from 'components';

const IntroductionToBlockchainTechnology = () => (
  <Page>
    <ChapterTitle>Introduction to Blockchain technology</ChapterTitle>
    <Paragraph>
      The concept of Blockchain was introduced in 2008 by Satoshi Nakamoto in a
      paper called <cite>“Bitcoin: A Peer-to-Peer Electronic Cash System”</cite>,
      and then implemented for the first time(2009) as part of the Bitcoin.
    </Paragraph>
    <Paragraph>
      Let’s be clear: <Bold>Blockchain is not Bitcoin</Bold>. Bitcoin is just
      one of the countless possible applications which can be built on top of
      the Blockchain. Bitcoin right now is without doubt the most popular
      project, but Blockchain technology goes much deeper than Bitcoin. You
      could say that Blockchain is to Bitcoin what Internet is to Google.
    </Paragraph>
    <Paragraph>
      Blockchain can be seen as a protocol that guarantees special properties to
      the applications built on top of it.
    </Paragraph>
    <Important>
      It is not just a technological change, it is a complete paradigm shift:
      from centralization to decentralization, from close to open, from trust to
      trustless, from borders to global.
    </Important>
    <Paragraph>
      Blockchain is not a simple concept, and the technologies behind it reflect
      this complexity, but in order to comprehend the potential of this
      technology (and understand what a Blockahin can do and what it can not do)
      it is fundamental to have at least a basic grasp of how it works under the
      hood.
    </Paragraph>
    <Paragraph>
      In this chapter we will guide you throught the key concepts of the
      Blockchain technology, exploring the most important details that allow
      this technology to work.
    </Paragraph>
  </Page>
);

export default IntroductionToBlockchainTechnology;
