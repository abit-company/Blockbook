import React from 'react';
import {
  Paragraph,
  Page,
  Important,
  ChapterTitle,
  ImageWrapper,
  Italic,
  Bold,
} from 'components';
import PageLayout from 'layouts/PageLayout';
import ifttt from './ifttt.png';

export default () => (
  <PageLayout>
    <Page>
      <ChapterTitle>Smart contracts - introduction</ChapterTitle>
      <Paragraph>
        Not long after Bitcoin demonstrated the potential of the Blockchain,
        people started to realize that this technology can do much more than
        simply be used as a basis for a new digital currency. Cryptocurrencies
        as medium of exchange are just one of the possible use cases, but the
        real power of the Blockchain relies in the{' '}
        <Italic>smart contracts</Italic>.
      </Paragraph>
      <Important>
        A contract is{' '}
        <Italic>
          an agreement between two or more parties that is enforceable by law as
          a legal binding
        </Italic>. Contracts are essential to create trust between untrusted
        parties and can be considered the building blocks for every business.
      </Important>
      <Paragraph>
        A contract could be as simple as a bus ticket or more complex like a
        work contract.
      </Paragraph>
      <Important>
        In the context of Blockchains a <Italic>smart contract</Italic> is a
        general term that identifies a computer program which has all the
        characteristics of a real world contract but it is stored and executed
        inside a Blockchain. Agreement is not enforced by law, but by the
        contract itself through network consensus.
      </Important>
      <Paragraph>
        The problem with centralized authorities is that they tend to be
        inefficient and expensive. Smart contracts could help to solve some of
        these problems. They’re written in computer code wich is unambiguous and
        all the necessary logic is self-contained. There is no need for an
        external authority to evaluate the conditions and take decisions since
        this role is replaced by the network consensus. Smart contracts define
        the rules and automatically enforce all parties to respect those rules
        in a decentralized way, rather than relying on central authorities. If
        some conditions are met, the smart contract independently execute some
        specific actions.
      </Paragraph>
      <Important>
        A smart contract can be seen as an IFTTT (If This Then That)
        application. Events trigger functions executed by the smart contract.
        Based on some event the smart contract react with some actions.
      </Important>
      <ImageWrapper label="If this then that">{ifttt}</ImageWrapper>
    </Page>
  </PageLayout>
);
