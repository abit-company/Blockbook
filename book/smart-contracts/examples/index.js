import React from 'react';
import { Paragraph, Page, ChapterTitle, SubChapterTitle } from 'components';
import PageLayout from 'layouts/PageLayout';

export default () => (
  <PageLayout>
    <Page>
      <ChapterTitle>Examples</ChapterTitle>
      <Paragraph>
        Smart contract aims to automate all the scenarios that involve some form
        of contractual action between untrusted parties. We present a couple of
        examples that could use explain better some use case.
      </Paragraph>
      <SubChapterTitle>Crowdfunding</SubChapterTitle>
      <Paragraph>
        Suppose that we want to make a Kickstarter clone using smart contract.
        The basic idea is that someone publish a project, set the amount of
        money he needs and a limit time to reach the goal. If the goal is not
        reached funds are returned to the donors. Smart contract could be used
        to simplify the process and guarantee transparency. We can program a
        smart contract to receive and lock all the money from the donors and if
        the requirements are met (in this case a specific amount of money is
        reached) before the deadline, the contract automatically unlock the
        funds and send the money to the creator of the campaign, otherwise all
        the money are automatically returned to the users. With a smart contract
        there is no need for a trusted third party to guarantee that the the
        money are actually sent or returned. Everything is embedded inside the
        contract.
      </Paragraph>
      <SubChapterTitle>Food delivery</SubChapterTitle>
      <Paragraph>
        Another classic example could be food delivery. We could create a
        contract that set the price of the food depending on the time it takes
        to be delivered. For example if the delivered takes:
      </Paragraph>
      <ul>
        <li>less 30 min: full price</li>
        <li>between 30 and 45 min: 20% discount</li>
        <li>more than 45 min: 30% discount</li>
      </ul>
      <Paragraph>
        This three conditions are coded inside a smart contract together with a
        timestamp of the time when the order was made. When a customer place his
        order the full amount is locked inside the smart contract, and when the
        delivery is completed, depending on the the time it took the contract
        will automatically release to the correct amount of money for both
        parties. The delivery time could be set using the GPS without any
        additional actions by the users.
      </Paragraph>
    </Page>
  </PageLayout>
);
