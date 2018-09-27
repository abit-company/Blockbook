const baseToc = [
  {
    title: 'Introduction',
    url: '/book/introduction',
    childNodes: [
      {
        title: 'A new kid in the block',
        url: 'a-new-kid-in-the-block',
      },
      {
        title: 'The trust issue',
        url: 'the-trust-issue',
      },
    ],
  },
  {
    title: 'An introduction to blockchain technology',
    url: '/book/introduction-to-blockchain-technology',
    childNodes: [
      {
        title: 'What is a blockchain',
        url: 'what-is-a-blockchain',
      },
      {
        title: 'Ledger, Databases and Blockchains',
        url: 'ledger-databases-blockchains',
      },
      {
        title: 'Cryptographic hash functions',
        url: 'cryptographic-hash-functions',
      },
      {
        title: 'Blockchain network',
        url: 'blockchain-network',
      },
      {
        title: 'Public key cryptography',
        url: 'public-key-cryptography',
      },
      {
        title: 'Addresses',
        url: 'addresses',
      },
      {
        title: 'Wallets',
        url: 'wallets',
      },
      {
        title: 'Transactions',
        url: 'transactions',
      },
      {
        title: 'Consensus',
        url: 'consensus',
      },
      {
        title: 'Mining',
        url: 'mining',
      },
      {
        title: 'Immutability',
        url: 'immutability',
      },
      {
        title: 'Risk',
        url: 'risk',
      },
      {
        title: 'Trust',
        url: 'trust',
      },
      {
        title: 'Cryptoeconomics',
        url: 'cryptoeconomics',
      },
      {
        title: 'Forks',
        url: 'forks',
      },
      {
        title: 'Scaling',
        url: 'scaling',
      },
      {
        title: 'Distributed Ledger Technologies (DLTs)',
        url: 'distributed-ledger-technologies',
      },
    ],
  },
  {
    title: 'Blockchain 1.0 - Cryptocurrencies',
    url: '/book/cryptocurrencies',
    childNodes: [
      {
        title: 'Money as a technology',
        url: 'money-as-a-technology',
      },
      {
        title: 'Cryptocurrencies overview',
        url: 'cryptocurrencies-overview',
      },
      {
        title: 'Bitcoin',
        url: 'bitcoin',
      },
      {
        title: 'Other relevant cryptocurrencies',
        url: 'other-cryptocurrencies',
      },
    ],
  },
  {
    title: 'Blockchain 2.0 - Smart contracts',
    url: '/book/smart-contracts',
    childNodes: [
      {
        title: 'Examples',
        url: 'examples',
      },
      {
        title: 'Ethereum',
        url: 'ethereum',
      },
      {
        title: 'Oracles',
        url: 'oracles',
      },
    ],
  },
  {
    title: 'Useful links',
    url: '/book/useful-links',
    childNodes: [],
  },
];
const toc = baseToc.map(el => {
  return {
    title: el.title,
    url: el.url,
    childNodes: el.childNodes.map(e => ({
      title: e.title,
      url: `${el.url}/${e.url}`,
    })),
  };
});

const temp = toc.map(el =>
  [{ title: el.title, url: el.url }].concat(el.childNodes)
);

const flattenToc = [].concat(...temp);

export { toc, flattenToc };
