import React from 'react';
import {
  Paragraph,
  Page,
  Important,
  ChapterTitle,
  SubChapterTitle,
  Address,
} from 'components';
import PageLayout from 'layouts/PageLayout';

export default () => (
  <PageLayout>
    <Page>
      <ChapterTitle>Addresses</ChapterTitle>
      <Paragraph>
        On a blockchain there are no accounts, but rather addresses. Addresses
        do not carry balances, they are just placeholders that represent a
        destination for a transaction. The purpose of an address is to enable
        transactions to (and from) an entity which is unique. You can have as
        many address as you want and you can share them without any security
        issue, just like it’s safe to share your public key.
      </Paragraph>
      <Important>
        Private keys produce public keys and public keys produces addresses
      </Important>
      <Paragraph>
        From a technical point of view, an address is the result of a
        mathematical operation that involve public-key cryptography and hashing.
      </Paragraph>
      <ol>
        <li>
          <Paragraph>
            First of all a random private key is generated. It is fundamental
            that the private key is generated from a true random number,
            otherwise this can became a critical vulnerability.
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            From the private key it is derived the corresponding public key. As
            we already said this computation can be done very easily. But we can
            assume that computing the private key of a given public key is
            impossible.
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            The public key is passed through a series of cryptographic
            algorithms (different type of hash functions) to obtain the
            blockchain address. The final result looks like this{' '}
            <Address>3GaR1AXseWNnLhishxnRGr3GZMfhg6dfvj</Address> (Bitcoin
            address) or this{' '}
            <Address>0x8e4884a8F48e524377CCA3517b24700234ECfb27</Address>{' '}
            (Ethereum address)
          </Paragraph>
        </li>
      </ol>
      <SubChapterTitle>Where are my cryptocurrencies?</SubChapterTitle>
      <Paragraph>
        Since we have said that addresses do not carry balance, where are the
        “coins” stored? Actually nowhere. You should always remember that a
        blockchain is just a list of transactions, there is no concept of coins
        as a discrete item that must be stored somewhere. Coins are just units
        of account (ledger entries) and the “balance” of an address is a
        calculation made traversing all the transactions that involve that
        address. This concept is not as strange as it looks at first. In our
        monetary system around 90% of all money exist just as records of
        transactions.
      </Paragraph>
      <SubChapterTitle>Multisignature address</SubChapterTitle>
      <Paragraph>
        Multisignature (multisig) refers to an address that is associated with
        more that one private key. It is generally used to divide up
        responsibility or to share addresses, since a transaction to be
        considered valid requires all the keys. Multisignature addresses are
        widely used in organizations to limit the risks involved by managing
        large amount of money by not giving a single person all the control.
        Usually multisignature addresses are in the form of m-of-n addresses,
        where at least m out of n total owners are required in order to make a
        transaction. For example a multisig address could be assigned to 10
        person but requiring at least 7 person to move the funds. In this case
        nobody could run away with the money and also the physical risk of being
        kidnapped is mitigated.
      </Paragraph>
    </Page>
  </PageLayout>
);
