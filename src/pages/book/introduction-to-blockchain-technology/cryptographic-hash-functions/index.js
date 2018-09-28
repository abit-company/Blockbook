import React from 'react';
import {
  Paragraph,
  Page,
  Important,
  ChapterTitle,
  SubChapterTitle,
  ImageWrapper,
  Table,
  Tr,
  Th,
  Td,
  TableWrapper,
  Address,
} from 'components';
import styled from 'styled-components';
import PageTemplate from 'templates/PageTemplate';
// import blockchainHash from './blockchain-hash.png';
// import blockchainTampered from './blockchain-tampered-hash.png';
// import compareHashes from './compare-hashes.png';

const CryptographicHashFunctions = () => (
  <PageTemplate>
    <Page>
      <ChapterTitle>Cryptographic hash functions</ChapterTitle>
      <Important>
        A hash function is a function used to map data of arbitrary size into
        data of fixed size. The input of a hash function can be almost anything:
        an MP3 file, a PDF, a spreadsheet, the entire blockchain, or even the
        entire Internet. The output, called hash, is a finite number of bits.
      </Important>
      <Paragraph>
        Exploring the implementation details of hash functions goes beyond the
        purpose of this book and we can think of hash functions as black-boxes.
        It is enough to know that:
      </Paragraph>
      <ul>
        <li>
          <Paragraph>
            The same input always produces the same output: the hash, that looks
            like a random string on letters and numbers:
            <Address>
              2CF24DBA5FB0A30E26E83B2AC5B9E29E1B161E5C1FA7425E73043362938B9824.
            </Address>
          </Paragraph>
        </li>
        <li>
          <Paragraph>
            A small difference in the input completely changes the output.
          </Paragraph>
          <TableWrapper inLine>
            <Table>
              <thead>
                <Tr>
                  <Th>input</Th>
                  <Th>Hash function</Th>
                  <Th>output</Th>
                </Tr>
              </thead>
              <tbody>
                <Tr>
                  <Td>Hello</Td>
                  <Td>SHA256</Td>
                  <Td>
                    185F8DB32271FE25F561A6FC938B2E264306EC304EDA518007D1764826381969
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <span style={{ textTransform: 'lowercase' }}>hello</span>
                  </Td>
                  <Td>SHA256</Td>
                  <Td>
                    <span>
                      2CF24DBA5FB0A30E26E83B2AC5B9E29E1B161E5C1FA7425E73043362938B9824
                    </span>
                  </Td>
                </Tr>
              </tbody>
            </Table>
          </TableWrapper>
        </li>
        <li>
          <Paragraph>
            It is a one-way function: it is computationally very easy to create
            a hash from any input, but it is computationally very hard to
            compute the input from a given output (inverse function). There is
            no known way to go from a hash to the input - other than trial and
            error (brute-force).
          </Paragraph>
        </li>
      </ul>
      <Important>
        An hash can be seen as a fingerprint of some digital data
      </Important>
      <Paragraph>
        Since a small change in the input completely changes the output, once
        the hash of a file is computed, if the file is changed also the relative
        hash will change. If we publish the digital copy of this book together
        with its hash, whoever downloads it can verify that they are reading the
        original file by simply computing the hash of the downloaded file. If
        the hashes do not match, than you know that the file has been modified
        in some way. It should be evident that comparing hashes is way more
        convenient than comparing entire files.
      </Paragraph>
      <SubChapterTitle>Hash functions and Blockchains</SubChapterTitle>
      <Paragraph>
        Blockchains make heavy use of hash functions, as they provide a very
        convenient way to express the entire blockchain state in a fixed-data
        string. For every new block that is generated, the previous block’s hash
        is also used as input to generate the new hash.
      </Paragraph>
      {/* <ImageWrapper label="Hash link between blocks">
        {blockchainHash}
      </ImageWrapper> */}
      <Paragraph>
        If someone tries to maliciously add, remove, or change some information
        in any block, this change will affect all the following hashes.
      </Paragraph>
      {/* <ImageWrapper label="Attempt to modify a block">
        {blockchainTampered}
      </ImageWrapper> */}
      <Paragraph>
        All the possible states of a blockchain can be represented by a
        fixed-data string.
      </Paragraph>
      <Important>
        The Bitcoin or Ethereum blockchain are currently in the order of tens of
        Gigabytes, but the current state of those blockchain is represented by a
        single hash.
      </Important>
      <Paragraph>
        Any modification to the blockchain will be immediately evident to
        everyone. There is no need analyze the entire blockchain, it is enough
        to look a the last block hash to get the current state.
      </Paragraph>
      {/* <ImageWrapper label="Compare two blockchains">
        {compareHashes}
      </ImageWrapper> */}
    </Page>
  </PageTemplate>
);

export default CryptographicHashFunctions;
