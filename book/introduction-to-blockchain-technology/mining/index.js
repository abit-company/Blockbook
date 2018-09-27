import React from 'react';
import {
  ChapterTitle,
  SubChapterTitle,
  Paragraph,
  Page,
  Important,
  Bold,
  ImageWrapper,
  Table,
  Th,
  Tr,
  Td,
  TableWrapper,
} from 'components';
import PageLayout from 'layouts/PageLayout';
import mining from './mining.png';
import newBlockValid from './new-block-valid.png';
import newBlockInvalid from './new-block-invalid.png';
import powMiningProcess from './pow-mining-process.png';
import honestMiners from './honest-miners.png';
import maliciousMiner from './malicius-miner.png';

export default () => (
  <PageLayout>
    <Page>
      <ChapterTitle>Mining</ChapterTitle>
      <Paragraph>
        Mining is a general concept and is not related to any particular
        Blockchain (even if a lot of people associate mining only with Bitcoin).
        It is more of an infrastructural component that allow a Blockchain to
        reach consensus.
      </Paragraph>
      <Important>
        Mining is the process through which transactions are grouped into blocks
        and added to the blockchain. Nodes that take part in the mining process
        are called miners.
      </Important>
      <Paragraph>
        For their job miners are usually rewarded depending on the Blockchain
        rules. A miner is in charge of:
      </Paragraph>
      <ul>
        <li>
          <Paragraph>
            <Bold>Choosing the transactions</Bold>. Usually a minier first pick
            up the transactions with higher fees in order to maximize their
            possible reward (this is the reason why transactions with higher
            fees take usually less time to be confirmed).
          </Paragraph>
        </li>
        <ImageWrapper inList label="Choosing transactions">
          {mining}
        </ImageWrapper>
        <li>
          <Paragraph>
            <Bold>Ordering and grouping the transactions into a block</Bold>. A
            miner verify that the transactions are valid (i.e check that the
            amount to transfer is actually available, check whether the
            transaction was correctly signed with the private key, check that
            the structure of the transaction respects the rules) and group them
            into a block. If a miner creates a block including a transaction
            that is invalid other nodes will reject it. It is not enough for a
            miner to say that a transaction or a block is valid, the other nodes
            must agree with him. Once a new block is created it is broadcasted
            across the network, waiting for other nodes to check the validity of
            the new block (and of all transactions inside it). Everybody
            verifies the work of everybody.
          </Paragraph>
        </li>
      </ul>
      <ImageWrapper label="New block is valid">{newBlockValid}</ImageWrapper>
      <ImageWrapper label="New block is invalid">
        {newBlockInvalid}
      </ImageWrapper>
      <SubChapterTitle>Proof of work (PoW)</SubChapterTitle>
      <Paragraph>
        Proof of work is protocol used to achieve distributed consensus. A proof
        of work is a piece of data which is computationally hard (not too hard
        otherwise no one would be able find it) to be created, but once created
        is easy for other node to verify its correctness. In a PoW-consensus a
        block is only valid if it contains a valid proof of work.
      </Paragraph>
      <Important>Proof-of-work is essentially one-CPU-one-vote.</Important>
      <Paragraph>
        <Bold>PoW mining</Bold>
      </Paragraph>
      <Paragraph>
        In PoW-mining nodes on the network compete to solve a complex
        mathematical problem (it is basically an inverse hashing with some
        constraints). Solving this problem is a random process with very low
        probability so that a miner must try all the possible combinations until
        it finds the right one (brute-force). The first miner to solve the
        problem has the right to create the next block and earn the reward. Once
        a new block is created (with a valid PoW) it is broadcasted to the
        network waiting for other nodes to verify its validity. It is very easy
        for the rest of the nodes to check if solution is correct. If the block
        is valid it is broadcasted, otherwise it is ignored.
      </Paragraph>
      <ImageWrapper label="PoW mining process">{powMiningProcess}</ImageWrapper>
      <ol>
        <li>
          <Paragraph>
            Transactions are created and broadcasted to all nodes.
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            Each miner choose the transactions and collects them into a block.
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            Each miner works on finding a valid proof-of-work for the block it
            created.
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            When a miner found a valid proof-of-work for the new block it has
            created, it broadcasts the block to the network.
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            All the nodes in the network verify whether or not the new block is
            valid.
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            If the block is valid it is added to the chain of the node.
          </Paragraph>
        </li>
      </ol>
      <h5>Reward</h5>
      <Paragraph>
        Miners are paid all the transaction fees in the block plus eventually
        the new coins created together with the block (block reward). Right now
        in Bitcoin for each new block are created 12.5 bitcoins which are given
        to the winning miner (which as mentioned before, is the one who first
        solved the proof of work). Usually the number of new coins created with
        each block decrease over time, since most of cryptocurrencies have a
        finite supply.
      </Paragraph>
      <Important>
        PoW protocol is fair: a miner that own 5% of the total network
        computational power is expected to win the right to create a new block
        (and earn the reward) 5% of the times.
      </Important>
      <h5>Hashrate</h5>
      <Paragraph>
        In PoW when we talk about computational power we refer to the hashrate,
        given that the problem to solve is an inverse hashing with some
        constraints.
      </Paragraph>
      <Important>
        Hashrate is the numbers of hashes computed per second (H/s).
      </Important>
      <Paragraph>
        The total hashrate, or network hashrate, is sum of all miners hashrate.
        The probability of a miner to win the the proof-of-work (i.e its voting
        power) is:
      </Paragraph>
      <Important>
        Probability to be the first miner to solve the proof-of-work = Miner
        hashrate / network hashrate
      </Important>
      <Paragraph>
        The hashrate depend on both the hashing algorithm and the machine used.
        In Bitcoin PoW, for example, a human has a hashrate of around 0.00003
        H/s (thanks to the reddit user C121 for the calculations). This means,
        that to calculate a single hash by hand would take around 9-10 hours. An
        ASIC miner (Application Specific Integrated Circuit, a machine designed
        only for mining) can compute more than 14TH/s (Tera Hash, a trillion
        hashes per second). The Bitcoin network hashrate is currently more than
        20 millions TH/s. Other PoW algorithm (for example the one used by
        Litecoin) are specifically designed not to give any speedup if mined
        with an ASIC (ASICs-resistant).
      </Paragraph>
      <h5>Difficulty</h5>
      <Paragraph>
        A valid proof-of-work have to meet a validity constraint called
        difficulty.
      </Paragraph>
      <Important>
        The difficulty is a relative measure that express how hard it is to find
        a valid PoW.
      </Important>
      <Paragraph>
        This value is adjusted periodically in relation to the network hashrate.
        For example in Bitcoin the difficulty is adjusted every 2016 blocks to
        keep the time needed to generate a new block (block-time) at (about) 10
        minutes. In Litecoin the block-time is 2.5 minutes.
      </Paragraph>
      <h5>Nonce</h5>
      <Paragraph>
        Nonce is a number used in PoW to vary the input of hash function, so
        that the resulting hash will fulfill a specific difficulty.
      </Paragraph>
      <h5>PoW Pros and cons</h5>
      <Paragraph>
        Proof-of-work main advantage is the guarantee of immutability. It is
        really difficult (practically impossible) to change transactions history
        after a specific number of confirmations.
      </Paragraph>
      <ImageWrapper label="Malicious miner">{maliciousMiner}</ImageWrapper>
      <ImageWrapper label="Honest miners">{honestMiners}</ImageWrapper>
      <Paragraph>
        If an attacker tries to tamper a transaction in block 103 the only way
        he could succeed is if he manages to recompute the proof of work for all
        the following blocks (103-109) before the other miners manage to mine
        block 110. An attacker need an incredible amount of power to do this,
        just for tampering a transaction that happened around 1 hour ago (In
        Bitcoin).
      </Paragraph>
      <Important>
        Changing a record in the blockchain imply recomputing the entire
        Proof-of-Work for all the blocks that follows the tampered block.
      </Important>
      <Paragraph>
        The more the attacker goes back in time the more difficult is to tamper
        a transaction. That is the reason why it is recommended to wait more
        than one confirmation (6 confirmation in Bitcoin) to assume the
        immutability of a transaction. Another point if favor of PoW is that is
        battle-tested, since it has been powering the consensus algorithms of
        the most popular Blockchains. Bitcoin for example has been under attack
        from its creation in 2009 without any success. Part of the community
        however don’t think that PoW is the best method to reach consensus and
        have made several claims against it. The most relevant are:
      </Paragraph>
      <ul>
        <li>
          <Paragraph>
            <Bold>Massive energy consumption</Bold>. Bitcoin, the largest
            project that uses PoW consume right now around 0.3% of the world
            electricity and it is not sustainable in the long run. Pro-PoW
            however say that the massive energy consumption is the key that make
            proof-of-work so difficult to attack. It is the enormous amount of
            computing power needed to validate the blockchain that guarantee the
            immutability. The computation power and the electricity is the
            actual proof of work.
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            <Bold>Miners waste computational power</Bold>. Anti PoW says that
            the computations are useless. Someone has proposed to adapt PoW to
            actually solve complex problems, like machine learning training or
            computational genomic. However It is not trivial to fit those kind
            of problems into a consensus protocol.
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            <Bold>Difficult to scale</Bold>
            . PoW, in particular in Bitcoin, is a huge bottleneck in the
            scalability of a system and this problem is blocking mainstream
            adoption. Pro-PoW reply that it is possible to scale without
            changing the consensus algorithm by adopting off-chains solutions or
            changing the block-size (we will see these later).
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            <Bold>It is vulnerable to a 51% attack.</Bold>
            If a miner reach 51% of network computational power then it would be
            (theoretically) able to create blocks faster than the all the
            remaining miners. A possible scenario is the malicious miner being
            able to reverse some of its own new transactions (double spend), or
            blocking the confirmation of new transactions (censor transactions).
            However If a miner can successfully perform a 51% attack it won’t be
            able to change old transactions, since it will have to recompute the
            PoW of all the blocks starting for the first change while other
            honest miners continue to mine the correct chain. An attack of this
            kind would end up wasting an incredible amount of resourcing. If
            anyone actually put together >51% of the computational power it
            would be far more profitable just to play by the rules.
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            <Bold>
              Geographical discrimination, Scale economies and centralization.
            </Bold>
            Right now most of the miners (especially considering Bitcoin) are
            concentrated in places where electricity is cheap and temperatures
            are low. Moreover Scale economies are also used to negotiate cheaper
            prices for for both electricity and mining machines. This is
            resulting in mining centralization.
          </Paragraph>
        </li>
      </ul>
      <SubChapterTitle>Proof of stake (PoS)</SubChapterTitle>
      <Paragraph>
        Proof of stake is another family of algorithms used achieve distributed
        consensus. The purpose of Proof of stake is the same as PoW, but the
        process is quite different. Unlike proof-of-Work, where the algorithm
        rewards miners who solve mathematical problems, in proof of stake, the
        creator of a new block is chosen in advance, depending on its wealth,
        also defined as stake.
      </Paragraph>
      <Important>Proof-of-stake is basically one-token-one-vote</Important>
      <h5>PoS mining (staking)</h5>
      <Paragraph>
        PoS-mining, instead of computational power, uses token holders. Users
        who own tokens can stake their tokens (staking means to temporarily
        place the tokens in a locked smart contract,  until staking process is
        over) and in exchange, confirm transactions and receive rewards based on
        the relative number of tokens held. The creator of the next block is
        chosen in advance depending on different parameters, usually a
        combinations of number of tokens (wealth), random selection or age (time
        that the token has been held).
      </Paragraph>
      <Important>
        PoS protocol is fair: a miner that own 5% of the total amount of tokens
        is expected to win the right to create a new block (and earn the reward)
        5% of the times.
      </Important>
      <Important>
        Voting power = miner stake / total stake of the network.
      </Important>
      <h5>PoS pros and cons</h5>
      <Paragraph>
        Compared to PoW, Proof-of-stake is more efficient since there is no need
        to perform complex computations for each new block. PoS supporters state
        that compared to PoW, PoS has some advantages:
      </Paragraph>
      <ul>
        <li>
          <Bold>Attacks are more expensive</Bold>. PoS-consensus is also
          theoretically vulnerable to a 51% attack. An attacker instead of 51%
          of the total hasrate will need 51% of the total stake. However if an
          attacker tries to buy 51% of the total tokens, the market will react
          by a fast price increase. Furthermore People with a lot of tokens
          would be less likely to attack the network, since an attack will
          probably destroy the value of that token.
        </li>
        <li>
          <Bold>Faster and energy saving</Bold>. In PoS there is no need to
          provide a proof-of-work. The direct consequence is that PoS-consensus
          is computationally easy, saving both time and energy. On the other
          hand, also the cost of rewriting the entire blockchain history is
          nothing compared to the massive cost of rewriting just the last hours
          in PoW. In PoW an attacker should at least commit mining machines and
          electricity, while in PoS mining cost is nearly zero.
        </li>
        <li>
          <Bold>Loyalty</Bold>. Miners are encouraged to stay on the same
          Blockchain. If they want to mine on another Blockchain they will need
          to change the token. In PoW if the coin you are mining is no longer
          profitable you could just change Blockchain.
        </li>
      </ul>
      <Paragraph>PoS has also some drawbacks:</Paragraph>
      <ul>
        <li>
          <Bold>Nothing at stake attack</Bold>. This is bit of a tricky concept
          and we are not going into the details. The basic idea is that it is
          theoretically possible to reverse transactions even with a small
          percentage of the total stake. This is a consequence of the fact that
          mining in PoS is free (In proof-of-work if you decide to mine on a
          chain you are committing electricity on which valid state of the
          blockchain you think it is valid). However solutions to this problem
          have already been presented.
        </li>
        <li>
          <Bold>Rich become richer</Bold>. In PoS a miner with more tokens is
          expected to win (and earn the reward) more often. To solve this
          problem different variations to to the protocol have been proposed.
        </li>
      </ul>
      <SubChapterTitle>PoW vs PoS</SubChapterTitle>
      <Paragraph>
        PoW and PoS are two different methods for reaching the same goal:
        distributed consensus. To recap:
      </Paragraph>
      <TableWrapper>
        <Table>
          <thead>
            <Tr>
              <Th />
              <Th>Proof-of-Work</Th>
              <Th>Proof-of-Stake</Th>
            </Tr>
          </thead>
          <tbody>
            <Tr>
              <Td>What is needed</Td>
              <Td>Computational power</Td>
              <Td>Stake (coins + some other parameter)</Td>
            </Tr>
            <Tr>
              <Td>who create a new block</Td>
              <Td>Random based on the computational power</Td>
              <Td>Chosen in advance based on the stake</Td>
            </Tr>
            <Tr>
              <Td>fair?</Td>
              <Td>yes</Td>
              <Td>yes</Td>
            </Tr>
            <Tr>
              <Td>Block time</Td>
              <Td>
                Variable, depending on the time needed to solve the
                proof-of-work
              </Td>
              <Td>Fixed</Td>
            </Tr>
            <Tr>
              <Td>Computational power</Td>
              <Td>Very high</Td>
              <Td>Very Low</Td>
            </Tr>
            <Tr>
              <Td>Miner rewards</Td>
              <Td>
                Transactions fees + Block reward depending on the consensus
                rules
              </Td>
              <Td>
                Transactions fees + Block reward depending on the consensus
                rules
              </Td>
            </Tr>
          </tbody>
        </Table>
      </TableWrapper>
      <SubChapterTitle>Other consensus algorithms</SubChapterTitle>
      <Paragraph>
        Pos and PoW are the two main protocols behind most of the consensus
        algorithms in the Blockchains. These protocols can be adapted to reach
        the requirements of each different Blockchain project (e.g be ASIC
        resistant in PoW, or changing the stake parameters in PoS).
      </Paragraph>
    </Page>
  </PageLayout>
);
