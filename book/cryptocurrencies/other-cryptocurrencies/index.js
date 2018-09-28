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

export const OtherCryptocurrencies = () => (
  <PageTemplate>
    <Page>
      <ChapterTitle>
        Other relevant cryptocurrencies (for payments)
      </ChapterTitle>
      <Paragraph>
        After Bitcoin made its appearance numerous other projects has been
        created inspired by Bitcoin.
      </Paragraph>
      <SubChapterTitle>Litecoin (LTC)</SubChapterTitle>
      <Paragraph>
        Litecoin is a cryptocurrency created by Charlie Lee, launched in 2011,
        heavily inspired by Bitcoin (it was actually a fork of the Bitcoin
        client). Litecoin was born from the same code used in Bitcoin with some
        changes. The motivation behind Litecoin was to improve some aspects of
        Bitcoin. The main differences with Bitcoin are:
      </Paragraph>
      <ul>
        <li>Decreased Block time (2.5 minutes instead of 10 minutes)</li>
        <li>
          Different Proof of work algorithm (scrypt instead of Hashcash, in
          order to make it ASIC-resistant)
        </li>
        <li>Increased max supply (84 millions instead of 21 millions)</li>
      </ul>
      <SubChapterTitle>Monero (XRP)</SubChapterTitle>
      <Paragraph>
        Monero is a cryptocurrency created in 2014 mainly focused on privacy.
        Monero uses special cryptographic protocols to ensure that all of its
        transactions remain 100% unlinkable, private and untraceable even
        through blockchain analysis.
      </Paragraph>
      <SubChapterTitle>Ripple (XRP)</SubChapterTitle>
      <Paragraph>
        Ripple is a company focused on creating{' '}
        <Italic>
          secure, instant and nearly free global financial transactions
        </Italic>. One of their products is the ripple token (XRP). XRP can be
        used as a native cryptocurrency in the products that compose{' '}
        <Italic>RippleNet</Italic>, a decentralized global network of banks and
        payment providers that are interconnected through Ripple’s technology.
        The main services that RippleNet offers are:
      </Paragraph>
      <ul>
        <li>
          <Bold>xCurrent </Bold>, that enables banks to instantly settle
          cross-border payments.
        </li>
        <li>
          <Bold>xVia </Bold>, that enables users (corporates, payment providers
          and banks) to send payments globally enriched with information (e.g
          invoices).
        </li>
        <li>
          <Bold>xRapid</Bold>, for payment providers and other financial
          institutions who want to minimize liquidity costs by lowering the
          capital requirements.
        </li>
      </ul>
      <Paragraph>
        RippleNet’s members do not necessary have to use XRP token but could use
        any tokens representing fiat currency, cryptocurrency, commodity or any
        other unit of value. The biggest selling point of XRP is that it is
        going to be used as a global currency inside RippleNet, solving problems
        like the need to maintain foreign currency deposits (<Italic>
          nostro accounts
        </Italic>).
      </Paragraph>
      <Paragraph>
        XRP uses a consensus algorithm called the{' '}
        <Italic>Ripple Protocol consensus algorithm</Italic> (RPCA) which has
        raised some criticism due to its (pseudo) centralized nature. This
        protocol requires a list of trusted nodes, making XRP a permissioned
        blockchain. This gives Ripple a large measure of control over XRP’s
        inner workings, which has led many to argue that it’s not truly
        decentralized.
      </Paragraph>
      <h5>Monetary policy</h5>
      <Paragraph>
        Ripple is a not-mineable, all the tokens were created when the
        blockchain was launched. Ripple currently controls over 50% of all
        tokens, giving the company a potential control over XRP market value.
      </Paragraph>
      <SubChapterTitle>IOTA (IOT)</SubChapterTitle>
      <Paragraph>
        IOTA is a cryptocurrencies focused on IoT (micro) payments. The demand
        of micropayments is growing together with the explosion of IoT and
        Blockchain like Bitcoin are currently far away from enabling instant and
        (almost) free transactions that requires by this market. IOTA does not
        uses a traditional blockchain, is built over a distributed ledger
        technology (tangle).Transactions are free and there are no miners, and
        no more blocks (see tangle in chapter 1).
      </Paragraph>
    </Page>
  </PageTemplate>
);
