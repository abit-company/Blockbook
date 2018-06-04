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
} from 'components';
import PageLayout from 'layouts/PageLayout';
import bankCommodity from './bank-commodity.png';

export default () => (
  <PageLayout>
    <Page>
      <ChapterTitle>Money as a technology</ChapterTitle>
      <Important>
        Money can be seen as a technology that allow us to convert the abstract
        concept of value into something concrete and communicate it to other
        people.
      </Important>
      <Paragraph>From a technical view we can say that</Paragraph>
      <Important>
        Money is anything that could be accepted as payment for goods, services
        or debts in a specific context.
      </Important>
      The main functions of money are:
      <ul>
        <li>
          <Bold>Medium of exchange</Bold>. Money is used to intermediate the
          exchange of goods/services.
        </li>
        <li>
          <Bold>Measure of value</Bold>. Money is a method for comparing the
          values of different goods/services. It is possible for example to
          compare goods/services using Dollars as measure.
        </li>
        <li>
          <Bold>Store of value</Bold>. A store of value is anything that holds
          purchasing power in the future. To act as a store of value, money must
          be able to maintain its value over time.
        </li>
      </ul>
      <Paragraph>
        Depending on how well a specific type of money fulfills those functions
        we could tell how good (or bad) that specific money is. Euro could be a
        great form of money if you are in the European Union, but it is maybe
        not that good in Brazil. Gold could be a good store of value but it is
        not a very good medium of exchange since it is difficult to carry
        around.
      </Paragraph>
      <SubChapterTitle>Evolution of money</SubChapterTitle>
      <Paragraph>
        Evolution is a process that is greatly influenced by the environment.
        Money has evolved together with society adapting itself to face more
        complex financial interactions. From barter to precious metal, to paper,
        to Fiat, money has continued to evolve. Cryptocurrencies are just the
        last step in this process.
      </Paragraph>
      <h5>Barter</h5>
      <Important>
        Technically barter should not be considered money, since goods or
        services are traded directly without using any layer of abstraction
        (medium of exchange)
      </Important>
      <Paragraph>
        Trading food and animals for other good or services (e.g work) are
        examples of barter. This system has been used since the first markets
        and it is still used today in contexts with very low monetary supply or
        where there is no trust in the institutions (e.g hyperinflation).
      </Paragraph>
      <Paragraph>
        Products used in barter however are not very suitable for financial
        transactions:
      </Paragraph>
      <ul>
        <li>
          Not a good store of value (e.g foods and animals are perishable)
        </li>
        <li>
          Not a good medium of exchange since you have to find someone
          interested in your products otherwise a transaction could not occur.
        </li>
        <li>Not a good measure of value due tue the difference in quality.</li>
        <li>they are not quite handy to carry around.</li>
        <li>Not easy to split.</li>
      </ul>
      <Paragraph>
        For all this reasons people moved from barter to other type of payment
        systems that involves some layers of abstraction over the bare
        goods/services.
      </Paragraph>
      <h5>Commodity money</h5>
      <Paragraph>
        Commodity money can be considered the first form of conventional money.
      </Paragraph>
      <Important>
        Commodity money has values because it is made from a commodity that has
        an intrinsic value. The value resides in its physical properties and it
        is recognized as valuable by both part in the trade.
      </Important>
      <Paragraph>
        The classic example is gold or other precious metals which are divided
        in units and used as money. Commodity money could be a good store of
        value, but lacks in other functionality:
      </Paragraph>
      <ul>
        <li>It is difficult to carry around.</li>
        <li>
          It is difficult to understand if the commodity has been tampered with
          in some way, e.g gold could have been mixed with other cheaper
          materials.
        </li>
        <li>It is difficult to divide.</li>
        <li>The total supply is usually unknown.</li>
      </ul>
      <h5>Commodity-backed money (paper money)</h5>
      <Paragraph>
        In order to overcome the problem of carrying around commodities to
        trade, people started to leave commodities such as gold in banks and
        keep an official document from that bank (the IOU,{' '}
        <Italic>I Owe You</Italic>) that says that you have a specific amount of
        that commodity in the bank. It was much more easy to carry around, it
        could be splitted into smaller IOU and it was a good store of value,
        since it is linked directly to the commodity. The IOU{' '}
        <Italic>represent</Italic> a commodity.
      </Paragraph>
      <Important>
        Commodity backed money is a document that represent a commodity stored
        somewhere else.
      </Important>
      <ImageWrapper label="Commodity backed money">
        {bankCommodity}
      </ImageWrapper>
      <h5>Fiat money</h5>
      <Paragraph>
        Fiat money is an alternative to commodity and commodity-backed money.
        With Fiat money instead of trusting a commodity we a trust a central
        authority (a government or a central bank).
      </Paragraph>
      <Important>
        Fiat money has no intrinsic value and it is not linked to anything, but
        receive its value from a central institution that declare it as
        <Italic> legal tender</Italic>, i.e it must be accepted as payments
        within the legal boundaries of the institution that emitted it.
      </Important>
      <Paragraph>
        Fiat money is the first example of centralized money system. The
        circulating supply is controlled by a central institution, allowing
        governments to better manage inflation.
      </Paragraph>
      <h5>Digital money</h5>
      <Paragraph>
        Digital money is a digital form of Fiat. It exists only in the form of
        numbers and digits on information systems, but it could be converted to
        physical money. Digital money makes up most of the transactions around
        the world.
      </Paragraph>
    </Page>
  </PageLayout>
);
