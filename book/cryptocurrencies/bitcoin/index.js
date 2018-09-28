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
  Cit,
} from 'components';
import PageTemplate from 'templates/PageTemplate';

export const Bitcoin = () => (
  <PageTemplate>
    <Page>
      <ChapterTitle>Bitcoin</ChapterTitle>
      <Cit
        cit="A purely peer-to-peer version of electronic cash would allow online payments to be sent directly from one party to another without going through a financial institution"
        by="Bitcoin: A Peer-to-Peer Electronic Cash System - Satoshi Nakamoto"
      />
      <Paragraph>
        Bitcoin is the first cryptocurrency and the first application built on
        top of the Blockchain technology. The genesis block was mined on january
        3 2009 and carried the message{' '}
        <cite>
          “The Times 03/Jan/2009 Chancellor on brink of second bailout for
          banks”
        </cite>. Bitcoin concept was introduce in a paper written by Satoshi
        Nakamoto where he presented an idea of a purely peer-to-peer version of
        electronic cash that would allow online payments to be sent directly
        from one party to another without going through a financial institution.
      </Paragraph>
      <Important>
        Satoshi Nakamoto is the name used by the person, or people who designed
        Bitcoin. The real identity of Satoshi remains unknown.
      </Important>
      <Paragraph>
        Bitcoin has demonstrated that was possible to solve the double spending
        problem while using a global, borderless, open and decentralized network
        with no central authority.
      </Paragraph>
      <SubChapterTitle>Monetary policy</SubChapterTitle>
      <Paragraph>
        Bitcoin is a mineable cryptocurrency where consensus is reached using
        PoW protocol. The maximum supply is 21 million BTC. Miners generate a
        new block every 10 minutes (on average) and receive a block reward.
        Initially the block reward was 50 BTC. Every 210000 blocks (210000 *
        10min ≃ 4 years) the block reward is halved (right now is 12.5 BTC and
        in 2020 will go to 6.25 BTC). Currently about 17 Million bitcoin have
        been created, on a total of 21 Million, This means that Bitcoin will
        asymptotically reach the max supply in 2140 when the block reward will
        reach 1 satoshi (1 * 10^-8 BTC, minimal bitcoin unit). Once Bitcoin has
        reached the max supply miners will earn just the transactions fees and
        the system will become completely inflation free. It is very difficult
        to predict what will happen once all the bitcoin are mined, since block
        reward is an important part of the reward mechanism over which Bitcoin
        cryptoeconomics is built.
      </Paragraph>
      <SubChapterTitle>Scarcity</SubChapterTitle>
      <Paragraph>
        Bitcoin like many other cryptocurrencies is an artificially scarce
        resource. The maximum number of bitcoins that will ever exists is
        mathematically set at 21 millions. For this reason someone state that
        Bitcoin could be thinked of as <Bold>digital gold</Bold>, an improved
        version of real gold. Every Bitcoin can be splitted up to 100 million
        smaller units of account called <Italic>satoshi</Italic>(from Satoshi
        Nakamoto), so just like 1 Dollar is composed by 100 cents, 1 Bitcoin is
        composed by 100 million satoshi.
      </Paragraph>
      <SubChapterTitle>Mining</SubChapterTitle>
      <Paragraph>
        In Bitcoin mining consists of solving a complex problem which require a
        lot of computational power. Due to the very low probability of finding a
        block, miners quickly realized that they could group together and split
        the problem into several part, assigning each part to a miner. Right now
        most of Bitcoin mining are grouped in big mining pools. The top five
        mining pool control more than 50% of the total hashrate. Homemade mining
        has become infeasible due to the high cost of maintaining a competitive
        mining setup.
      </Paragraph>
      <SubChapterTitle>Privacy</SubChapterTitle>
      <Paragraph>
        Bitcoin uses a public blockchain (transactions are public and
        analyzable). It is possible to analyze all the transactions where a
        specific address is involved. However the public address does not
        provide any <Italic>direct</Italic> information about the owner of that
        address. This is considered a pseudo-anonymous model, meaning that funds
        are not tied to real-world entities but rather to addresses which are
        public but anonymous.
      </Paragraph>
      <SubChapterTitle>Scalability</SubChapterTitle>
      <Paragraph>
        Bitcoin has raised a lot of concern regarding its ability to scale. The
        problem became evident during the end of 2017 when transactions could
        take several hours before being confirmed and the transaction fees
        reached 20$. To improve scalability Bitcoin soft-forked to adopt SegWit
        and it is currently testing the Lightning Network.
      </Paragraph>
    </Page>
  </PageTemplate>
);
