import React from 'react';
import {
  Paragraph,
  Page,
  Important,
  ChapterTitle,
  SubChapterTitle,
  Bold,
  ImageWrapper,
} from 'components';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';

const Risk = () => (
  <PageTemplate>
    <Page>
      <ChapterTitle>Risk</ChapterTitle>
      <Paragraph>
        Risk is not an absolute metric. Every system has a level of risk that
        depends on different factors.
      </Paragraph>
      <Important>Risk = Vulnerabilities x Threats x Asset</Important>
      <Paragraph>
        This is not intended to be a mathematical formula, but rather a way to
        express risk as a function of some other parameters, in particular:
      </Paragraph>
      <ul>
        <li>
          <Paragraph>
            <Bold>Vulnerability: </Bold>
            anything that can be leveraged to perform an attack. Every system
            has vulnerabilities, some of them could be removed and some are
            intrinsic to the system (could be mitigated but not removed). Not
            all the vulnerabilities are exploitable. For example cryptographic
            algorithms are vulnerable to brute-force attacks, but this
            vulnerability is not exploitable right now since no one has enough
            computational power to perform a brute-force attack on such
            algorithms.
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            <Bold>Asset: </Bold>
            Everything that is valuable in a system is an asset: data, money,
            machines, trust, reputation etc. This measure estimates the loss
            caused by a successful attack. If the asset value is zero then the
            risk is zero.
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            <Bold>Threat</Bold>. Express all the potential factors that could
            lead to exploit a vulnerability. This value cannot be controlled
            since it comes from outside the system. Things that influences the
            threat level for example are: how skilled an attacker is, how many
            attackers there are, how motivated attackers are etc.
          </Paragraph>
        </li>
      </ul>
      <Paragraph>
        Companies like Google, Facebook, Amazon, Banks etc. try to reduce risk
        relying on access control, limiting the number of authorized actors that
        could perform some actions or have access to certain data. On the other
        hand blockchains (at least open blockchains) does not rely on access
        control to mitigate risk. Everything is open and public. There are
        hundreds of billions of dollars into public addresses in a system that
        is constantly under attack. The real strength of a blockchain is in its
        decentralized and distributed nature.
      </Paragraph>
      <Important>
        It is the distributed and decentralized nature of the blockchain that
        keeps the system secure. There is no central point of attack.
      </Important>
    </Page>
  </PageTemplate>
);

export default Risk;
