// Copyright 2017-2019 @polkadot/rpc-provider authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import { Logger } from '@polkadot/util/types';

import Coder from '../coder';

export type HttpState = {
  coder: Coder,
  endpoint: string,
  l: Logger
};
