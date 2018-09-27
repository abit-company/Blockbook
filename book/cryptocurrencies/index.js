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
import PageLayout from 'layouts/PageLayout';
import digitalCopy from './digital-copy.png';

export default () => (
  <PageLayout>
    <Page>
      <ChapterTitle>Cryptocurrencies - Introduction</ChapterTitle>
      <Paragraph>
        The possibilities created by distributed ledger technology like the
        blockchain led to its first and obvious application: value exchange. For
        the first time it has been possible to exchange value without the need
        of a trusted third party allowing financial transactions to be executed
        directly without the counterparty risk.
      </Paragraph>
      <Important>
        The counterparty risk is the risk that the other party won't hold up
        their end of the trade.
      </Important>
      <Paragraph>
        Cryptocurrencies intended as a medium of exchange were the first
        application to leverage the power of the blockchain technology creating
        an entire new paradigm in the world of payments. It is the first example
        of internet of value.
      </Paragraph>
      <SubChapterTitle>Internet of value</SubChapterTitle>
      <Paragraph>
        Internet is based on the TCP/IP protocol, where TCP stands for
        Transmission Control Protocol and IP for Internet Protocol. TCP/IP
        defines how data should be transmitted between two interconnected device
        over the internet. Thanks to this protocol we have been able to exchange
        data around the world for more than thirty years. When data is sent over
        the internet is always transferred as a copy. If we upload a picture on
        Instagram we are creating a digital copy that is indistinguishable from
        the original one, i.e we are actually duplicating the photo. A photo
        could be duplicated as many times as we want, it does not cause any
        problem to anyone.
      </Paragraph>
      <ImageWrapper label="Digital copy">{digitalCopy}</ImageWrapper>
      <Important>But what if we want to transfer value?</Important>
      <Paragraph>
        A model where digital entities could easily be duplicated clearly does
        not fit a scenario where real assets like money are transferred. Any
        real asset should not be duplicated when it is transferred because its
        value resides in its uniqueness. We don’t want to transfer money as a
        copy, otherwise we could be able to double spend it.
      </Paragraph>
      <Important>
        The double spending problem is a situation in which it exists more than
        one digital copy of something that is intended to be unique.
      </Important>
      <Paragraph>
        The most clear example is spending the same money in more than one
        transaction. But it is a problem that could be extended to any other
        scenario where entities should be unique, like digital voting. In a
        traditional system double spending is avoided by a central authority
        like a bank, that hold the role of central source of truth. If a user
        want to make an online payment he sends the payment info to a third
        party payment gateway like Paypal and the gateway handle all the
        interaction with the bank. The bank avoid double spending by properly
        updating the user’s account. DLT for the first time manage to solve the
        double spending problem relying entirely on itself and not on a third
        party. In a blockchain you can’t double spend because the network
        consensus wouldn’t allow it. One transaction would be approved and the
        other rejected depending on which is processed first.
      </Paragraph>
      <Important>
        The impossibility to double spend a digital resource creates a situation
        of digital scarcity.
      </Important>
      <Paragraph>
        Blockchains give us the possibility to remove third party in financial
        transactions, allowing users to transfer value directly between each
        other.
      </Paragraph>
      <Important>
        Blockchains have been described as a value-exchange protocol just like
        the TCP/IP is an information exchange protocol. Internet is to data what
        blockchain is to value.
      </Important>
    </Page>
  </PageLayout>
);
