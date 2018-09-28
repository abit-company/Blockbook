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
// import digitalCurrencies from './digital-currencies-crypto.png';

const CryptocurrenciesOverview = () => (
  <Page>
    <ChapterTitle>Cryptocurrencies overview</ChapterTitle>
    <Paragraph>
      Cryptocurrencies can be seen as subset of digital currencies. Every
      cryptocurrency is a digital currency, but not every digital currency is a
      cryptocurrency.
    </Paragraph>
    {/* <ImageWrapper label="Digital currencies and cryptocurrencies">
        {digitalCurrencies}
      </ImageWrapper> */}
    <Important>
      With the term cryptocurrencies we refer to all the digital currencies
      based on Blockchain technology (or distributed ledgers, the underlying
      concept is the same). Cryptocurrencies as opposed to fiat money are not
      legal tender and are not backed or managed by any institution.
    </Important>
    <Paragraph>
      For the first time there is a way for anyone to create money without a
      central authority. Cryptocurrencies have properties similar to commodities
      (you own the money) but they can be traded like digital currencies.
    </Paragraph>
    <SubChapterTitle>Coins and tokens</SubChapterTitle>
    <Paragraph>
      The term <Italic>cryptocurrency</Italic> is quite general and it is
      sometimes interchanged with other terms like <Italic>coin</Italic> or{' '}
      <Italic>token</Italic>. Both terms are used to identify a single unit of
      account of a particular cryptocurrency. A <Italic>Coin </Italic>
      primary purpose is to act as a medium of exchange (i.e used as payment).
      <Italic>Token</Italic> is used to identify a cryptocurrency that represent
      a particular asset or utility (e.g gain access to some service) or that it
      is built on top of a third party blockchain (e.g cryptocurrencies built on
      top of Ethereum are usually referred as token). However a lot of
      cryptocurrencies could fit in both case resulting in a difficult
      classifications. We are not going to follow a strict terms division.
    </Paragraph>
    <SubChapterTitle>Key characteristic</SubChapterTitle>
    <Paragraph>
      A cryptocurrency inherits all the characteristic of its underlying
      Blockchain. Depending on how the blockchain is designed it is possible to
      build cryptocurrencies focused on performance, privacy, decentralization
      or any other characteristic. Most of the cryptocurrencies however share a
      set of common characteristics.
    </Paragraph>
    <ul>
      <li>
        <Bold>Digital.</Bold> All cryptocurrencies exist only in a digital form
        as units of account in a distributed ledger. There is no physical
        equivalent of a cryptocurrency.
      </li>
      <li>
        <Bold>Trustless.</Bold> With digital currencies you don’t have to trust
        a person, a commodity or a central institution in order to make
        transactions. Trust is moved from a central authority to distributed
        consensus (following a cryptoeconomics model).
      </li>
      <li>
        <Bold>Global.</Bold> Cryptocurrencies are not subjected to any physical
        or political boundary. It is enough to have an internet connection to
        make a transaction.
      </li>
      <li>
        <Bold>Secure.</Bold> Ownership of cryptocurrencies can be proved
        exclusively cryptographically. It doesn't matter if you are a human or a
        machine, cryptocurrencies belongs to those who own the private keys. A
        transaction can only be issued if an actor is able prove the ownership
        of the keys.
      </li>
      <li>
        <Bold>Immutable.</Bold> Once a transaction is confirmed and added to the
        blockchain no one can reverse or delete it.
      </li>
      <li>
        <Bold>Consensus-based.</Bold> In a cryptocurrency, the rule set is
        programmed into the Blockchain consensus which governs the decentralized
        network. Consensus is in charge of deciding if a transaction is valid or
        not and defines the monetary policy of a cryptocurrency.
      </li>
      <li>
        <Bold>Open.</Bold> In a cryptocurrency there is (usually) no access
        control layer and no central authority in charge of deciding what you
        can do. Everyone is free to innovate.
      </li>
      <li>
        <Bold>Neutral.</Bold> A cryptocurrency does not discriminate based on
        the sender, ther receiver or the object of the transaction. It is
        censorship-free. You can transfer 1$ equivalent of cryptocurrency or 100
        millions dollars to anyone, the Blockchain does not care.
      </li>
    </ul>
    <SubChapterTitle>Monetary policies</SubChapterTitle>
    <Important>
      <Italic />
      In cryptocurrencies the monetary policy can be see as the process that
      governs the <Italic>size and rate of growth</Italic> of the money supply
      and its <Italic>distribution model</Italic>. The monetary policy is
      enforced by the network consensus.
    </Important>
    <h5>Size and Rate of growth</h5>
    <Paragraph>
      Every cryptocurrency has a rate of growth that is defined mathematically.
      It is possible to know how many coins exist right now and how many coins
      will exist in ten years.
    </Paragraph>
    <ul>
      <li>
        <Bold>Total supply:</Bold> total amount of coins which has already been
        generated.
      </li>
      <li>
        <Bold>spendable supply (circulating supply):</Bold> the amount of coins
        in circulation that could potentially be traded. Spendable supply is
        less or equal to the total supply. The main scenarios where the
        spendable supply is inferior to the total supply are:
        <ul>
          <li>
            Someone has lost the private keys of an address locking up forever
            those coins.
          </li>
          <li>
            The creator of a cryptocurrency has locked part of the coins (that
            could still be released subsequently).
          </li>
        </ul>
        Coins that aren’t spendable should not influence the market cap of a
        cryptocurrency. (the market cap is calculated by multiplying the
        spendable supply for the price of the single coin).
      </li>
      <li>
        <Bold>Maximum supply:</Bold>
        the amount of coin that will ever exist for that particular
        cryptocurrency. For example, Bitcoins max supply is 21 million BTC,
        Litecoin max supply is 84 million LTC. This number is encoded in the
        Blockchain and cannot be changed by anyone (an hard fork is required).
        Depending on whether or not a cryptocurrency has a maximum supply a
        cryptocurrency is said to have:
        <ul>
          <li>
            <Bold>Capped supply:</Bold> the number to coins that will ever
            exists is fixed and known in advance.
          </li>
          <li>
            <Bold>Uncapped supply:</Bold> there is no limit on the number of
            coins that will exist (e.g a cryptocurrency that increase the total
            supply of 1% every year). A cryptocurrency could start with an
            uncapped supply and then set a limit in the future.
          </li>
        </ul>
      </li>
    </ul>
    <h5>Distribution model</h5>
    <Paragraph>
      Cryptocurrencies can be distributed in two ways: via mining or via direct
      sale. Depending on this we could identify four categories:{' '}
      <Italic>minable, non-minable, mintable and pre-mined</Italic>.
      <ul>
        <li>
          In <Bold>Mineable</Bold> cryptocurrencies new coins are created every
          time a miner successfully add a new block to the blockchain.
          Distributing coins through mining enforce a predictable and
          decentralized model while giving economics incentives to the miners to
          behave correctly.
        </li>
        <li>
          In <Bold>Non-mineable </Bold>
          cryptocurrencies all the coins are generated when the blockchain is
          initialized and then sold to people. This is usually the model used in
          ICOs.
        </li>
        <li>
          In <Bold>Mintable</Bold> cryptocurrencies the owner can create new
          coins at any moment.
        </li>
        <li>
          <Bold>Pre-mined</Bold> blockchains are minable blockchains where a
          percentage of the blockchain is mined before being traded on the open
          market.
        </li>
      </ul>
    </Paragraph>
  </Page>
);

export default CryptocurrenciesOverview;
