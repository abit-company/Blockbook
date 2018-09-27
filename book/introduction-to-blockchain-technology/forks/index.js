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
  Table,
  Th,
  Tr,
  Td,
  TableWrapper,
} from 'components';
import PageLayout from 'layouts/PageLayout';
import forkTree from './fork-tree.png';
import regularFork from './regular-fork.png';
import hardForkRules from './hard-fork-rules.png';
import softForkRules from './soft-fork-rules.png';
import longestChain from './longest-chain.png';
import chainSplit from './chain-split.png';

export default () => (
  <PageLayout>
    <Page>
      <ChapterTitle>Forks</ChapterTitle>
      <Paragraph>
        A fork is a situation in which one of the following conditions is met:
      </Paragraph>
      <Important>
        <ul>
          <li>
            Different nodes have different opinion about the correct history of
            transactions. In this case a blockchain splits into two separate
            chains temporarily (<Bold>regular fork</Bold>) or permanently (<Bold
            >
              hard fork with chain split
            </Bold>).
          </li>
          <li>
            Different nodes follow different rules yet sharing the same history
            of transactions (<Bold>soft fork</Bold>).
          </li>
        </ul>
      </Important>
      <Paragraph>
        Regular forks do not change the consensus rules. Soft fork and hard fork
        on the contrary imply a change in the rule set. If the rules became less
        stringent (not backward compatible) is an hard fork. If the rules became
        more stringent (backward compatible) is a soft fork.
      </Paragraph>
      <ImageWrapper label="Normal fork, soft fork, hard fork">
        {forkTree}
      </ImageWrapper>
      <Paragraph>
        To quote Andreas Antonopoulos:
        <cite>
          if you run a vegetarian only restaurant and you change it to be an
          only-vegan restaurant then you are soft forking it. if you change it
          to include meat you are hard forking it.
        </cite>
      </Paragraph>
      <SubChapterTitle>Regular fork</SubChapterTitle>
      <Important>
        A regular fork is a temporary divergence in the state of a blockchain
        that occurs when two or more miners create a block at (nearly) the same
        time. Propagation time and network latencies cause the blockchain to
        temporary split into two different chains.
      </Important>
      <Paragraph>
        Practically speaking during a regular fork the blockchain temporarily
        diverges into two separate chains and every chain is considered valid by
        some miners. If two miners, miner A which in the USA and miner B which
        is in China, found a new block in a time window that is enough short to
        not allow the new block to be broadcasted to all the nodes in the
        network, there is a regular fork. All the miners close to miner A will
        acknowledge the fact the miner A find the new block and add this block
        to their blockchain, the miners close to miner B acknowledge the fact
        that miner B found the new block and add this block to their blockchain.
      </Paragraph>
      <ImageWrapper label="Regular fork">{regularFork}</ImageWrapper>
      <Paragraph>
        Since there is no central authority to solve the ambiguity the chain
        remain splitted until the next block is found. In case of a conflict the
        nodes usually follow the longest chain. When the new block is found one
        of the two chain became the longest chain and all the nodes on the other
        chain merge to the longest chain.
      </Paragraph>
      <ImageWrapper label="Longest chain">{longestChain}</ImageWrapper>
      <Paragraph>
        At T4 the chain is splitted. At T5 the miners on chain A find a new
        block and chain A became the longest chain. Nodes that have acknowledged
        miner’s B block realized that they are mining on the wrong chain and
        merge to chain A. That is the other reason is usually better to wait
        more than one confirmation
      </Paragraph>
      <SubChapterTitle>Soft fork</SubChapterTitle>
      <Paragraph>
        A soft fork is a change in the consensus rules of a blockchain where old
        rules are still valid. It is not mandatory for nodes to upgrade to the
        new rules. The blocks created with the new rules are recognized as valid
        by both the nodes that follow to the new rules and by the ones that
        follow the old rules.
      </Paragraph>
      <Important>
        A soft fork is a backward-compatible change in the rule set. Nodes that
        follows the old consensus rules will accept blocks created by nodes that
        follow the new rules. New rules are a subset of old rules.
      </Important>
      <ImageWrapper label="Soft fork rules set">{softForkRules}</ImageWrapper>
      <Paragraph>
        A soft fork for example is reducing the size of a block from 2MB to 1MB.
        Soft forks are usually an optimization of the existing protocol.
      </Paragraph>
      <h5>SegWit</h5>
      <Paragraph>
        SegWit (segregated witnesses) is an example of soft fork proposed by the
        Bitcoin core team. Right now Bitcoin consensus rules force a block to be
        less than 1MB. Any block that is greater than 1MB is rejected by the
        nodes. SegWit expanded the block size while remaining a soft fork.
        Without going into technical details, SegWit changed how the block size
        is calculated by giving a weight to each byte. A normal byte is assigned
        weight 4, while the bytes that compose the digital signature (the so
        called witness) are given weight 1. This mean that the actual space of a
        block goes from 1MB to around 4MB without increasing the nominal size,
        thus remaining a soft fork. SegWit increased the number of transactions
        that can fit in a blocks and enable the so called transaction
        malleability, which is a requirement to create off chain transactions
        (e.g Lightning Network, we will explore that later).
      </Paragraph>
      <SubChapterTitle>Hard fork</SubChapterTitle>
      <Important>
        An hard fork is a change to the consensus rules that is not backwards
        compatible, making previously invalid blocks valid.
      </Important>
      <ImageWrapper label="Hard fork rules set">{hardForkRules}</ImageWrapper>
      <Paragraph>
        After an hard fork, on the network will start appearing blocks that were
        previously considered invalid and the nodes that do not update won’t be
        able to recognise those those blocks as valid. If all nodes update to
        the new consensus rules then there is no chain split, otherwise, If some
        node decide not to update it will cause a divergence in the state of the
        blockchain that will result in a splits into two separate chains.
      </Paragraph>
      <Paragraph>
        In a hard fork a <Bold>chain split</Bold> occurs when there is an
        unresolvable break within the community and one part decides to change.
        The group that disagrees with the current protocol forks its own version
        of the Blockchain and every member who believe in this fork upgrade
        their systems, leaving the previous blockchain.
      </Paragraph>
      <ImageWrapper label="Hard fork with chain split">
        {chainSplit}
      </ImageWrapper>
      <Paragraph>
        There could be many reason that lead to an hard fork:
      </Paragraph>
      <ul>
        <li>
          correct security risk that require an important change in the
          consensus rules.
        </li>
        <li>add new functionalities.</li>
        <li>
          different opinion in the community (es between miners, developers or
          users).
        </li>
        <li>change the history of transactions (e.g revert transactions).</li>
      </ul>
      <h5>Ethereum hard fork</h5>
      <Paragraph>
        In July 2016 a digital smart contract (TheDAO) that was running on the
        Ethereum blockchain was hacked and the attacker managed to steal around
        3.6 million Ether (60 million USD at the time). Part of the community
        decided to hard-fork and undo the attack while the other part did not
        want to invalidate the immutability of the blockchain. The result was an
        hard fork that created two blockchains: Ethereum (ETH, the forked
        blockchain) and Ethereum Classic (ETC, the original blockchain).
      </Paragraph>
      <h5>Bitcoin Cash hard fork</h5>
      <Paragraph>
        Another example of disagreement in the community that lead to an hard
        fork is the creation of Bitcoin Cash, that was forked from Bitcoin. The
        disagreement was about block-size, since Bitcoin Cash was against segwit
        and wanted to increase block size.
      </Paragraph>
      <h5>Token “duplication”</h5>
      <Paragraph>
        One of the consequences of a chain split is that history is shared (i.e.
        all the transactions before the fork are shared).
      </Paragraph>
      <Important>
        In case of a chain split history is shared between the two blockchains.
      </Important>
      <Paragraph>
        After a chain split a user will control the same amount of token on both
        blockchains (if you own your private keys): if you had 1 ETH before the
        fork, after the fork you should have had 1 ETC and 1 ETH, the same with
        Bitcoin and Bitcoin Cash.
      </Paragraph>
      <Paragraph>To recap:</Paragraph>
      <TableWrapper>
        <Table>
          <thead>
            <Tr>
              <Th>Regular fork</Th>
              <Th>Soft fork</Th>
              <Th>Hard fork</Th>
            </Tr>
          </thead>
          <tbody>
            <Tr>
              <Td>Chain split temporarily</Td>
              <Td>Chain do not split</Td>
              <Td>Chain could split</Td>
            </Tr>
            <Tr>
              <Td>No change in the rule set</Td>
              <Td>New rules are backward compatible</Td>
              <Td>New rules are not backward compatible</Td>
            </Tr>
          </tbody>
        </Table>
      </TableWrapper>
      <SubChapterTitle>Activating a fork</SubChapterTitle>
      <Paragraph>
        In a Blockchain there are no central authorities. In reverse there are
        different groups of people that do not always share the same vision:
        miners, developers, users, exchanges and merchant could have different
        opinions about how the project should evolve. If the miners want to make
        an update and users don’t like it they could threat the miners by saying
        that they would stop accepting the new blocks. If the developers and the
        users agree on an update but the miners don’t, they could threat them by
        saying they will not update to mine the new blocks. Exchanges could
        remove a certain token or merchants could stop supporting that
        Blockchain in their products. Each group has its own ideas, but none of
        them can do anything without the consensus of the other groups.
        Developers could not propose an update if they don’t have miners
        consensus or users consensus, the same for all the other actors
        involved. This is a classic game theory problem where an equilibrium
        must be found in order to maintain trust in the system. A situation in
        which those actors can’t reach a consensus could cause a loss of trust
        in the Blockchain, since no one like uncertainty when it deals with
        money.
      </Paragraph>
    </Page>
  </PageLayout>
);
