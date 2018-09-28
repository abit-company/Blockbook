import React from 'react';
import { Paragraph, Page, Cit, Important, ChapterTitle } from 'components';

const TheTrustIssue = () => (
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
      by="Satoshi Nakamoto, creator of Bitcoin"
    />
    <Paragraph>
      Let&apos;s imagine that a man, an ordinary man, enters a grocery store,
      chooses the products he needs and goes to the cash desk. When it came time
      to pay, however, he realized he had forgotten his wallet at home. So,
      candidly, try to explain to the owner that he just need 5 minutes to get
      home and take the wallet and would come back to pay. Unfortunately, the
      merchant said that he can not accept.
    </Paragraph>
    <Paragraph>
      A couple of hours later, a lady realizes she has been equally careless,
      and kindly asks the merchant to wait until the next day to receive the
      money. They have been friends for a a long time, so the merchant has no
      problem waiting for the following day.
    </Paragraph>
    <Paragraph>
      What changed the owner’s mind? The difference is weather or not the owner
      trusts the person. He did not trust the stranger and as a consequence he
      had no guarantee that he would eventually receive the money.
    </Paragraph>
    <Paragraph>
      The concept of trust is not only linked to money but is applied to many
      contexts of everyday life. We trust that a company that sells a fairtrade
      product has not exploited any human being. We expect that the money we
      donate to charity will promptly reach people in need. We place blind trust
      in banks when we pay with our debit card and we have no doubt that our
      e-mail provider will not take us out of the service. Every society is
      built on top of a chain of trust that involve numerous actors, from a
      local store to the government. If we lose trust in just one actor involved
      in the chain, transactions are no longer possible.
    </Paragraph>
    <Important>
      However maintaining trust, in particular in a global economy like today,
      is expensive, time-consuming, and, in many cases, inefficient.
    </Important>
    <Paragraph>
      What if we could transfer trust from a third party to a system designed to
      be bulletproof?
    </Paragraph>
    <Important>
      This is exactly what has been achieved through Blockchain technology:
      trust issue has been solved by completely changing the paradigm behind
      applications. With a Blockchain, trust is inherently built into the system
      itself. Our ability to trust the system does no longer depend on the
      intentions of any particular party. A Blockchains is a system that give us
      an opportunity to bring a new kind of trust into applications.
    </Important>
  </Page>
);

export default TheTrustIssue;
