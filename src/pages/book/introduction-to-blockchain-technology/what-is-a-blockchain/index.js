import React from 'react';
import { Paragraph, Page, Important, ChapterTitle } from 'components';

const WhatIsABlockchain = () => (
  <Page>
    <ChapterTitle>What is a Blockchain</ChapterTitle>
    <Paragraph>
      It is possible to find many definitions in literature about Blockchain
      technology. Some of them are focused on its structure, others on the
      technologies behind it or the implications for businesses and society. All
      these aspect are equally important and contribute to give a exhaustive
      overview on this subject.
    </Paragraph>
    <Important>
      A Blockchain is a digital, decentralized and distributed ledger,
      structured as chain of records, called blocks, each being responsible of
      storing some kind of information (from transactions records to entire
      computer programs). New blocks can be added but old blocks cannot be
      removed or modified. Cryptography and consensus protocols enforce
      tamper-proof security and immutability. The result is a neutral, open and
      trustless system where our ability to use and trust this system does not
      depends of the intentions of any particular party or institution. A
      Blockchain is not just a payment infrastructure, a supply chain monitor or
      a digital identity manager, is much more. It is system that gives us the
      opportunity to bring a new kind of trust into applications. It is a
      paradigm shift in the way applications are going to be built, giving us
      the opportunity to freely innovate on top of it.
    </Important>
    <Paragraph>
      This definition is quite comprehensive. There are a lot of concepts that
      may seems complex or confusing. What is consensus? If we change
      “decentralized” with “centralized” do we still have a Blockchain or is it
      something different? What does decentralized really mean? How can we
      guarantee immutability? How can we enforce trust?
    </Paragraph>
    <Paragraph>
      Let’s keep this definition as our reference model and start by analyzing
      this definition piece by piece, incrementally adding all the concepts we
      need to fully understand any Blockchain.
    </Paragraph>
  </Page>
);

export default WhatIsABlockchain;
