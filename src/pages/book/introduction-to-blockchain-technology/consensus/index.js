import React from 'react';
import {
  ChapterTitle,
  SubChapterTitle,
  Paragraph,
  Page,
  Important,
  Italic,
  Bold,
  ImageWrapper,
} from 'components';
import PageTemplate from 'templates/PageTemplate';
// import consensus from './consensus.png';

const Consensus = () => (
  <PageTemplate>
    <Page>
      <ChapterTitle>Consensus</ChapterTitle>
      <Paragraph>
        Computers and softwares are far from being predictable systems, they
        could crash, get hacked, behave badly on purpose or even behave
        randomly. When we connect computers together over a network (like the
        Internet) the uncertainty of the final system grow exponentially. In a
        Blockchain there could be millions of nodes that work independently and
        it is not possible to predict how any of these node will behave.
      </Paragraph>
      <Important>
        In a permissionless Blockchain no actor should be trusted.
      </Important>
      <Paragraph>
        If it is not possible to trust any node, how could the network agree on
        single state? Why should a node accept a block from another node? Who is
        in charge of deciding what is right and what is wrong? Who enforce the
        rules? Who decide if a transaction is valid? Despite all this
        uncertainty a Blockchain must reach a single state.
      </Paragraph>
      <Important>
        Eventually the network must agree on a single state.
      </Important>
      <Paragraph>
        A Blockchain is based on (mathematical) rules, but has no rulers. The
        network is in charge of deciding what is right and what is wrong through
        a process called consensus.
      </Paragraph>
      <Important>
        Consensus is a general agreement among the members of a given group (In
        this case the Blockchain nodes), each of which has a portion of the
        decision-power. In a Blockchain consensus is the agreement over what has
        and hasn’t happened. Consensus holds the only possible truth about the
        state of the Blockchain.
      </Important>
      {/* <ImageWrapper label="Blockchain and consesus">{consensus}</ImageWrapper> */}
      <Paragraph>
        A Blockchain uses mathematics, economics and game theory to incentivize
        all actors to reach a an agreement over a single state. However reaching
        consensus in distributed and decentralized system remain a very complex
        problem and the reason is well explained in the Byzantine generals’
        problem.
      </Paragraph>
      <SubChapterTitle>Byzantine Generals' Problem</SubChapterTitle>
      <Paragraph>
        From Wikipedia:{' '}
        <cite>
          The Byzantine Generals Problem is well known problem in distributed
          computing. It is an agreement problem in which a group of generals,
          each commanding a portion of the Byzantine army, encircle a city.
          These generals wish to formulate a plan for attacking the city. The
          generals must decide whether to attack or retreat. Some generals may
          prefer to attack, while others prefer to retreat. The important thing
          is that all generals eventually agree on a common decision, in order
          to avoid a situation in which only part of the generals attack and the
          other retreat. The problem is complicated by the presence of
          traitorous generals who may not only cast a vote for a suboptimal
          strategy, they may do so selectively. For instance, if nine generals
          are voting, four of whom support attacking while four others are in
          favor of retreat, the ninth general may send a vote of retreat to
          those generals in favor of retreat, and a vote of attack to the rest.
          Those who received a retreat vote from the ninth general will retreat,
          while the rest will attack. The problem is complicated further by the
          generals being physically separated and having to send their votes via
          messengers who may fail to deliver votes or may forge false votes.
        </cite>
      </Paragraph>
      <Paragraph>
        This situation seems to fit perfectly the scenario in which a Blockchain
        operates.
      </Paragraph>
      <Important>
        Generals can be likened to nodes, traitors can be likened to malicious
        (Byzantine) nodes, and the messengers can be the communication channel
        between the nodes.
      </Important>
      <Paragraph>
        The Blockchain must reach distributed consensus even in a scenario like
        the one described above (i.e must be Byzantine fault tolerant) and
        different algorithms have been designed for solving this problem. The
        two most used family of algorithms are the Proof-of-Work (PoW) and the
        Proof-of-stake (PoS) each with its own variants. The nodes that actively
        participate in the consensus process are called miners and they perform
        a process called mining.
      </Paragraph>
    </Page>
  </PageTemplate>
);

export default Consensus;
