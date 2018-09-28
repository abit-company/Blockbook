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
import stateTransition from './state-transition.png';
import transaction from './transaction.png';
import confirmations from './confirmations.png';

export default () => (
  <PageLayout>
    <Page>
      <ChapterTitle>Transactions</ChapterTitle>
      <Paragraph>
        Now that we have a more clear idea about the main components of a
        blockchain, we are ready to (finally) make our first transaction.
      </Paragraph>
      <Important>
        In general, a (valid) transaction is everything that writes data on the
        blockchain.
      </Important>
      <Paragraph>
        A valid transaction imply a state change in the blockchain. As we have
        explained before a blockchain is logically centralized, i.e there must a
        single state on which all the nodes agree on. A valid transaction
        generate a new state following the rules enforced by the network. These
        rules represent a contracts between parties that every transaction must
        follow. There could be monetary transactions, such as sending Bitcoin,
        or other type of transactions that may involve different type of assets,
        like contracts, data or real word assets.
      </Paragraph>
      <SubChapterTitle>Deterministic transactions</SubChapterTitle>
      <Paragraph>
        A transactions is either valid, which generate a state transition, or
        invalid, which leave the state unchanged. A transaction is valid if it
        respects the rules defined by the network.
      </Paragraph>
      <Important>
        A transaction is either valid and changes the state of the blockchain or
        invalid and leaves the blockchain in its current state (i.e. atomic
        operation).
      </Important>
      <ImageWrapper label="A valid transaction change the state of the blockchain">
        {stateTransition}
      </ImageWrapper>
      <Paragraph>
        It is not possible for a valid transaction to be rejected, or to
        generate an intermediate state.
      </Paragraph>
      <Important>A transaction is predictable.</Important>
      <Paragraph>
        If you are using a service like a bank or PayPal a transaction can be
        reversed or canceled (quite convenient sometimes, but this model is far
        from immutable and open up to a wide range of scenarios where the
        outcomes are not predictable). In a blockchain if you create a valid
        transaction it not possible for anybody to delete, reverse or change it.
        The transaction will be executed and it will change the state of the
        blockchain, everybody knows for sure what will happen. You could add
        conditions to your transaction as well, for example deciding to confirm
        a payment only after specific conditions are met, otherwise cancel it.
        If the conditions are met you and the other party involved in the
        transaction will know for sure what will happen. Nobody can change the
        outcome.
      </Paragraph>
      <SubChapterTitle>Creating a transaction</SubChapterTitle>
      <Paragraph>
        The basic requirement for creating a transaction on a blockchain (and in
        any other scenario) is that you can prove you actually own the object of
        the transaction. If you want to transfer the ownership of some Bitcoins
        you need to prove that you own those Bitcoins in the first place. In a
        complete digital system this is possible thanks to digital signatures.
      </Paragraph>
      <Important>
        Every transaction is digitally signed with the same private key that has
        been used to create the address linked to the object of the transaction.
      </Important>
      <Paragraph>The digital signature enforce that:</Paragraph>
      <ul>
        <li>
          <Paragraph>
            The address belongs to the user (a person, a machine or an
            institution) that has created the transaction, it is associated with
            the object the user want to transfer and and this object exist (if a
            user want to transfer one Bitcoin he need to have the private keys
            of an address that have at least one Bitcoin associated to that
            address, the transaction is signed with that private key) (<Bold>
              authentication
            </Bold>).
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            The transaction has not been modified after the signature (<Bold>
              integrity
            </Bold>).
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            The owner of the private key (used in the transaction) could not
            deny having sent it (<Bold>non-repudiation</Bold>).
          </Paragraph>
        </li>
      </ul>
      <ImageWrapper label="Transaction overview">{transaction}</ImageWrapper>
      <SubChapterTitle>Confirmations</SubChapterTitle>
      <Paragraph>
        Every time a transaction is created it is broadcasted to the network to
        be validated and added to the blockchain.
      </Paragraph>
      <Important>
        Transactions are bundled together into blocks. Blocks are appended to
        the blockchain.
      </Important>
      <Paragraph>
        Every transaction need to pass through a process of validation before
        being included in the blockchain. Before being validated a transaction
        is said to be unconfirmed. Once a transaction is included into a block
        it has one confirmation. When the next block is mined the same
        transaction has 2 confirmation and so on.
      </Paragraph>
      <Important>
        Confirmations are the number of blocks added to to blockchain starting
        from the first block a transaction is included in.
      </Important>
      <Paragraph>
        For a couple of reasons (that we will explain later) just one
        confirmation is usually not enough to consider the transaction
        immutable. In Bitcoin a transaction is considered immutable after six
        confirmation (around 1 hour). In the Ethereum blockchain is usually
        recommended to wait 12 confirmation (3 minutes). You could also wait
        just 1 confirmation for small amount, but for relevant amount it is
        better to wait. After reaching enough confirmations a transaction can’t
        be reversed by anybody.
      </Paragraph>
      <ImageWrapper label="Confirmations">{confirmations}</ImageWrapper>
      <SubChapterTitle>Transaction fee</SubChapterTitle>
      <Paragraph>Usually a transaction includes a fee.</Paragraph>
      <Important>
        The transaction fee, is the difference between the amount sent and the
        amount received.
      </Important>
      <Paragraph>
        The transaction fee is decided by the sender, it could be zero or more
        and it is not related to the amount being transferred. The fee usually
        influences the time a transaction required to be confirmed and it is
        used to reward the miners.
      </Paragraph>
    </Page>
  </PageLayout>
);
