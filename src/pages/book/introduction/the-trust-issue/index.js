import React from 'react';
import { Paragraph, Page, Cit, Important, ChapterTitle } from 'components';
import PageTemplate from 'templates/PageTemplate';

export const TheTrustIssue = () => (
  <PageTemplate>
    <Page>
      <ChapterTitle>The trust issue</ChapterTitle>
      <Cit
        cit="The root problem with conventional currency is all the trust
        that’s required to make it work. The central bank must be trusted
        not to debase the currency, but the history of fiat currencies is
        full of breaches of that trust. Banks must be trusted to hold our
        money and transfer it electronically, but they lend it out in
        waves of credit bubbles with barely a fraction in reserve. We have
        to trust them with our privacy, trust them not to let identity
        thieves drain our accounts."
        by="Satoshi Nakamoto, Founder of Bitcoin"
      />
      <Paragraph>
        Imagine a person that goes into a shop, takes what he needs but when it
        is time to pay he realized he has forgotten its wallet at home. He tries
        to convince the owner that he will come back the next day to pay the
        bill, but the owner replies that he cannot accept. A couple of hours
        later another person goes to the same store, do the shopping and he too
        asks the owner if he could bring him the money the next day. Since they
        are close friends, the owner said there was no problem and he could
        easily pay the next day.
      </Paragraph>
      <Paragraph>
        What changed the owner’s mind? The difference is weather or not the
        owner trusts the person. He didn’t trust the stranger and as a
        consequence he has no guarantee that he will eventually receive the
        money.
      </Paragraph>
      <Paragraph>
        Trust is not only related to money, it is a concept linked to almost
        everything. We trust that the company beyond a fairtrade product has
        actually produced it without exploiting people. We trust that the money
        we donate to charity will actually go to people in need. We trust the
        bank when we are paying with our credit card. We trust our email
        provider not to lock us out. Every company is built on top of chains of
        trust that involve numerous actors, from a local store to the
        government. If we lose trust in just one actor involved in the chain,
        transactions are no longer possible.
      </Paragraph>
      <Important>
        However maintaining trust, in particular in a global economy like today,
        is expensive, time-consuming, and, in many cases, inefficient.
      </Important>
      <Paragraph>
        What if we could transfer trust from a third party to a system designed
        to be bulletproof?
      </Paragraph>
      <Important>
        This is exactly what has been achieved through Blockchain technology:
        trust issue has been solved by completely redesigning applications. With
        a Blockchain, trust is inherently built into the system itself. Our
        ability to trust the system does no longer depend on the intentions of
        any particular party. A Blockchains is a system that give us an
        opportunity to bring a new kind of trust into applications.
      </Important>
    </Page>
  </PageTemplate>
);
