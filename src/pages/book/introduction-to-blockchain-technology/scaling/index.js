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
import PageTemplate from 'templates/PageTemplate';
// import lowThroughput from './scaling.png';
// import scalingOffChain from './scaling-off-chain.png';
// import lightningNetworkOverview from './lightning-overview.png';
// import lightningTrans1 from './lightning-trans-1.png';
// import lightningTrans2 from './lightning-trans-2.png';
// import lightningTrans3 from './lightning-trans-3.png';
// import lightningRoutes from './lightning-routes.png';

const Scaling = () => (
  <PageTemplate>
    <Page>
      <ChapterTitle>Scaling</ChapterTitle>
      <Paragraph>
        One the biggest promise of Blockchain technology is the possibility to
        make instant transactions with no fees. Right now this technology is
        still in the early stage of development and it is not free from
        challenges. Like any new technology there are many problems that need to
        be solved before a mainstream adoption could be possible. One of the
        most evident problem is the difficulty blockchains are facing to scale.
      </Paragraph>
      <Important>
        Scalability is the ability of a system to handle a growing amount of
        work. In a Blockchains it usually refers to the capability of processing
        a growing number of transactions without affecting performance.
      </Important>
      <Paragraph>
        The practical consequences of this scalability problems are:
      </Paragraph>
      <ul>
        <li>
          <Bold>Low throughput:</Bold>
          Many Blockchains can only process a limited number of transactions per
          seconds (tps). Bitcoin handle around 7 tps, Ethereum 10-30 tps (Visa
          can reach 50.000 tps at peak). Transactions that exceed this limit are
          queued and processed later.
          {/* <ImageWrapper label="Low throughput">{lowThroughput}</ImageWrapper> */}
        </li>
        <li>
          <Bold>Slow transactions:</Bold>
          the time required to create a new block (especially in PoW) is slow
          (Bitcoin block time is 10 minutes on average). Considering that one
          confirmation is usually not enough the time needed to process a
          transaction is far from instant.
        </li>
        <li>
          <Bold>High fees:</Bold>
          when a blockchain fails to scale the transactions fees usually grow.
          Miners prefer to pick up transactions with high fees over transactions
          with low fees.
        </li>
      </ul>
      <Paragraph>
        A lot of solutions has been researched to increase the numbers of tps
        that could be processed by a Blockchain. The most relevant are:
      </Paragraph>
      <ul>
        <li>Increase the block-size (SegWit, Bitcoin Cash etc.).</li>
        <li>Change consensus protocol (e.g PoS)</li>
        <li>
          Move transactions off-chain into private database (e.g On exchanges
          the transactions are managed in private databases)
        </li>
        <li>
          Move transactions off-chain in separate public payment channels (e.g
          Lightning Network).
        </li>
        <li>Change the blockchain structure (e.g IOTA tangle).</li>
      </ul>
      <Paragraph>
        Moving transactions off-chain in separate public payment channels seems
        right now the most viable solution to be adopted by existing projects.
      </Paragraph>
      <SubChapterTitle>Off-chain transactions</SubChapterTitle>
      <Paragraph>
        The basic idea behind off-chain transactions is that the blockchain does
        not have to handle all the transactions if most of them could be
        processed outside the blockchain (off-chain).
      </Paragraph>
      <Important>
        An off-chain transaction, as opposed to an on-chain transaction (normal
        transaction) is not directly processed into the blockchain but is
        executed in a layer built on top of the blockchain (second layer) using
        specifically designed payment channels.
      </Important>
      {/* <ImageWrapper label="Off chain payement channel">
        {scalingOffChain}
      </ImageWrapper> */}
      <Paragraph>
        Payment channels allow users to transfer money to each other without the
        need to verify each transaction on the blockchain but still maintaining
        all the properties guaranteed by the blockchain. Doing this it is
        possible minimizes the amount of data processed in the blockchain. The
        most promising second layer protocol right now is the Lightning Network.
      </Paragraph>
      <SubChapterTitle>Lightning network</SubChapterTitle>
      <Important>
        The Lightning Network is a second layer payment protocol built on top of
        a Blockchain and it is composed by a network of bidirectional payment
        channels between users.
      </Important>
      {/* <ImageWrapper label="Lightning network overview">
        {lightningNetworkOverview}
      </ImageWrapper> */}

      <Paragraph>
        Every channel is composed by a multisignature address created by two
        actors. Each actor put in the address the amount it is planning to use
        and subsequently make transactions between each other without writing
        anything on the blockchain.
      </Paragraph>
      <Paragraph>The process can be summarized in this three steps:</Paragraph>
      <ol>
        <li>
          Two actors (<Italic>A</Italic> and <Italic>B</Italic>) create a
          multisignature address with the amount of money they plan to use (e.g
          1 BTC each). This address became a contract between the two actors and
          contains the amount of money owned by each party.
        </li>
        <li>
          The contract is saved on the blockchain and the channel is opened.
          {/* <ImageWrapper label="Opening Lightning channel">
            {lightningTrans1}
          </ImageWrapper> */}
        </li>
        <li>
          <Italic>A</Italic> and <Italic>B</Italic> could make transactions
          between each other instantly, since instead of waiting for the
          blockchain to verify each transaction everything is managed inside the
          contract, using promises conceptually similar to IOU (I owe you)
          contracts. You don’t need to trust the other party since nobody could
          take the money without fulfilling the terms of the contact.
          {/* <ImageWrapper label="Lightning transactions">
            {lightningTrans2}
          </ImageWrapper> */}
        </li>
        <li>
          When one of the actor decide to close the channel the blockchain
          resolve the contract by giving each party the amount they deserve.
          {/* <ImageWrapper label="Lightning channel closed">
            {lightningTrans3}
          </ImageWrapper> */}
        </li>
      </ol>
      <Paragraph>
        The Lightning network can be implemented on every blockchain that
        support some technical requirements, multi signature wallets is one of
        this (the other requirements are more technical and not fundamental to
        understand the main idea).
      </Paragraph>
      <h5>Payments network</h5>
      <Paragraph>
        Opening a channel every time someone wants to make a transaction is not
        very convenient, since you still the need to save the contract on the
        blockchain.
      </Paragraph>
      <Important>
        On the main advantage of the Lightning Network is that there is no need
        to open a direct channel between two parties if already exist a route
        (indirect channel) between them.
      </Important>
      <Paragraph>
        If for example <Italic>A</Italic> want to send money to{' '}
        <Italic>B</Italic> there is no need to open a new channel, since there
        exist a route between <Italic>A</Italic> and <Italic>B</Italic>. By
        taking advantage of the routing capabilities of the network it is
        possible to route payments just like information are routed on the
        internet. If more than one route is found, User <Italic>A</Italic> could
        choose the preferred route, for example the one with the lowest fee or
        the fastest one.
      </Paragraph>
      {/* <ImageWrapper label="Lightning routes">{lightningRoutes}</ImageWrapper> */}
      <h5>Micropayments and streaming payments</h5>
      <Paragraph>
        A system where is possible to make instant payments with (almost) no
        fees in real time like the Lightning Network open up to wide range of
        new possible applications. It will be possible for a car to autonomously
        pay the insurance every kilometer or pay for every Kbyte of a film or a
        song. Employee could be paid for work on a minute basis rather than
        monthly and everyone will have a real time view of the their cash flow.
        Just like data streaming has become a reality thanks to internet, money
        streaming could became a reality thanks to the blockchain.
      </Paragraph>
    </Page>
  </PageTemplate>
);

export default Scaling;
