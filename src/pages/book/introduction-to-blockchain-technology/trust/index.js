import React from 'react';
import {
  Paragraph,
  Page,
  Important,
  ChapterTitle,
  SubChapterTitle,
  Bold,
  ImageWrapper,
} from 'components';
import styled from 'styled-components';
import PageLayout from 'layouts/PageLayout';

export default () => (
  <PageLayout>
    <Page>
      <ChapterTitle>Trust</ChapterTitle>
      <Paragraph>
        A Blockchain is an open and neutral system. Trust do not depend on any
        institution or on the intentions of any particular actor. In a
        Blockchain you don’t trust anybody, but at the same time it is safe to
        assume that a transaction will be processed correctly without any
        tampering or censorship.
      </Paragraph>
      <Important>
        Blockchain completely change the concept of trust but do not remove the
        need for trust. Trust is still needed, but instead of being concentrated
        in a central place it is distributed across many different actors and
        technologies. Trust is moved from institutions and person to a network.
      </Important>
      <Paragraph>
        Trust is enforced via a combination of cryptography, consensus protocols
        and economics which encourages actors to cooperate with the rules
        defined in the Blockchain. However it’s not possible for a system to be
        100% secure and some degree of trust is needed. To make some examples we
        have to:
      </Paragraph>
      <ul>
        <li>
          <Paragraph>
            <Bold>Trust the cryptography</Bold>. Cryptography is perfect on the
            paper, but when it faces real-world implementations problems arise
            (e.g. the random number generator used to create a private key was
            not so random). Or maybe a mathematical vulnerability is found in an
            algorithm that was considered secure. Right now nobody has enough
            computation power to get even close to break any of the
            cryptographic functions usually used in Blockchains, but it is
            possible to discover vulnerabilities in the implementations of those
            algorithms.
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            <Bold>Trust the distributed consensus</Bold>
            . The distributed consensus is what actually guarantees the respect
            of the rules and prevents anyone from performing malicious attacks.
            But an increase in the centralization could be a threat to the
            distributed consensus.
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            <Bold>Trust the miners</Bold>
            . If a group of miners decides to collude it is not possible to
            exclude that they could successfully perform a 51% attack. In
            Bitcoin for example more than half of the mining power is
            concentrated in 5 mining pools, and more than 70% is concentrated in
            China. A scenario that is far from decentralization. In PoS a
            similar scenario could happen if a group of exchanges have more than
            51% of coins in their wallets.
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            <Bold>Trust the wallets</Bold>
            . If the wallet you are using has a bug, for example it is not
            generating private keys correctly or has a backdoor this could
            result in your fund getting stolen.
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            <Bold>Trust the developers</Bold>
            . Even if the code is usually open-source, only a really small
            percentage of users has the skills and the time necessary to
            understand and analyze this code. We need to trust the developers to
            write good software. Programming is hard. Programming a system that
            could handle billions of dollars in a decentralized fashion is even
            harder.
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            <Bold>Trust the smart contracts</Bold>
            . A smart contract like any other computer program could have
            vulnerabilities. Some smart contracts got hacked after raising
            millions of dollars (e.g The DAO) or got their fund locked (Parity
            multisig smart contract).
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            <Bold>Trust yourself</Bold>
            . If someone discovers your private keys your fund can be easily
            taken and there is no way to get it back.
          </Paragraph>
        </li>
      </ul>
    </Page>
  </PageLayout>
);
