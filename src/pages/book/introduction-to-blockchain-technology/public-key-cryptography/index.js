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
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';

const PublicKeyCryptography = () => (
  <PageTemplate>
    <Page>
      <ChapterTitle>Public-key cryptography</ChapterTitle>
      <Paragraph>
        Public-key cryptography is a cryptographic system widely used all over
        the internet, which is the foundation of many blockchain concepts. As we
        will see blockchain <Italic>addresses</Italic> are created using this
        cryptographic system and transactions are authorized using{' '}
        <Italic>digital signatures</Italic>, which are one of the most famous
        usage of public-key cryptography.
      </Paragraph>
      <Important>
        The basic underlying idea is to use a pair of keys which are
        mathematically related:
        <ul>
          <li>
            <Bold>A private key</Bold>, generated from a random state, which
            should never be disclosed.
          </li>
          <li>
            <Bold>A public key</Bold>, derived from the private key, which can
            be shared to everyone.
          </li>
          Keys are just very big random numbers.
        </ul>
      </Important>
      <Paragraph>
        Generating a public key from a private key is computationally very easy,
        but reversing this operation (finding the private key from the public
        key) is practically infeasible (with today’s most powerful supercomputer
        it would take millions of years of computations). Public key
        cryptography can be used to guarantee properties like encryption,
        authentication, integrity and non-repudiation, even in a non-secure
        environment like the Internet.
      </Paragraph>
      <SubChapterTitle>Encryption</SubChapterTitle>
      <Important>
        Encryption is the process of encoding a message or information in such a
        way that only authorized parties can access it.
      </Important>
      <Paragraph>
        The most immediate use case of public-key cryptography is when we want
        to transfer a message over an insecure channel (like the Internet) yet
        ensuring confidentiality. This is achieved by encrypting a message with
        the receiver’s public key. If for example Bob wants to send a message to
        Alice, in a way that she will be the only one able to read it, he could
        encrypt the message using Alice’s public key. Now only the owner of that
        corresponding private key (in this example Alice) could decrypt the
        message.
      </Paragraph>
      <Paragraph>
        However an encrypted message only hides the contents of a message and it
        may be possible to change an encrypted message without understanding it.
        That is why we need to combine encryption with some other properties.
      </Paragraph>
      <h4>Hashing vs encryption</h4>
      <Paragraph>
        Hashing is used to validate the integrity of the data. Encryption
        encodes data for the primary purpose of ensuring data confidentiality.
        Encryption requires the private key to to reverse the function and
        decrypt the message, while an hash function can’t be reversed (one-way
        function)
      </Paragraph>
      <SubChapterTitle>
        digital signatures (Authentication, integrity and non-repudiation)
      </SubChapterTitle>
      <Paragraph>
        Digital signatures, like real signatures, are a way to prove somebody
        identity, except that they use math instead of an handwritten
        signatures. Digital signatures are created with a combination of hashing
        and public-key encryption.
      </Paragraph>
      <Paragraph>
        <Italic>Sign (Message, private key) = Digital Signature</Italic>
        <br />
        <Italic>
          Verify (Message, Public key, Digital signature) = True/false
        </Italic>
      </Paragraph>
      <Paragraph>With a digital signature we can accomplish:</Paragraph>
      <ul>
        <li>
          <Paragraph>
            <Bold>Authentication.</Bold> The ownership of a digital signature
            private key is linked to a specific user. A valid signature proves
            unequivocally that the message was sent by that user. Authentication
            does not require to know the real identity but it requires to
            provide a piece of information that is connected to your identity
            (the private key).
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            <Bold>Integrity.</Bold> If a message is digitally signed, any change
            in the message after signature invalidates the signature (remember
            hashing properties).
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            <Bold>Non-repudiation.</Bold> After signing a message, it is not
            possible deny having signed it.
          </Paragraph>
        </li>
      </ul>
    </Page>
  </PageTemplate>
);

export default PublicKeyCryptography;
