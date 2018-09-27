import React from 'react';
import {
  Paragraph,
  Page,
  Important,
  ChapterTitle,
  ImageWrapper,
  Italic,
  Bold,
} from 'components';
import PageLayout from 'layouts/PageLayout';

export default () => (
  <PageLayout>
    <Page>
      <ChapterTitle>Oracles</ChapterTitle>
      <Paragraph>
        Smart contracts are executed in a controlled and isolated environment
        and they cannot interact with the world outside the Blockchain. The
        reason is that a smart contract must always have a deterministic
        behaviour, i.e all miners under the same conditions must produce to same
        result. An interaction with an external source of data could potentially
        lead to a non deterministic behavior. There is no guarantee that
        tomorrow a certain data source will return the same data returned today,
        or even that two different nodes receive the same data. Every
        computation on a Blockchain must be verifiable using only the data in
        the blockchain itself. Moreover trusting a single outside data source
        will centralize again the process.
      </Paragraph>
      <Paragraph>
        But what if a smart contract need some data from the real world to make
        a computation? Weather info, sports results, stock prices, exchange
        rates etc. A smart contract could not get directly this information but
        instead need to use an oracle.
      </Paragraph>
      <Important>
        An oracle is a trusted service specifically designed to connect a
        blockchain with the outside world by giving the smart contract all the
        necessaries real world information needed to perform a computation.
      </Important>
    </Page>
  </PageLayout>
);
