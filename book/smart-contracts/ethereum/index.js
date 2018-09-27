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

export default () => (
  <PageLayout>
    <Page>
      <ChapterTitle>Ethereum</ChapterTitle>
      <Paragraph>
        There are different Blockchains that support smart contracts (even
        Bitcoin support a basic smart contracts, like the one used in the
        Lightning Network) but right now the (smart-contracts) environment is
        dominated by Ethereum. Ethereum concept made its first appearance in a
        paper published in 2013 by the 19 years old Vitalik buterin. The idea
        behind Ethereum was to build a Blockchain that could be used to run
        general programs.
      </Paragraph>
      <Important>
        Ethereum is a global computer, where arbitrary programs (smart
        contracts) could be executed in a global and decentralized way, without
        any downtime or censorship.
      </Important>
      <SubChapterTitle>Technical overview and monetary policy</SubChapterTitle>
      <Paragraph>
        Ethereum is a Blockchain that it’s not specialized for any specific
        purpose but can be programmed to be used in different scenarios
        (generalized Blockchain). Ethereum smart contracts are{' '}
        <Italic>Turing complete</Italic>, which means they can perform any
        computation that can be done in any other programming language (like
        Java or Python).
      </Paragraph>
      <Paragraph>
        The blockchain is public, permissionless and uses a Proof-of-Work
        consensus algorithm, with a block time of 10-20 seconds. However it is
        planning to migrate to a Proof-of-Stake protocol called Casper in the
        near future.
      </Paragraph>
      <Paragraph>
        Ethereum uses an intrinsic currency called <Italic>Ether</Italic> (ETH).
        Currently there is no hard cap and the inflation rate is controlled by
        limiting the number of ETH that can be generated each year. There are
        different proposal for setting an hard cap in the the future. ETH can be
        splitted into wei, where 1 ETH = 10 ^18 wei.
      </Paragraph>
      <Important>
        ETH is used to pay for <Italic>GAS</Italic>, a unit of value that
        measures the amount of computation needed to perform an operation. for
        example computing a hash or sum two numbers have specific gas cost. Gas
        does not exists outside a transaction (there is no GAS token).
      </Important>
      <Paragraph>
        In Ethereum there is no concept of block-size but rather of GAS limit,
        that set a cap on the maximum computation per block.
      </Paragraph>
      <Important>
        <Bold>Gas price:</Bold> the number of Wei to be paid per unit of gas.
        Gas is purchased using ETH from the transaction creator’s account. The
        purchase happens at the predefined <Italic>price</Italic>, specified in
        the transaction. Transactions can specify the gas price they prefer,
        however miners are free to choose the transactions they want (usually
        trying to maximize the profit). A transaction with an higher gas price
        is more likely to be included first by the miners. If for example a
        transaction cost 10 gas and we decide to pay 100 wei for each gas, the
        total cost of the transaction is 1.000 (10 * 100) wei. If we set a gas
        price of 1000 wei per gas then the total cost of the transaction is
        10.000 (10 * 1000) wei. In the second case the miner is paid more for
        the same computation and thus it is more likely to prioritize that
        transaction.
      </Important>
      <Important>
        <Bold>Gas limit:</Bold> the maximum amount of gas that can be consumed
        in a transaction. If for example a transaction require 15 gas to be
        executed but we set a 10 gas limit that transaction will stop the
        execution when the limit is reached.
      </Important>
      <Paragraph>
        As well as remunerating the miners, Ethereum fees are necessary in order
        to block possible attacks or programming errors that could overload the
        Blockchain. Ethereum smart contract could perform arbitrarily complex
        computation and if for example a computation enters an endless loop
        during, the gas limit will stop the execution once the gas limit is
        reached.
      </Paragraph>
      <SubChapterTitle>Accounts and contracts</SubChapterTitle>
      <Paragraph>
        In Ethereum there are two types of accounts:{' '}
        <Bold>non-contract accounts</Bold> (normal accounts) and{' '}
        <Bold>contract accounts</Bold>. A normal account can receive and send
        transactions but it is not associated with any smart contract and it is
        usually controlled by a person. A contract account on the other hand
        store a program that it is activated when it receives a transaction and
        behave according to a specific program. A contract is isolated and keep
        track of its own variables.
      </Paragraph>
      <Important>
        A smart contract is an autonomous agent that lives on the blockchain at
        a specific address.
      </Important>
      <Paragraph>
        If a contract is deployed on the Ethereum network it will live forever
        on the blockchain (actually there is a way to destroy contracts but it
        is outside the scope of this introduction).
      </Paragraph>
      <SubChapterTitle>EVM</SubChapterTitle>
      <Paragraph>
        The Ethereum Virtual Machine (EVM) is the environment inside which a
        smart contract is executed. The EVM guarantees that every contract is
        executed in the same way on every node by providing an isolated and
        verified environment. The state of the EVM is saved on the blockchain.
      </Paragraph>
      <SubChapterTitle>ERC20 tokens</SubChapterTitle>

      <Paragraph>
        ERC stands for <Italic>Ethereum Request for Comment</Italic> . ‘20’ is
        unique identifier.
      </Paragraph>
      <Important>
        Tokens represent an asset that exist on top of a blockchain. The asset
        could be anything, from a simple medium of exchange to stocks ownership
        or rights to use a service.
      </Important>
      <Paragraph>The most used token standard is Ethereum ERC20.</Paragraph>
      <Important>
        The ERC20 (now evolved in ERC223) is the most widely used technical
        standard to develop tokens on the Ethereum Blockchain.
      </Important>
      <Paragraph>
        A ERC20 token is a smart contract that implements a specific interface
        that allows to predict how the token will behave in the Ethereum
        ecosystem. An ERC20 token has a couple of advantages. You don’t need to
        program your own blockchain or worry about mining, since it is all
        managed by Ethereum. ERC20 is not the only token standard. ERC721 is
        another standard popularized by the game CryptoKitties. The main
        difference is that while in ERC20 all the tokens are equal, ERC721 is
        specifically designed to represent unique digital entities (like the
        kitties in CryptoKitties).
      </Paragraph>
    </Page>
  </PageLayout>
);
