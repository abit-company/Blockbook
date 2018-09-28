import React from 'react';
import { Paragraph, Page } from 'components';

const IntroductionToBlockchainTechnology = () => (
  <Page>
    <h2>Introduction to Blockchain technology</h2>
    <Paragraph>
      The concept of Blockchain was introduced in 2008 by Satoshi Nakamoto in a
      paper called <cite>“Bitcoin: A Peer-to-Peer Electronic Cash System”</cite>,
      and then implemented for the first time in 2009 as part of the Bitcoin.
    </Paragraph>
    <Paragraph>
      Let’s be clear: Blockchain is not Bitcoin. Bitcoin is just one of the
      countless possible applications which can be built on top of the
      Blockchain. Bitcoin right now is without doubt the most popular project,
      but Blockchain technology goes much deeper than Bitcoin. You could say
      that Blockchain is to Bitcoin what Internet is to Google.
    </Paragraph>
    <Paragraph>
      A Blockchain can be seen as a protocol that guarantees special properties
      to the applications built on top of it. It is not just a technological
      change, it is a complete paradigm shift: from centralization to
      decentralization, from close to open, from trust to trustless, from
      borders to global.
    </Paragraph>
    <Paragraph>
      Blockchain is not a simple concept, and the technologies behind it are
      quite complex too, but in order to comprehend the potential of this
      technology (and what it can’t or shouldn’t do) it is fundamental to have
      at least a basic grasp of how it works.
    </Paragraph>
  </Page>
);

export default IntroductionToBlockchainTechnology;
