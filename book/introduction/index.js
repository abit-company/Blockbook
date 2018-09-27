import React from 'react';
import { Paragraph, Page, ChapterTitle } from 'components';
import PageLayout from 'layouts/PageLayout';

export default () => (
  <PageLayout>
    <Page>
      <ChapterTitle>Introduction - The power of innovation</ChapterTitle>
      <Paragraph>
        In 1975 Steven Sasson, a Kodak engineer realised the first
        self-contained digital camera. Kodak told him to keep the invention
        private, worried that digital cameras could end up having a negative
        impact on their core business.
      </Paragraph>
      <Paragraph>
        In 2007 half of the mobile-phones in the world were produced by Nokia.
        When Apple and Google came out with iOS and Android, Nokia sticked with
        its Symbian OS, failing to understand the central role of software in
        smartphones. Similarly, Blackberry kept thinking that using half of the
        phone size for a keyboard was a great idea.
      </Paragraph>
      <Paragraph>
        History, especially in the digital era, is crowded with dominant
        companies that ended up losing big opportunities, got heavily resized or
        declared bankruptcy because of their failure to truly understand the
        innovation a new technology or a new idea could bring. New ideas have
        the power to destroy entire markets in a matter of years, just like
        Napster destroyed Tower Records by simply showing that it was possible
        to share music files between people. Napster was shut down, but once the
        world understood the innovation behind it, nobody wanted to open a
        record store again. Uber created a new business-model, and even if
        regulators are trying to stop it, the idea of becoming a taxi driver is
        not very appealing anymore.
      </Paragraph>
      <Paragraph>
        Innovation can’t be stopped, it is not possible to un-invent the
        internet, or the sharing economy. Innovation must be understood and
        embraced.
      </Paragraph>
    </Page>
  </PageLayout>
);
