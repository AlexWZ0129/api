// Copyright 2017-2019 @polkadot/api authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Api from '../../src/promise';
import WsProvider from '../../../rpc-provider/src/ws';

// const WS_URL = 'ws://127.0.0.1:9944';
const url = 'wss://cennznet-node-0.centrality.me:9944';

const Types = require('@cennznet/types');

const assetOwner = {
  address: '5DXUeE5N5LtkW97F2PzqYPyqNkxqSWESdGSPTX6AvkUAhwKP',
  uri: '//cennznet-js-test',
};

const testAsset = {
  id: 16000,
  symbol: 'CENNZ-T',
  ownerAccount: '5FPCjwLUkeg48EDYcW5i4b45HLzmCn4aUbx5rsCsdtPbTsKT',
  totalSupply: '20000000000000000000000000000'
};

describe('e2e queries', () => {
  let api;

  beforeEach(async (done) => {
    if (!api) {
      api = await Api.create({
        provider: new WsProvider(url),
        types: {...Types, 'ed25519::Signature': 'H512'}
      });
    }

    jest.setTimeout(100000);
    done();
  });

  it('query free balance', async () => {
    const balance = await api.query.genericAsset.freeBalance([testAsset.id, assetOwner.address])
    // const blockHash = (await api.rpc.chain.getBlockHash());
    // const balanceAt = await api.query.genericAsset.freeBalance.at(blockHash, [testAsset.id, assetOwner.address]);
    // expect(balance).toEqual(balanceAt)
    expect(balance.toString()).toEqual('1000000000000000000000');
  });
});
