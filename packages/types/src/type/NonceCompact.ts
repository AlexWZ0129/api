// Copyright 2017-2019 @polkadot/types authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Compact from '../codec/Compact';
import Nonce from './Nonce';

/**
 * @name Nonce
 * @description
 * The Compact<Nonce> or number of transactions sent by a specific account. Generally used
 * with extrinsics to determine the order of execution.
 */
export default class NonceCompact extends Compact.with(Nonce) {
}
