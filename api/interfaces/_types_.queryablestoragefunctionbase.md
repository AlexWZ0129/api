

# Type parameters
#### CodecResult 
#### SubscriptionResult 
# Hierarchy

 `StorageFunction`

**↳ QueryableStorageFunctionBase**

# Callable
▸ **__call**(arg?: *`CodecArg`*): `CodecResult`

▸ **__call**(arg?: *`any`*): `Uint8Array`

*Defined in [types.ts:56](https://github.com/polkadot-js/api/blob/6ea665d/packages/api/src/types.ts#L56)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg | `CodecArg` |

**Returns:** `CodecResult`

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/primitive/StorageKey.ts:12](https://github.com/polkadot-js/api/blob/6ea665d/packages/types/src/primitive/StorageKey.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg | `any` |

**Returns:** `Uint8Array`

# Properties

<a id="at"></a>

##  at

**● at**: *`function`*

*Defined in [types.ts:58](https://github.com/polkadot-js/api/blob/6ea665d/packages/api/src/types.ts#L58)*

#### Type declaration
▸(hash: *`Hash` \| `Uint8Array` \| `string`*, arg?: *`CodecArg`*): `CodecResult`

**Parameters:**

| Name | Type |
| ------ | ------ |
| hash | `Hash` \| `Uint8Array` \| `string` |
| `Optional` arg | `CodecArg` |

**Returns:** `CodecResult`

___
<a id="hash"></a>

##  hash

**● hash**: *`function`*

*Defined in [types.ts:59](https://github.com/polkadot-js/api/blob/6ea665d/packages/api/src/types.ts#L59)*

#### Type declaration
▸(arg?: *`CodecArg`*): [HashResult](../modules/_types_.md#hashresult)<`CodecResult`, `SubscriptionResult`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg | `CodecArg` |

**Returns:** [HashResult](../modules/_types_.md#hashresult)<`CodecResult`, `SubscriptionResult`>

___
<a id="head"></a>

##  head

**● head**: *`function`*

*Defined in [types.ts:62](https://github.com/polkadot-js/api/blob/6ea665d/packages/api/src/types.ts#L62)*

#### Type declaration
▸(): `CodecResult`

**Returns:** `CodecResult`

___
<a id="headkey"></a>

## `<Optional>` headKey

**● headKey**: *`Uint8Array`*

*Inherited from StorageFunction.headKey*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/primitive/StorageKey.ts:18](https://github.com/polkadot-js/api/blob/6ea665d/packages/types/src/primitive/StorageKey.ts#L18)*

___
<a id="key"></a>

##  key

**● key**: *`function`*

*Defined in [types.ts:60](https://github.com/polkadot-js/api/blob/6ea665d/packages/api/src/types.ts#L60)*

#### Type declaration
▸(arg?: *`CodecArg`*): `string`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg | `CodecArg` |

**Returns:** `string`

___
<a id="meta"></a>

##  meta

**● meta**: *`StorageFunctionMetadata`*

*Inherited from StorageFunction.meta*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/primitive/StorageKey.ts:14](https://github.com/polkadot-js/api/blob/6ea665d/packages/types/src/primitive/StorageKey.ts#L14)*

___
<a id="method"></a>

##  method

**● method**: *`string`*

*Inherited from StorageFunction.method*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/primitive/StorageKey.ts:15](https://github.com/polkadot-js/api/blob/6ea665d/packages/types/src/primitive/StorageKey.ts#L15)*

___
<a id="section"></a>

##  section

**● section**: *`string`*

*Inherited from StorageFunction.section*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/primitive/StorageKey.ts:16](https://github.com/polkadot-js/api/blob/6ea665d/packages/types/src/primitive/StorageKey.ts#L16)*

___
<a id="size"></a>

##  size

**● size**: *`function`*

*Defined in [types.ts:61](https://github.com/polkadot-js/api/blob/6ea665d/packages/api/src/types.ts#L61)*

#### Type declaration
▸(arg?: *`CodecArg`*): [U64Result](../modules/_types_.md#u64result)<`CodecResult`, `SubscriptionResult`>

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` arg | `CodecArg` |

**Returns:** [U64Result](../modules/_types_.md#u64result)<`CodecResult`, `SubscriptionResult`>

___
<a id="tojson"></a>

##  toJSON

**● toJSON**: *`function`*

*Inherited from StorageFunction.toJSON*

*Defined in [/home/travis/build/polkadot-js/api/packages/types/src/primitive/StorageKey.ts:17](https://github.com/polkadot-js/api/blob/6ea665d/packages/types/src/primitive/StorageKey.ts#L17)*

#### Type declaration
▸(): `any`

**Returns:** `any`

___
