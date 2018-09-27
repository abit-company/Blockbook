import React from 'react';
import { Paragraph, Page, Important } from 'components';
import PageLayout from 'layouts/PageLayout';

export default () => (
  <PageLayout>
    <Page>
      <h2>What is a Blockchain</h2>
      <Paragraph>
        It is possible to find many definitions in literature about Blockchains.
        Some of them are focused on the importance of its structure, others on
        the technologies behind it and others on the implications for business
        and society. All these aspect are equally important and contribute to
        give a general overview on the subject.
      </Paragraph>
      <Important>
        A Blockchain is a digital, decentralized and distributed ledger,
        structured as chain of records, called blocks, each being responsible of
        storing some kind of information (from transactions records to entire
        computer programs). New blocks can be added but old blocks cannot be
        removed or modified. Cryptography and consensus protocols enforce
        tamper-proof security and immutability. The result is a neutral, open
        and trustless system where our ability to use and trust this system does
        not depends of the intentions of any particular party or institution. A
        Blockchain is not just a payment infrastructure, a supply chain monitor
        or a digital identity manager, is much more, it is system that gives us
        the opportunity to bring a new kind of trust into applications, it is a
        paradigm shift in the way applications are going to be built, giving us
        the opportunity to freely innovate on top of it.
      </Important>
      <Paragraph>
        This definition is quite comprehensive. There are a lot of concepts that
        may seems complex or confusing. What is consensus? If we change
        “decentralized” with “centralized” do we still have a Blockchain or is
        it something different? What does decentralized really mean? How can we
        guarantee immutability? How can we enforce trust?
      </Paragraph>
      <Paragraph>
        Let’s keep this definition as our reference model and start by analyzing
        all the properties piece by piece from the basics, incrementally adding
        all the concepts we need to fully understand any Blockchain.
      </Paragraph>
    </Page>
  </PageLayout>
);
