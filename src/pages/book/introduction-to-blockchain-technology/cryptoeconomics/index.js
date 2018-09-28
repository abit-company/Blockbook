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
import PageTemplate from 'templates/PageTemplate';

const CryptoEconomics = () => (
  <PageTemplate>
    <Page>
      <ChapterTitle>Cryptoeconomics</ChapterTitle>
      <Paragraph>
        A Blockchain operates is an extremely adverse environment (remember the
        Byzantine generals problem). There are different actors, someone is
        honest and respect the rules enforced by the Blockchain, someone wants
        to steal money and someone wants to destroy the entire system. None of
        them trust each other. To survive in such an hostile environment
        Blockchains adopt a new approach that is a combination of cryptography,
        p2p network, consensus protocols and economics, or what we can call a
        cryptoeconomics approach.
      </Paragraph>
      <Paragraph>
        The word cryptoeconomics is the union of the word cryptography and
        economics. Cryptography studies the techniques for secure communication
        in an adverse environment. Cryptoeconomics can be seen a seen as the
        study of economic interaction in an adverse environment.
      </Paragraph>
      <Important>
        Cryptoeconomics study the design of system that operates in an adverse
        environment where cheating (or attempt to cheat) is less convenient than
        behave honestly, i.e the benefits of cheating are less than the costs.
        This is reached by combining cryptography and economic incentives.
      </Important>
      <Paragraph>
        In cryptoeconomics the desired output it is usually known and the focus
        is on designing the most trustworthy process to reach this output, using
        cryptography and economics incentives. This type of design can be seen
        as an application of inverse game theory (we know the desired output but
        we don’t know how users will behave).
      </Paragraph>
      <Paragraph>
        If we assume that the majority of the users is economically rational
        then it is possible to influence their behaviour through economic
        incentives/punishment. Economics incentives force a rational user to
        behave in a certain way and together with cryptography it is possible to
        create trust in a system like the Blockchain. Trust is created thanks to
        an economic game that incentivizes actors to cooperate with the rules
        defined by the protocol.
      </Paragraph>
      <Paragraph>
        Possible incentives for actors who honestly contribute to the creation
        of trust could be:
      </Paragraph>
      <ul>
        <li>Monetary reward (e.g. tokens of that blockchain).</li>
        <li>
          Decision privileges (e.g decide which transaction can be included in a
          block).
        </li>
      </ul>
      <Paragraph>
        On the other hand possible punishment for malicious actor could be:
      </Paragraph>
      <ul>
        <li>
          Monetary loss, in the form of electricity (PoW) or tokens (PoS).
        </li>
        <li>Privileges loss: lose the possibility to verify transactions.</li>
      </ul>
    </Page>
  </PageTemplate>
);

export default CryptoEconomics;
