import React from 'react';
import {
  ChapterTitle,
  SubChapterTitle,
  Paragraph,
  Page,
  Important,
  Italic,
  Bold,
} from 'components';
import PageTemplate from 'templates/PageTemplate';

const BlockchainNetwork = () => (
  <PageTemplate>
    <Page>
      <ChapterTitle>Blockchain network</ChapterTitle>
      <Paragraph>
        One of the main purposes of a blockchain is to enable transactions
        between people around the world. To accomplish this, the ledger has to
        be deployed over a network.
      </Paragraph>
      <Important>
        A <Italic>network</Italic> is a group of machines that exchanges
        information. A machine connected to a network is called{' '}
        <Italic>node</Italic>.
      </Important>
      <SubChapterTitle>Nodes in a blockchain</SubChapterTitle>
      <Paragraph>
        In a blockchain, every machine connected to its network is a node. There
        are two types of nodes: <Italic>light-nodes</Italic> and{' '}
        <Italic>full-nodes</Italic>.
      </Paragraph>
      <Paragraph>
        A <Bold>full-node</Bold> downloads and stores locally a complete copy of
        the blockchain and check every transaction and every block against the
        blockchain rules. If a transaction or a block violates the rules, then
        it is always rejected, even if every other node on the network thinks
        that it is valid. A full node is independent and does not trust anybody:
        they follow the rules no matter what. Full nodes propagate new valid
        blocks around the network and ignore invalid ones. Running a full node
        is the most secure way to participate in a blockchain network, but can
        be quite uncomfortable since you have to download tens of gigabytes of
        data.
      </Paragraph>
      <Paragraph>
        A <Bold>light-node</Bold> on the other hand does not store the entire
        blockchain, but gets only the data it needs from a trusted party (a full
        node). A light node is the average normal user, it does not have the
        ability to independently verify the correctness of the data and does
        whatever the consensus says. Using a light node means you are delegating
        part of the trust to a third party (a trusted full node) in exchange for
        ease of use.
      </Paragraph>
      <Important>
        Since there is no central authority, a Blockchain need to have a way to
        reach an agreement over the correct state of the chain (i.e deciding
        what has and what hasn’t happened). Consensus holds the only possible
        truth about the state of the Blockchain. A transaction is valid if the
        consensus said it is valid. We will explore later in more detail how
        consensus is reached.
      </Important>
      <SubChapterTitle>Network models</SubChapterTitle>
      <Paragraph>
        Based on the structure of the network and the role of each node, it is
        possible to identify three network models:{' '}
        <Italic>centralized, decentralized and distributed</Italic>.
      </Paragraph>
      <ul>
        <li>
          <Bold>Centralized/decentralized network</Bold>
          <Paragraph>
            Centralization is a concept that can be applied to different
            resources in a system. We will focus on architecture, authority and
            logic.
          </Paragraph>
          <ul>
            <li>
              <Bold>architecturally centralization/decentralization</Bold>
              <Paragraph>
                An <Bold>architecturally centralized</Bold> network is an
                infrastructure with a central point of failure that when
                compromised, the whole system will stop working. A web
                application that communicates with a single server is an
                architecturally centralized system. In an{' '}
                <Bold>architecturally decentralized</Bold> network, all
                resources are moved from a central point to the nodes in the
                network. This means that an application is run by its
                participants and does not have a single infrastructural point of
                failure. To a make a decentralized system stop working you have
                to take down all the nodes (more than 10.000 for Bitcoin).
              </Paragraph>
              <Important>
                A blockchain is architecturally decentralized. There is no
                central point of failure.
              </Important>
            </li>
            <li>
              <Bold>Authority centralization/decentralization</Bold>
              <Paragraph>
                An <Bold>authority centralized</Bold> network is characterized
                by a central authority that is in control of data, operations
                and users. Facebook, Amazon, Google and banks are all authority
                centralized systems. The central authority defines all the
                rules, and has the power to enforce those rules on its users. An
                authority centralized system is not a trustless system since the
                central authority decides what is right and what is wrong. You
                have to trust the central authority to behave correctly. In an{' '}
                <Bold>authority decentralized</Bold> network there is no central
                point of authority and all nodes are considered equal. No one
                owns the network or have its control, no one can impede your
                actions or force censorship on you.
              </Paragraph>
              <Important>
                A blockchain is authority decentralized. No central authority is
                in control.
              </Important>
            </li>
            <li>
              <Bold>Logical centralization/decentralization</Bold>
              <Paragraph>
                In a <Bold>logically centralized</Bold> network there must be a
                single state in order for the network to work properly.
                Everybody must agree on the the same information, meaning that
                there is a single logical state over which all the participants
                agree. The classic example is a global central database where
                all the data are saved and kept consistent. Everybody gets the
                same data. A valid transaction change the logical state, and
                everybody have to agree on the new state. In a{' '}
                <Bold>logically decentralized</Bold> network there can be
                different copies of data and any node can modify its own copy
                without altering the normal functioning of the system.
              </Paragraph>
              <Important>
                A Blockchain is logically centralized. There is always a single
                state.
              </Important>
            </li>
          </ul>
        </li>
        <li>
          <Bold>Distributed network</Bold>
          <Paragraph>
            In a distributed network, data and computations are spread across
            multiple nodes. An authority centralized server is usually also
            distributed. Google, Facebook and Amazon are both centralized and
            distributed. They do not have just one giant server or database,
            they have several data-center spread across the world.
          </Paragraph>
          <Important>
            A blockchain is a distributed ledger. Each (full) node has a copy of
            the ledger.
          </Important>
        </li>
      </ul>
      <SubChapterTitle>Blockchain models</SubChapterTitle>
      <Important>
        A blockchain can be used in every scenario where it is required a
        logically centralized global state yet maintaining a distributed and
        decentralized nature.
      </Important>
      <Paragraph>
        A logically centralized state is fundamental for a blockchain, but it is
        not mandatory to be also authority decentralized. Depending on how
        authority is managed we obtain three different blockchain models:
        permissionless, permissioned and private.
      </Paragraph>
      <ul>
        <li>
          <Bold>Permissionless (open) Blockchain</Bold>
          <Important>
            A permissionless blockchain is the first example of a system that is
            both authority decentralized, architecturally decentralized, and
            logically centralized.
          </Important>
          <Paragraph>
            Decentralization is a very important aspect, since any attempt to
            centralization introduce a weakness in the system, exposing a
            potential point of failure. There is no single point of authority.
            Everyone can join the network (open) and there is no possibility to
            be excluded (censorship-resistance). A blockchain does not
            discriminate based on source, destination or content (neutral). Each
            node have equal rights and responsibilities. Everyone has the
            possibility to explore and verify each transaction (public and
            auditable). Usually, a permissionless blockchain is also open
            source, so the actual code is publicly available and can be accessed
            or checked by anyone. This allows everyone to check the code or to
            suggest improvements (free to innovate). This model reflects the
            idea of a trustless system, where you can use and trust the system
            without relying on a third party (i.e trust the system itself).
            Right now, most of the blockchain-based projects belong to this
            category.
          </Paragraph>
        </li>
        <li>
          <Bold>Permissioned and private</Bold>
          <Important>
            Permissioned and private Blockchains have an access control layer
            controlled by one or more authorities
          </Important>
          <Paragraph>
            The access layer is in charge of deciding who can read/write data on
            the blockchain as well as who can participate in the decision making
            process regarding the validity of the transactions. The system
            should be trusted only if those chosen actors are trusted. For
            government or institutions, permissioned or private blockchains are
            way more appealing, since they would allow them to maintain a form
            of control on the system.
          </Paragraph>
        </li>
      </ul>
    </Page>
  </PageTemplate>
);

export default BlockchainNetwork;
