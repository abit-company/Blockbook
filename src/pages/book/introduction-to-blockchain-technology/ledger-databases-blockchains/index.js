import React from 'react';
import {
  Paragraph,
  Page,
  Important,
  ChapterTitle,
  SubChapterTitle,
  ImageWrapper,
} from 'components';
import PageTemplate from 'templates/PageTemplate';
// import ledgerDatabaseBlockchain from './db-ledger-blockchain.png';
// import blockchainImg from './blockchain.png';
// import BlockImg from './block.png';

const LedgerDatabaseBlockchain = () => (
  <PageTemplate>
    <Page>
      <ChapterTitle>Ledgers, databases and Blockchains</ChapterTitle>
      <Paragraph>
        At the heart of the Blockchain technology there is a ledger that records
        transactions. The idea is very similar to a traditional ledger where
        transactions can involve any asset, such as money or properties.
      </Paragraph>
      <Important>
        A ledger is an item used for recording transactions.
      </Important>
      <Paragraph>
        Ledgers have been in use long before Blockchains. In fact they have been
        at the heart of commerce since ancient times. While its concept did not
        change over time, the technologies behind it transitioned from paper to
        electronic records, thus creating the digital ledger. A Blockchain is
        completely digital. This means that everything that is saved in the
        ledger must be expressed in a digital form.
      </Paragraph>
      <Important>At its heart a Blockchain is just a digital ledger.</Important>
      <Paragraph>
        For those familiar with databases, ledgers may seem quite a similar
        concept. The purpose of both technologies is to store data but while
        with the former we can insert, delete and modify data, with a ledger we
        can only append new data. It is possible to use a database to implement
        a ledger by enforcing some constraints over the set of all possible
        operations. However, when talking about Blockchain, it’s better to use
        the term ledger rather than database.
      </Paragraph>
      <Important>A ledger can be seen as an append-only database.</Important>
      {/* <ImageWrapper label="ledger, databases and blockchains">
        {ledgerDatabaseBlockchain}
      </ImageWrapper> */}
      <Paragraph>
        We can identify some similarities between these technologies, but what
        are the differences between traditional databases and blockchains? First
        of all, Blockchain technology is not going to replace databases. Some of
        the scenarios that now involve databases will be moved to Blockchains,
        but neither will destroy the other.
      </Paragraph>
      <Important>
        Databases and Blockchains address different problems. We can say that
        blockchains are an appealing technology in scenarios where
        decentralization is preferred over a traditional centralized management.
      </Important>
      <Paragraph>
        A traditional database for example requires a user-controlled access
        system. In other words, it requires a system directly operated by known
        and trustworthy individuals (whether that is a person, an organization
        or a machine). A Blockchain, on the other hand, can be used by unknown
        and untrusted parties, without the need of any form of access-control.
        Blockchains propose a solutions to overcome problems in scenarios where
        trust, security and immutability are fundamental requirements.
      </Paragraph>

      <SubChapterTitle>Blockchain structure</SubChapterTitle>
      <Paragraph>
        As we said before, at the heart of a Blockchain there is a digital
        ledger. The underlying structure of this ledger is one of the key
        characteristics of a Blockchain.
      </Paragraph>
      <Important>
        In a Blockchain, the digital ledger is structured as a chain of records,
        called blocks, each being responsible of storing some kind of
        information - from simple records of transactions to entire computer
        programs.
      </Important>
      {/* <ImageWrapper label="Representation of a blockchain">
        {blockchainImg}
      </ImageWrapper> */}
      <Paragraph>
        We use Blockchain with capital "B" when referring to the overall system,
        and blockchain with lowercase "b" referring to the chain of blocks.
      </Paragraph>
      <SubChapterTitle>Blocks</SubChapterTitle>
      <Important>
        Blocks are permanently recorded data structures, added one after the
        other. Each block contains a mathematical proof, created using
        cryptography, that ensures it follows in sequence from the previous
        block, resulting into a linear sequence which ultimately forms a chain.
        The first block is called the genesis block.
      </Important>
      {/* <ImageWrapper label="Block representation">{BlockImg}</ImageWrapper> */}
      <Paragraph>
        The concept of chain of blocks is common to all Blockchain system, but
        different projects design their blockchains for different purposes. For
        example the blocks of the Bitcoin blockchain are different from the ones
        of Ethereum blockchain. Depending on how the blockchain is designed,
        blocks can have different sizes and store different types of
        information. The connection between blocks is enforced by the use of a
        hash function, which creates an unbreakable link between blocks.
      </Paragraph>
    </Page>
  </PageTemplate>
);

export default LedgerDatabaseBlockchain;
