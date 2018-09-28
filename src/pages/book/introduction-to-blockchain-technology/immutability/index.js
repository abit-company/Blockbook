import React from 'react';
import {
  Paragraph,
  Page,
  Important,
  ChapterTitle,
  SubChapterTitle,
  ImageWrapper,
} from 'components';
import styled from 'styled-components';

const Immutability = () => (
  <Page>
    <ChapterTitle>Immutability</ChapterTitle>
    <Paragraph>
      One of the first thing everybody has read about blockchains is that they
      are immutable. At first sight it may seems that immutability is enforced
      by the hashing linkage between the blocks. If an attacker change a
      transaction in the past, this change will affect all the following blocks,
      resulting in a different state. Without something like hash functions,
      nodes would not be able to know if the integrity of the ledger has been
      preserved over time.
    </Paragraph>
    <Important>
      Hashing however do not guarantee immutability. It only guarantee that if
      something changes it will be immediately evident. Hashing makes the
      blockchain tamper-evident, not tamper-proof.
    </Important>
    <Paragraph>
      A tamper-evident system is not enough to guarantee immutability. We need a
      system that is tamper-proof, not just tamper-evident. Everyone could take
      the blockchain and modify the transactions, it is not a big deal. The
      problem arise when the attacker try to convince the network that the
      tampered ledger is the correct one. Tampering the ledger is easy, making
      the network accepting it is hard.
    </Paragraph>
    <Important>
      Immutability is not in the structure of a Blockchain, it is in the
      consensus protocol.
    </Important>
    <Paragraph>
      A blockchain is immutable only if the consensus protocol is able to
      guarantee immutability.
    </Paragraph>
  </Page>
);

export default Immutability;
