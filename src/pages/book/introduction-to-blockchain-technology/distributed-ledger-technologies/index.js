import React from 'react';
import {
  Paragraph,
  Page,
  Important,
  ChapterTitle,
  SubChapterTitle,
  ImageWrapper,
  Italic,
  Bold,
} from 'components';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
// import dlt from './dlt-blockchains.png';
// import cyclicAcyclic from './cyclic-acyclic.png';
// import tangle from './tangle.png';

const DistributedLedgerTechnologies = () => (
  <Page>
    <ChapterTitle>Distributed Ledger Technologies</ChapterTitle>
    <Paragraph>
      To overcome some of the blockchain problems, in particular the difficulty
      to scale, different project have tried to redesigned the underlying
      structure of the distributed ledger while keeping the core concept intact.
    </Paragraph>
    <Important>
      We call Distributed Ledger Technologies (DLT) all the applications that
      leverage the concept of a distributed ledger but do not necessarily
      structure the ledger as a chain of blocks.
    </Important>
    {/* <ImageWrapper label="DLTs and Blockchains">{dlt}</ImageWrapper> */}
    <Important>
      Blockchain is a particular type of DLT where the distributed ledger is
      structured as a chain of blocks.
    </Important>
    <Paragraph>
      An example of DLT that do not use a blockchain is IOTA, which created a
      new data structure, called tangle, designed specifically for IoT.
    </Paragraph>
    <SubChapterTitle>Tangle (IOTA)</SubChapterTitle>
    <Paragraph>
      Tangle is a data structure created by IOTA to power their cryptocurrency.
      In a tangle-base DLT the global blockchain is substituted with a tangle.
    </Paragraph>
    <Important>
      A tangle is a special type of distributed ledger architecture that is
      based on a Directed Acyclic Graph (DAG).
    </Important>
    <Paragraph>
      A DAG is graph where every node is connected to some other nodes through
      directed links and there are no cycles.
    </Paragraph>
    {/* <ImageWrapper label="Cyclic vs Acyclic graph">
        {cyclicAcyclic}
      </ImageWrapper> */}
    <Paragraph>
      In a tangle there is no concept of blocks, chain or even mining or
      transaction fee. The main idea is that in order to issue a transaction,
      users must work to verify other transactions (with a process similar to
      PoW). Therefore, users who create transactions are contributing to the
      network’s security. Every transaction confirms other two transactions,
      resulting in (theoretically) a very scalable system where transactions are
      verified in parallel (there is no tps limit).
    </Paragraph>
    {/* <ImageWrapper label="Tangle">{tangle}</ImageWrapper> */}
  </Page>
);

export default DistributedLedgerTechnologies;
