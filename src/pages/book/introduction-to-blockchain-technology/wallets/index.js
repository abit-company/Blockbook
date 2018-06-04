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
import PageLayout from 'layouts/PageLayout';
import paperWallet from './paper-wallet.png';
import softwareWallet from './exodus-wallet.png';
import hardwareWallet from './ledger.png';

export default () => (
  <PageLayout>
    <Page>
      <ChapterTitle>Wallets</ChapterTitle>
      <Paragraph>
        Addresses are usually managed using specific tools called wallets.
        Unlike traditional wallets, they are not used to store money.
      </Paragraph>
      <Important>
        A wallet only stores the public and private keys of an address, which
        can be seen as an approximation of an account. The corresponding data is
        always stored on the blockchain. You can never lose your “coins”, you
        can only lose the private keys that give you access to those “coins”.
      </Important>
      <Paragraph>
        Usually wallets also provide a user interface to track the balance of
        cryptocurrency holdings and automate certain functions, such as signing
        the transactions for you or suggesting the transaction fees. There are
        three main types of wallets: software, hardware or paper wallets.
        Moreover, depending of the environment in which those wallets operates
        it is possible to make another distinction between cold storage and hot
        storage wallets.
      </Paragraph>
      <SubChapterTitle>Hot storage vs cold storage</SubChapterTitle>
      <Important>
        An hot storage wallet is a wallet that is connected in some way to the
        internet. In a hot storage the private keys have been created or are
        stored on a machine that is connected to internet.
      </Important>
      <Paragraph>In reverse</Paragraph>
      <Important>
        Cold storage refers to a wallet whose private keys have never been on a
        machine that is connected to internet.
      </Important>
      <Paragraph>
        A cold storage solution is way more secure. Hackers cannot steal digital
        assets that are not connected to the internet.
      </Paragraph>
      <SubChapterTitle>Paper wallets</SubChapterTitle>
      <Paragraph>
        A paper wallet is the simplest possible cold storage wallet, since it is
        basically a public and private key printed together on a piece of paper
        (or any other material). The security of a paper wallet is directly
        linked to the safety of the place the paper is stored.{' '}
      </Paragraph>
      <ImageWrapper label="Paper wallet, generated with www.bitaddress.org">
        {paperWallet}
      </ImageWrapper>
      <SubChapterTitle>Software wallets</SubChapterTitle>
      <Paragraph>
        A software wallet is an application that can be installed on a computer
        or a phone. The private key are encoded with a password and stored on
        the machine. Software wallets are easy to use thanks to their accessible
        user interface. However if your machine is compromised your funds are in
        danger.
      </Paragraph>
      <ImageWrapper label="Exodus software wallet">
        {softwareWallet}
      </ImageWrapper>
      <SubChapterTitle>Hardware wallet</SubChapterTitle>
      <Paragraph>
        An hardware wallet stores the private keys in a secure hardware device.
        These devices are specifically built for the the purpose of storing
        private keys and making transactions in the most secure way possible.
        They have major advantages over standard software wallets or paper
        wallets: private keys are stored in a protected area of a
        microcontroller, and cannot be transferred out of the device.
        Transaction are signed inside the device and even if the wallet is
        connected to a compromised machine the private keys are safe.
      </Paragraph>
      <ImageWrapper label="Ledger nano s hardware wallet">
        {hardwareWallet}
      </ImageWrapper>
      <SubChapterTitle>Backups and HD wallets</SubChapterTitle>
      <Paragraph>
        Usually the first time a wallet is used it gives you a list of words to
        write down. This list, called passphrase, allows you to restore your
        wallet, i.e regain access to your address. Why is it possible to restore
        a wallet using a passphrase? Are the private keys stored somewhere else?
        No, this would be a terrible unsafe practice. In HD (Hierarchical
        Deterministic) wallets the passphrase is the seed from which the the
        private keys are generated. The words that makes up the passphrase
        represent randomness. These wallets implement a system for deriving keys
        from a single starting point known as seed (specified in BIP 32 and BIP
        39, Bitcoin Improvement Proposal). The seed allows a user to easily
        backup and restore a wallet without needing any other information. If
        your computer, hard disk, or hardware wallet is destroyed you can easily
        restore your private keys in another device.
      </Paragraph>
    </Page>
  </PageLayout>
);
