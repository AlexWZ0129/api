## <a id='top' style='text-decoration: none;'>JSON-RPC

_The following sections contain RPC methods that are Remote Calls available by default and allow you to interact with the actual node, query, and submit. The RPCs are provided by Substrate itself. The RPCs are never exposed by the runtime._
- **[author](#author)**

- **[chain](#chain)**

- **[state](#state)**

- **[system](#system)**


___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='author'></a>author

_Authoring of network items_

▸ **pendingExtrinsics**(): `PendingExtrinsics`
- **summary**: Returns all pending extrinsics, potentially grouped by sender

▸ **submitAndWatchExtrinsic**(extinsic: `Extrinsic`)**.subscribe**(CALLBACK): `ExtrinsicStatus`
- **summary**: Subscribe and watch an extrinsic until unsubscribed

▸ **submitExtrinsic**(extrinsic: `Extrinsic`): `Hash`
- **summary**: Submit a fully formatted extrinsic for block inclusion

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='chain'></a>chain

_Retrieval of chain data_

▸ **getBlock**(hash?: `Hash`): `SignedBlock`
- **summary**: Get header and body of a relay chain block

▸ **getBlockHash**(blockNumber?: `BlockNumber`): `Hash`
- **summary**: Get the block hash for a specific block

▸ **getHead**(): `Hash`
- **summary**: Retrieves the best headerHash

▸ **getHeader**(hash?: `Hash`): `Header`
- **summary**: Retrieves the header for a specific block

▸ **getRuntimeVersion**(hash?: `Hash`): `RuntimeVersion`
- **summary**: Get the runtime version

▸ **subscribeNewHead**()**.subscribe**(CALLBACK): `Header`
- **summary**: Retrieves the best header via subscription

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='state'></a>state

_Query of state_

▸ **call**(method: `Text`, data: `Bytes`): `Bytes`
- **summary**: Perform a call to a builtin on the chain

▸ **callAt**(method: `Text`, data: `Bytes`, block: `Hash`): `Bytes`
- **summary**: Perform a call to a builtin on the chain (At block)

▸ **getMetadata**(block?: `Hash`): `Metadata`
- **summary**: Returns the runtime metadata

▸ **getStorage**(key: `StorageKey`): `StorageData`
- **summary**: Retrieves the storage for a key

▸ **getStorageAt**(key: `Bytes`, block: `Hash`): `Bytes`
- **summary**: Retrieves the storage for a key at a specific block

▸ **getStorageHash**(key: `Bytes`): `Hash`
- **summary**: Retrieves the storage hash

▸ **getStorageHashAt**(key: `Bytes`, block: `Hash`): `Hash`
- **summary**: Retrieves the storage hash at a specific block

▸ **getStorageSize**(key: `Bytes`): `u64`
- **summary**: Retrieves the storage size

▸ **getStorageSizeAt**(key: `Bytes`, block: `Hash`): `u64`
- **summary**: Retrieves the storage size at a specific block

▸ **queryStorage**(keys: `Vec<StorageKey>`, startBlock: `Hash`, block?: `Hash`): `Vec<StorageChangeSet>`
- **summary**: Query historical storage entries (by key) starting from a start block

▸ **subscribeStorage**(keys: `Vec<StorageKey>`)**.subscribe**(CALLBACK): `StorageChangeSet`
- **summary**: Subscribes to storage changes for the provided keys

___
<a href='#top' style='float: right; font-size: 1.6rem; font-weight: bold;'>Back To Top</a>

### <a id='system'></a>system

_Methods to retrieve system info_

▸ **chain**(): `Text`
- **summary**: Retrieves the chain

▸ **name**(): `Text`
- **summary**: Retrieves the node name

▸ **version**(): `Text`
- **summary**: Retrieves the version of the node