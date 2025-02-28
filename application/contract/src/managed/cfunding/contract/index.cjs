'use strict';
const __compactRuntime = require('@midnight-ntwrk/compact-runtime');
const expectedRuntimeVersionString = '0.7.0';
const expectedRuntimeVersion = expectedRuntimeVersionString.split('-')[0].split('.').map(Number);
const actualRuntimeVersion = __compactRuntime.versionString.split('-')[0].split('.').map(Number);
if (expectedRuntimeVersion[0] != actualRuntimeVersion[0]
     || (actualRuntimeVersion[0] == 0 && expectedRuntimeVersion[1] != actualRuntimeVersion[1])
     || expectedRuntimeVersion[1] > actualRuntimeVersion[1]
     || (expectedRuntimeVersion[1] == actualRuntimeVersion[1] && expectedRuntimeVersion[2] > actualRuntimeVersion[2]))
   throw new __compactRuntime.CompactError(`Version mismatch: compiled code expects ${expectedRuntimeVersionString}, runtime is ${__compactRuntime.versionString}`);
{ const MAX_FIELD = 102211695604070082112571065507755096754575920209623522239390234855480569854275933742834077002685857629445612735086326265689167708028928n;
  if (__compactRuntime.MAX_FIELD !== MAX_FIELD)
     throw new __compactRuntime.CompactError(`compiler thinks maximum field value is ${MAX_FIELD}; run time thinks it is ${__compactRuntime.MAX_FIELD}`)
}

const _descriptor_0 = new __compactRuntime.CompactTypeUnsignedInteger(4294967295n, 4);

const _descriptor_1 = new __compactRuntime.CompactTypeBytes(32);

const _descriptor_2 = new __compactRuntime.CompactTypeUnsignedInteger(340282366920938463463374607431768211455n, 16);

const _descriptor_3 = new __compactRuntime.CompactTypeUnsignedInteger(18446744073709551615n, 8);

class _QualifiedCoinInfo_0 {
  alignment() {
    return _descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_2.alignment().concat(_descriptor_3.alignment())));
  }
  fromValue(value_0) {
    return {
      nonce: _descriptor_1.fromValue(value_0),
      color: _descriptor_1.fromValue(value_0),
      value: _descriptor_2.fromValue(value_0),
      mt_index: _descriptor_3.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_1.toValue(value_0.nonce).concat(_descriptor_1.toValue(value_0.color).concat(_descriptor_2.toValue(value_0.value).concat(_descriptor_3.toValue(value_0.mt_index))));
  }
}

const _descriptor_4 = new _QualifiedCoinInfo_0();

const _descriptor_5 = new __compactRuntime.CompactTypeBoolean();

class _ZswapCoinPublicKey_0 {
  alignment() {
    return _descriptor_1.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_1.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_1.toValue(value_0.bytes);
  }
}

const _descriptor_6 = new _ZswapCoinPublicKey_0();

class _Maybe_0 {
  alignment() {
    return _descriptor_5.alignment().concat(_descriptor_6.alignment());
  }
  fromValue(value_0) {
    return {
      is_some: _descriptor_5.fromValue(value_0),
      value: _descriptor_6.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_5.toValue(value_0.is_some).concat(_descriptor_6.toValue(value_0.value));
  }
}

const _descriptor_7 = new _Maybe_0();

const _descriptor_8 = new __compactRuntime.CompactTypeUnsignedInteger(65535n, 2);

class _CoinInfo_0 {
  alignment() {
    return _descriptor_1.alignment().concat(_descriptor_1.alignment().concat(_descriptor_2.alignment()));
  }
  fromValue(value_0) {
    return {
      nonce: _descriptor_1.fromValue(value_0),
      color: _descriptor_1.fromValue(value_0),
      value: _descriptor_2.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_1.toValue(value_0.nonce).concat(_descriptor_1.toValue(value_0.color).concat(_descriptor_2.toValue(value_0.value)));
  }
}

const _descriptor_9 = new _CoinInfo_0();

class _ContractAddress_0 {
  alignment() {
    return _descriptor_1.alignment();
  }
  fromValue(value_0) {
    return {
      bytes: _descriptor_1.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_1.toValue(value_0.bytes);
  }
}

const _descriptor_10 = new _ContractAddress_0();

class _Either_0 {
  alignment() {
    return _descriptor_5.alignment().concat(_descriptor_6.alignment().concat(_descriptor_10.alignment()));
  }
  fromValue(value_0) {
    return {
      is_left: _descriptor_5.fromValue(value_0),
      left: _descriptor_6.fromValue(value_0),
      right: _descriptor_10.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_5.toValue(value_0.is_left).concat(_descriptor_6.toValue(value_0.left).concat(_descriptor_10.toValue(value_0.right)));
  }
}

const _descriptor_11 = new _Either_0();

class _Maybe_1 {
  alignment() {
    return _descriptor_5.alignment().concat(_descriptor_9.alignment());
  }
  fromValue(value_0) {
    return {
      is_some: _descriptor_5.fromValue(value_0),
      value: _descriptor_9.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_5.toValue(value_0.is_some).concat(_descriptor_9.toValue(value_0.value));
  }
}

const _descriptor_12 = new _Maybe_1();

class _SendResult_0 {
  alignment() {
    return _descriptor_12.alignment().concat(_descriptor_9.alignment());
  }
  fromValue(value_0) {
    return {
      change: _descriptor_12.fromValue(value_0),
      sent: _descriptor_9.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_12.toValue(value_0.change).concat(_descriptor_9.toValue(value_0.sent));
  }
}

const _descriptor_13 = new _SendResult_0();

const _descriptor_14 = new __compactRuntime.CompactTypeField();

const _descriptor_15 = new __compactRuntime.CompactTypeBytes(6);

class _CoinPreimage_0 {
  alignment() {
    return _descriptor_9.alignment().concat(_descriptor_5.alignment().concat(_descriptor_1.alignment().concat(_descriptor_15.alignment())));
  }
  fromValue(value_0) {
    return {
      info: _descriptor_9.fromValue(value_0),
      data_type: _descriptor_5.fromValue(value_0),
      data: _descriptor_1.fromValue(value_0),
      domain_sep: _descriptor_15.fromValue(value_0)
    }
  }
  toValue(value_0) {
    return _descriptor_9.toValue(value_0.info).concat(_descriptor_5.toValue(value_0.data_type).concat(_descriptor_1.toValue(value_0.data).concat(_descriptor_15.toValue(value_0.domain_sep))));
  }
}

const _descriptor_16 = new _CoinPreimage_0();

const _descriptor_17 = new __compactRuntime.CompactTypeVector(2, _descriptor_1);

const _descriptor_18 = new __compactRuntime.CompactTypeVector(2, _descriptor_14);

const _descriptor_19 = new __compactRuntime.CompactTypeUnsignedInteger(255n, 1);

class Contract {
  witnesses;
  constructor(...args_0) {
    if (args_0.length !== 1)
      throw new __compactRuntime.CompactError(`Contract constructor: expected 1 argument, received ${args_0.length}`);
    const witnesses_0 = args_0[0];
    if (typeof(witnesses_0) !== 'object')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor is not an object');
    if (typeof(witnesses_0.local_secrete_key) !== 'function')
      throw new __compactRuntime.CompactError('first (witnesses) argument to Contract constructor does not contain a function-valued field named local_secrete_key');
    this.witnesses = witnesses_0;
    this.circuits = {
      initializeOwner: (...args_1) => {
        if (args_1.length !== 1)
          throw new __compactRuntime.CompactError(`initializeOwner: expected 1 argument (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('initializeOwner',
                                      'argument 1 (as invoked from Typescript)',
                                      'src/cfunding.compact line 24, char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: { value: [], alignment: [] },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_initializeOwner_0(context, partialProofData);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      addContribution: (...args_1) => {
        if (args_1.length !== 2)
          throw new __compactRuntime.CompactError(`addContribution: expected 2 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const coin_0 = args_1[1];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('addContribution',
                                      'argument 1 (as invoked from Typescript)',
                                      'src/cfunding.compact line 28, char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(typeof(coin_0) === 'object' && coin_0.nonce.buffer instanceof ArrayBuffer && coin_0.nonce.BYTES_PER_ELEMENT === 1 && coin_0.nonce.length === 32 && coin_0.color.buffer instanceof ArrayBuffer && coin_0.color.BYTES_PER_ELEMENT === 1 && coin_0.color.length === 32 && typeof(coin_0.value) === 'bigint' && coin_0.value >= 0 && coin_0.value <= 340282366920938463463374607431768211455n))
          __compactRuntime.type_error('addContribution',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'src/cfunding.compact line 28, char 1',
                                      'struct CoinInfo<nonce: Bytes<32>, color: Bytes<32>, value: Uint<0..340282366920938463463374607431768211455>>',
                                      coin_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_9.toValue(coin_0),
            alignment: _descriptor_9.alignment()
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_addContribution_0(context,
                                                  partialProofData,
                                                  coin_0);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      withdrawFunds: (...args_1) => {
        if (args_1.length !== 1)
          throw new __compactRuntime.CompactError(`withdrawFunds: expected 1 argument (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('withdrawFunds',
                                      'argument 1 (as invoked from Typescript)',
                                      'src/cfunding.compact line 46, char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: { value: [], alignment: [] },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_withdrawFunds_0(context, partialProofData);
        partialProofData.output = { value: [], alignment: [] };
        return { result: result_0, context: context, proofData: partialProofData };
      },
      public_key: (...args_1) => {
        if (args_1.length !== 3)
          throw new __compactRuntime.CompactError(`public_key: expected 3 arguments (as invoked from Typescript), received ${args_1.length}`);
        const contextOrig_0 = args_1[0];
        const sk_0 = args_1[1];
        const rInstance_0 = args_1[2];
        if (!(typeof(contextOrig_0) === 'object' && contextOrig_0.originalState != undefined && contextOrig_0.transactionContext != undefined))
          __compactRuntime.type_error('public_key',
                                      'argument 1 (as invoked from Typescript)',
                                      'src/cfunding.compact line 58, char 1',
                                      'CircuitContext',
                                      contextOrig_0)
        if (!(sk_0.buffer instanceof ArrayBuffer && sk_0.BYTES_PER_ELEMENT === 1 && sk_0.length === 32))
          __compactRuntime.type_error('public_key',
                                      'argument 1 (argument 2 as invoked from Typescript)',
                                      'src/cfunding.compact line 58, char 1',
                                      'Bytes<32>',
                                      sk_0)
        if (!(rInstance_0.buffer instanceof ArrayBuffer && rInstance_0.BYTES_PER_ELEMENT === 1 && rInstance_0.length === 32))
          __compactRuntime.type_error('public_key',
                                      'argument 2 (argument 3 as invoked from Typescript)',
                                      'src/cfunding.compact line 58, char 1',
                                      'Bytes<32>',
                                      rInstance_0)
        const context = { ...contextOrig_0 };
        const partialProofData = {
          input: {
            value: _descriptor_1.toValue(sk_0).concat(_descriptor_1.toValue(rInstance_0)),
            alignment: _descriptor_1.alignment().concat(_descriptor_1.alignment())
          },
          output: undefined,
          publicTranscript: [],
          privateTranscriptOutputs: []
        };
        const result_0 = this.#_public_key_0(context,
                                             partialProofData,
                                             sk_0,
                                             rInstance_0);
        partialProofData.output = { value: _descriptor_1.toValue(result_0), alignment: _descriptor_1.alignment() };
        return { result: result_0, context: context, proofData: partialProofData };
      }
    };
    this.impureCircuits = {
      initializeOwner: this.circuits.initializeOwner,
      addContribution: this.circuits.addContribution,
      withdrawFunds: this.circuits.withdrawFunds
    };
  }
  initialState(...args_0) {
    if (args_0.length !== 1)
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 1 argument (as invoked from Typescript), received ${args_0.length}`);
    const constructorContext_0 = args_0[0];
    if (typeof(constructorContext_0) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'constructorContext' in argument 1 (as invoked from Typescript) to be an object`);
    }
    if (!('initialPrivateState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialPrivateState' in argument 1 (as invoked from Typescript)`);
    }
    if (!('initialZswapLocalState' in constructorContext_0)) {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript)`);
    }
    if (typeof(constructorContext_0.initialZswapLocalState) !== 'object') {
      throw new __compactRuntime.CompactError(`Contract state constructor: expected 'initialZswapLocalState' in argument 1 (as invoked from Typescript) to be an object`);
    }
    const state_0 = new __compactRuntime.ContractState();
    let stateValue_0 = __compactRuntime.StateValue.newArray();
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    stateValue_0 = stateValue_0.arrayPush(__compactRuntime.StateValue.newNull());
    state_0.data = stateValue_0;
    state_0.setOperation('initializeOwner', new __compactRuntime.ContractOperation());
    state_0.setOperation('addContribution', new __compactRuntime.ContractOperation());
    state_0.setOperation('withdrawFunds', new __compactRuntime.ContractOperation());
    const context = {
      originalState: state_0,
      currentPrivateState: constructorContext_0.initialPrivateState,
      currentZswapLocalState: constructorContext_0.initialZswapLocalState,
      transactionContext: new __compactRuntime.QueryContext(state_0.data, __compactRuntime.dummyContractAddress())
    };
    const partialProofData = {
      input: { value: [], alignment: [] },
      output: undefined,
      publicTranscript: [],
      privateTranscriptOutputs: []
    };
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_19.toValue(0n),
                                                                            alignment: _descriptor_19.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newMap(
                                        new __compactRuntime.StateMap()
                                      ).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_19.toValue(1n),
                                                                            alignment: _descriptor_19.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(0n),
                                                                            alignment: _descriptor_3.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_19.toValue(2n),
                                                                            alignment: _descriptor_19.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_4.toValue({ nonce: new Uint8Array(32), color: new Uint8Array(32), value: 0n, mt_index: 0n }),
                                                                            alignment: _descriptor_4.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_19.toValue(3n),
                                                                            alignment: _descriptor_19.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(0n),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_19.toValue(4n),
                                                                            alignment: _descriptor_19.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(new Uint8Array(32)),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_19.toValue(5n),
                                                                            alignment: _descriptor_19.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue({ is_some: false, value: { bytes: new Uint8Array(32) } }),
                                                                            alignment: _descriptor_7.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    const tmp_0 = this.#_some_0(context,
                                partialProofData,
                                this.#_own_public_key_0(context,
                                                        partialProofData));
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_19.toValue(5n),
                                                                            alignment: _descriptor_19.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_7.toValue(tmp_0),
                                                                            alignment: _descriptor_7.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    const tmp_1 = 30n;
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_19.toValue(3n),
                                                                            alignment: _descriptor_19.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_0.toValue(tmp_1),
                                                                            alignment: _descriptor_0.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    const tmp_2 = 1n;
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_19.toValue(1n),
                                                alignment: _descriptor_19.alignment() } }] } },
                     { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_8.toValue(tmp_2),
                                              alignment: _descriptor_8.alignment() }
                                              .value
                                          )) } },
                     { ins: { cached: true, n: 1 } }]);
    state_0.data = context.transactionContext.state;
    return {
      currentContractState: state_0,
      currentPrivateState: context.currentPrivateState,
      currentZswapLocalState: context.currentZswapLocalState
    }
  }
  #_some_0(context, partialProofData, value_0) {
    return { is_some: true, value: value_0 };
  }
  #_some_1(context, partialProofData, value_0) {
    return { is_some: true, value: value_0 };
  }
  #_none_0(context, partialProofData) {
    return { is_some: false,
             value:
               { nonce: new Uint8Array(32), color: new Uint8Array(32), value: 0n } };
  }
  #_left_0(context, partialProofData, value_0) {
    return { is_left: true, left: value_0, right: { bytes: new Uint8Array(32) } };
  }
  #_right_0(context, partialProofData, value_0) {
    return { is_left: false, left: { bytes: new Uint8Array(32) }, right: value_0 };
  }
  #_transient_hash_0(context, partialProofData, value_0) {
    const result_0 = __compactRuntime.transientHash(_descriptor_18, value_0);
    return result_0;
  }
  #_persistent_hash_0(context, partialProofData, value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_16, value_0);
    return result_0;
  }
  #_persistent_hash_1(context, partialProofData, value_0) {
    const result_0 = __compactRuntime.persistentHash(_descriptor_17, value_0);
    return result_0;
  }
  #_degrade_to_transient_0(context, partialProofData, x_0) {
    const result_0 = __compactRuntime.degradeToTransient(x_0);
    return result_0;
  }
  #_upgrade_from_transient_0(context, partialProofData, x_0) {
    const result_0 = __compactRuntime.upgradeFromTransient(x_0);
    return result_0;
  }
  #_own_public_key_0(context, partialProofData) {
    const result_0 = __compactRuntime.ownPublicKey(context);
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_6.toValue(result_0),
      alignment: _descriptor_6.alignment()
    });
    return result_0;
  }
  #_create_zswap_input_0(context, partialProofData, coin_0) {
    const result_0 = __compactRuntime.createZswapInput(context, coin_0);
    partialProofData.privateTranscriptOutputs.push({
      value: [],
      alignment: []
    });
    return result_0;
  }
  #_create_zswap_output_0(context, partialProofData, coin_0, recipient_0) {
    const result_0 = __compactRuntime.createZswapOutput(context,
                                                        coin_0,
                                                        recipient_0);
    partialProofData.privateTranscriptOutputs.push({
      value: [],
      alignment: []
    });
    return result_0;
  }
  #_receive_0(context, partialProofData, coin_0) {
    const recipient_0 = this.#_right_0(context,
                                       partialProofData,
                                       _descriptor_10.fromValue(Contract._query(context,
                                                                                partialProofData,
                                                                                [
                                                                                 { dup: { n: 2 } },
                                                                                 { idx: { cached: true,
                                                                                          pushPath: false,
                                                                                          path: [
                                                                                                 { tag: 'value',
                                                                                                   value: { value: _descriptor_19.toValue(0n),
                                                                                                            alignment: _descriptor_19.alignment() } }] } },
                                                                                 { popeq: { cached: true,
                                                                                            result: undefined } }]).value));
    this.#_create_zswap_output_0(context, partialProofData, coin_0, recipient_0);
    const tmp_0 = this.#_coin_commitment_0(context,
                                           partialProofData,
                                           coin_0,
                                           recipient_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_19.toValue(1n),
                                                alignment: _descriptor_19.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tmp_0),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    return [];
  }
  #_send_0(context, partialProofData, input_0, recipient_0, value_0) {
    const self_addr_0 = _descriptor_10.fromValue(Contract._query(context,
                                                                 partialProofData,
                                                                 [
                                                                  { dup: { n: 2 } },
                                                                  { idx: { cached: true,
                                                                           pushPath: false,
                                                                           path: [
                                                                                  { tag: 'value',
                                                                                    value: { value: _descriptor_19.toValue(0n),
                                                                                             alignment: _descriptor_19.alignment() } }] } },
                                                                  { popeq: { cached: true,
                                                                             result: undefined } }]).value);
    this.#_create_zswap_input_0(context, partialProofData, input_0);
    const tmp_0 = this.#_coin_nullifier_0(context,
                                          partialProofData,
                                          this.#_downcast_qualified_coin_0(context,
                                                                           partialProofData,
                                                                           input_0),
                                          self_addr_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_19.toValue(0n),
                                                alignment: _descriptor_19.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tmp_0),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    let t_0;
    const change_0 = (t_0 = input_0.value,
                      (__compactRuntime.assert(!(t_0 < value_0),
                                               'result of subtraction would be negative'),
                       t_0 - value_0));
    const output_0 = { nonce:
                         this.#_upgrade_from_transient_0(context,
                                                         partialProofData,
                                                         this.#_transient_hash_0(context,
                                                                                 partialProofData,
                                                                                 [__compactRuntime.convert_Uint8Array_to_bigint(28,
                                                                                                                                new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 107, 101, 114, 110, 101, 108, 58, 110, 111, 110, 99, 101, 95, 101, 118, 111, 108, 118, 101])),
                                                                                  this.#_degrade_to_transient_0(context,
                                                                                                                partialProofData,
                                                                                                                input_0.nonce)])),
                       color: input_0.color,
                       value: value_0 };
    this.#_create_zswap_output_0(context,
                                 partialProofData,
                                 output_0,
                                 recipient_0);
    const tmp_1 = this.#_coin_commitment_0(context,
                                           partialProofData,
                                           output_0,
                                           recipient_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_19.toValue(2n),
                                                alignment: _descriptor_19.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tmp_1),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    if (this.#_equal_0(change_0, 0n)) {
      return { change: this.#_none_0(context, partialProofData), sent: output_0 };
    } else {
      const change_coin_0 = { nonce:
                                this.#_upgrade_from_transient_0(context,
                                                                partialProofData,
                                                                this.#_transient_hash_0(context,
                                                                                        partialProofData,
                                                                                        [__compactRuntime.convert_Uint8Array_to_bigint(30,
                                                                                                                                       new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 107, 101, 114, 110, 101, 108, 58, 110, 111, 110, 99, 101, 95, 101, 118, 111, 108, 118, 101, 47, 50])),
                                                                                         this.#_degrade_to_transient_0(context,
                                                                                                                       partialProofData,
                                                                                                                       input_0.nonce)])),
                              color: input_0.color,
                              value: change_0 };
      this.#_create_zswap_output_0(context,
                                   partialProofData,
                                   change_coin_0,
                                   this.#_right_0(context,
                                                  partialProofData,
                                                  self_addr_0));
      const cm_0 = this.#_coin_commitment_0(context,
                                            partialProofData,
                                            change_coin_0,
                                            this.#_right_0(context,
                                                           partialProofData,
                                                           self_addr_0));
      Contract._query(context,
                      partialProofData,
                      [
                       { swap: { n: 0 } },
                       { idx: { cached: true,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_19.toValue(2n),
                                                  alignment: _descriptor_19.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(cm_0),
                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newNull().encode() } },
                       { ins: { cached: true, n: 2 } },
                       { swap: { n: 0 } }]);
      Contract._query(context,
                      partialProofData,
                      [
                       { swap: { n: 0 } },
                       { idx: { cached: true,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_19.toValue(1n),
                                                  alignment: _descriptor_19.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(cm_0),
                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newNull().encode() } },
                       { ins: { cached: true, n: 2 } },
                       { swap: { n: 0 } }]);
      return { change: this.#_some_1(context, partialProofData, change_coin_0),
               sent: output_0 };
    }
  }
  #_merge_coin_0(context, partialProofData, a_0, b_0) {
    const self_addr_0 = _descriptor_10.fromValue(Contract._query(context,
                                                                 partialProofData,
                                                                 [
                                                                  { dup: { n: 2 } },
                                                                  { idx: { cached: true,
                                                                           pushPath: false,
                                                                           path: [
                                                                                  { tag: 'value',
                                                                                    value: { value: _descriptor_19.toValue(0n),
                                                                                             alignment: _descriptor_19.alignment() } }] } },
                                                                  { popeq: { cached: true,
                                                                             result: undefined } }]).value);
    this.#_create_zswap_input_0(context, partialProofData, a_0);
    const tmp_0 = this.#_coin_nullifier_0(context,
                                          partialProofData,
                                          this.#_downcast_qualified_coin_0(context,
                                                                           partialProofData,
                                                                           a_0),
                                          self_addr_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_19.toValue(0n),
                                                alignment: _descriptor_19.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tmp_0),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    this.#_create_zswap_input_0(context, partialProofData, b_0);
    const tmp_1 = this.#_coin_nullifier_0(context,
                                          partialProofData,
                                          this.#_downcast_qualified_coin_0(context,
                                                                           partialProofData,
                                                                           b_0),
                                          self_addr_0);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_19.toValue(0n),
                                                alignment: _descriptor_19.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tmp_1),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    __compactRuntime.assert(this.#_equal_1(a_0.color, b_0.color),
                            'Can only merge coins of the same color');
    const new_coin_0 = { nonce:
                           this.#_upgrade_from_transient_0(context,
                                                           partialProofData,
                                                           this.#_transient_hash_0(context,
                                                                                   partialProofData,
                                                                                   [__compactRuntime.convert_Uint8Array_to_bigint(28,
                                                                                                                                  new Uint8Array([109, 105, 100, 110, 105, 103, 104, 116, 58, 107, 101, 114, 110, 101, 108, 58, 110, 111, 110, 99, 101, 95, 101, 118, 111, 108, 118, 101])),
                                                                                    this.#_degrade_to_transient_0(context,
                                                                                                                  partialProofData,
                                                                                                                  a_0.nonce)])),
                         color: a_0.color,
                         value:
                           ((t1) => {
                             if (t1 > 340282366920938463463374607431768211455n)
                               throw new __compactRuntime.CompactError('compiler/standard-library.compact line 194, char 29: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 340282366920938463463374607431768211455');
                             return t1;
                           })(a_0.value + b_0.value) };
    this.#_create_zswap_output_0(context,
                                 partialProofData,
                                 new_coin_0,
                                 this.#_right_0(context,
                                                partialProofData,
                                                self_addr_0));
    const cm_0 = this.#_coin_commitment_0(context,
                                          partialProofData,
                                          new_coin_0,
                                          this.#_right_0(context,
                                                         partialProofData,
                                                         self_addr_0));
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_19.toValue(2n),
                                                alignment: _descriptor_19.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(cm_0),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    Contract._query(context,
                    partialProofData,
                    [
                     { swap: { n: 0 } },
                     { idx: { cached: true,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_19.toValue(1n),
                                                alignment: _descriptor_19.alignment() } }] } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(cm_0),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newNull().encode() } },
                     { ins: { cached: true, n: 2 } },
                     { swap: { n: 0 } }]);
    return new_coin_0;
  }
  #_merge_coin_immediate_0(context, partialProofData, a_0, b_0) {
    return this.#_merge_coin_0(context,
                               partialProofData,
                               a_0,
                               this.#_upcast_qualified_coin_0(context,
                                                              partialProofData,
                                                              b_0));
  }
  #_downcast_qualified_coin_0(context, partialProofData, coin_0) {
    return { nonce: coin_0.nonce, color: coin_0.color, value: coin_0.value };
  }
  #_upcast_qualified_coin_0(context, partialProofData, coin_0) {
    return { nonce: coin_0.nonce,
             color: coin_0.color,
             value: coin_0.value,
             mt_index: 0n };
  }
  #_coin_commitment_0(context, partialProofData, coin_0, recipient_0) {
    return this.#_persistent_hash_0(context,
                                    partialProofData,
                                    { info: coin_0,
                                      data_type: recipient_0.is_left,
                                      data:
                                        recipient_0.is_left?
                                        recipient_0.left.bytes :
                                        recipient_0.right.bytes,
                                      domain_sep:
                                        new Uint8Array([109, 100, 110, 58, 99, 99]) });
  }
  #_coin_nullifier_0(context, partialProofData, coin_0, addr_0) {
    return this.#_persistent_hash_0(context,
                                    partialProofData,
                                    { info: coin_0,
                                      data_type: false,
                                      data: addr_0.bytes,
                                      domain_sep:
                                        new Uint8Array([109, 100, 110, 58, 99, 110]) });
  }
  #_local_secrete_key_0(context, partialProofData) {
    const witnessContext_0 = __compactRuntime.witnessContext(ledger(context.transactionContext.state), context.currentPrivateState, context.transactionContext.address);
    const [nextPrivateState_0, result_0] = this.witnesses.local_secrete_key(witnessContext_0);
    context.currentPrivateState = nextPrivateState_0;
    if (!(result_0.buffer instanceof ArrayBuffer && result_0.BYTES_PER_ELEMENT === 1 && result_0.length === 32))
      __compactRuntime.type_error('local_secrete_key',
                                  'return value',
                                  'src/cfunding.compact line 21, char 1',
                                  'Bytes<32>',
                                  result_0)
    partialProofData.privateTranscriptOutputs.push({
      value: _descriptor_1.toValue(result_0),
      alignment: _descriptor_1.alignment()
    });
    return result_0;
  }
  #_initializeOwner_0(context, partialProofData) {
    const tmp_0 = this.#_public_key_0(context,
                                      partialProofData,
                                      this.#_local_secrete_key_0(context,
                                                                 partialProofData),
                                      __compactRuntime.convert_bigint_to_Uint8Array(32,
                                                                                    _descriptor_3.fromValue(Contract._query(context,
                                                                                                                            partialProofData,
                                                                                                                            [
                                                                                                                             { dup: { n: 0 } },
                                                                                                                             { idx: { cached: false,
                                                                                                                                      pushPath: false,
                                                                                                                                      path: [
                                                                                                                                             { tag: 'value',
                                                                                                                                               value: { value: _descriptor_19.toValue(1n),
                                                                                                                                                        alignment: _descriptor_19.alignment() } }] } },
                                                                                                                             { popeq: { cached: true,
                                                                                                                                        result: undefined } }]).value)));
    Contract._query(context,
                    partialProofData,
                    [
                     { push: { storage: false,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_19.toValue(4n),
                                                                            alignment: _descriptor_19.alignment() }).encode() } },
                     { push: { storage: true,
                               value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(tmp_0),
                                                                            alignment: _descriptor_1.alignment() }).encode() } },
                     { ins: { cached: false, n: 1 } }]);
    return [];
  }
  #_addContribution_0(context, partialProofData, coin_0) {
    __compactRuntime.assert(_descriptor_4.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_19.toValue(2n),
                                                                                                alignment: _descriptor_19.alignment() } }] } },
                                                                     { popeq: { cached: false,
                                                                                result: undefined } }]).value).value
                            <
                            _descriptor_0.fromValue(Contract._query(context,
                                                                    partialProofData,
                                                                    [
                                                                     { dup: { n: 0 } },
                                                                     { idx: { cached: false,
                                                                              pushPath: false,
                                                                              path: [
                                                                                     { tag: 'value',
                                                                                       value: { value: _descriptor_19.toValue(3n),
                                                                                                alignment: _descriptor_19.alignment() } }] } },
                                                                     { popeq: { cached: false,
                                                                                result: undefined } }]).value),
                            'Funding Pool is closed');
    __compactRuntime.assert(5n < coin_0.value, 'Must be more than 5 tDUST');
    this.#_receive_0(context, partialProofData, coin_0);
    const pk_0 = this.#_public_key_0(context,
                                     partialProofData,
                                     this.#_local_secrete_key_0(context,
                                                                partialProofData),
                                     __compactRuntime.convert_bigint_to_Uint8Array(32,
                                                                                   _descriptor_3.fromValue(Contract._query(context,
                                                                                                                           partialProofData,
                                                                                                                           [
                                                                                                                            { dup: { n: 0 } },
                                                                                                                            { idx: { cached: false,
                                                                                                                                     pushPath: false,
                                                                                                                                     path: [
                                                                                                                                            { tag: 'value',
                                                                                                                                              value: { value: _descriptor_19.toValue(1n),
                                                                                                                                                       alignment: _descriptor_19.alignment() } }] } },
                                                                                                                            { popeq: { cached: true,
                                                                                                                                       result: undefined } }]).value)));
    if (_descriptor_5.fromValue(Contract._query(context,
                                                partialProofData,
                                                [
                                                 { dup: { n: 0 } },
                                                 { idx: { cached: false,
                                                          pushPath: false,
                                                          path: [
                                                                 { tag: 'value',
                                                                   value: { value: _descriptor_19.toValue(0n),
                                                                            alignment: _descriptor_19.alignment() } }] } },
                                                 { push: { storage: false,
                                                           value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(pk_0),
                                                                                                        alignment: _descriptor_1.alignment() }).encode() } },
                                                 'member',
                                                 { popeq: { cached: true,
                                                            result: undefined } }]).value))
    {
      const currentAmt_0 = _descriptor_2.fromValue(Contract._query(context,
                                                                   partialProofData,
                                                                   [
                                                                    { dup: { n: 0 } },
                                                                    { idx: { cached: false,
                                                                             pushPath: false,
                                                                             path: [
                                                                                    { tag: 'value',
                                                                                      value: { value: _descriptor_19.toValue(0n),
                                                                                               alignment: _descriptor_19.alignment() } }] } },
                                                                    { idx: { cached: false,
                                                                             pushPath: false,
                                                                             path: [
                                                                                    { tag: 'value',
                                                                                      value: { value: _descriptor_1.toValue(pk_0),
                                                                                               alignment: _descriptor_1.alignment() } }] } },
                                                                    { popeq: { cached: false,
                                                                               result: undefined } }]).value);
      const tmp_0 = ((t1) => {
                      if (t1 > 340282366920938463463374607431768211455n)
                        throw new __compactRuntime.CompactError('src/cfunding.compact line 38, char 33: cast from unsigned value to smaller unsigned value failed: ' + t1 + ' is greater than 340282366920938463463374607431768211455');
                      return t1;
                    })(currentAmt_0 + coin_0.value);
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_19.toValue(0n),
                                                  alignment: _descriptor_19.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(pk_0),
                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(tmp_0),
                                                                              alignment: _descriptor_2.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
      const tmp_1 = this.#_merge_coin_immediate_0(context,
                                                  partialProofData,
                                                  _descriptor_4.fromValue(Contract._query(context,
                                                                                          partialProofData,
                                                                                          [
                                                                                           { dup: { n: 0 } },
                                                                                           { idx: { cached: false,
                                                                                                    pushPath: false,
                                                                                                    path: [
                                                                                                           { tag: 'value',
                                                                                                             value: { value: _descriptor_19.toValue(2n),
                                                                                                                      alignment: _descriptor_19.alignment() } }] } },
                                                                                           { popeq: { cached: false,
                                                                                                      result: undefined } }]).value),
                                                  coin_0);
      const tmp_2 = this.#_right_0(context,
                                   partialProofData,
                                   _descriptor_10.fromValue(Contract._query(context,
                                                                            partialProofData,
                                                                            [
                                                                             { dup: { n: 2 } },
                                                                             { idx: { cached: true,
                                                                                      pushPath: false,
                                                                                      path: [
                                                                                             { tag: 'value',
                                                                                               value: { value: _descriptor_19.toValue(0n),
                                                                                                        alignment: _descriptor_19.alignment() } }] } },
                                                                             { popeq: { cached: true,
                                                                                        result: undefined } }]).value));
      Contract._query(context,
                      partialProofData,
                      [
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_19.toValue(2n),
                                                                              alignment: _descriptor_19.alignment() }).encode() } },
                       { dup: { n: 3 } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                              { value: _descriptor_9.toValue(tmp_1),
                                                                                alignment: _descriptor_9.alignment() },
                                                                              { value: _descriptor_11.toValue(tmp_2),
                                                                                alignment: _descriptor_11.alignment() }
                                                                            )).encode() } },
                       { idx: { cached: true,
                                pushPath: false,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_19.toValue(1n),
                                                  alignment: _descriptor_19.alignment() } },
                                       { tag: 'stack' }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue(tmp_1),
                                                                              alignment: _descriptor_9.alignment() }).encode() } },
                       { swap: { n: 0 } },
                       { concat: { cached: true, n: 91 } },
                       { ins: { cached: false, n: 1 } }]);
    } else {
      const tmp_3 = coin_0.value;
      Contract._query(context,
                      partialProofData,
                      [
                       { idx: { cached: false,
                                pushPath: true,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_19.toValue(0n),
                                                  alignment: _descriptor_19.alignment() } }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(pk_0),
                                                                              alignment: _descriptor_1.alignment() }).encode() } },
                       { push: { storage: true,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_2.toValue(tmp_3),
                                                                              alignment: _descriptor_2.alignment() }).encode() } },
                       { ins: { cached: false, n: 1 } },
                       { ins: { cached: true, n: 1 } }]);
      const tmp_4 = this.#_merge_coin_immediate_0(context,
                                                  partialProofData,
                                                  _descriptor_4.fromValue(Contract._query(context,
                                                                                          partialProofData,
                                                                                          [
                                                                                           { dup: { n: 0 } },
                                                                                           { idx: { cached: false,
                                                                                                    pushPath: false,
                                                                                                    path: [
                                                                                                           { tag: 'value',
                                                                                                             value: { value: _descriptor_19.toValue(2n),
                                                                                                                      alignment: _descriptor_19.alignment() } }] } },
                                                                                           { popeq: { cached: false,
                                                                                                      result: undefined } }]).value),
                                                  coin_0);
      const tmp_5 = this.#_right_0(context,
                                   partialProofData,
                                   _descriptor_10.fromValue(Contract._query(context,
                                                                            partialProofData,
                                                                            [
                                                                             { dup: { n: 2 } },
                                                                             { idx: { cached: true,
                                                                                      pushPath: false,
                                                                                      path: [
                                                                                             { tag: 'value',
                                                                                               value: { value: _descriptor_19.toValue(0n),
                                                                                                        alignment: _descriptor_19.alignment() } }] } },
                                                                             { popeq: { cached: true,
                                                                                        result: undefined } }]).value));
      Contract._query(context,
                      partialProofData,
                      [
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_19.toValue(2n),
                                                                              alignment: _descriptor_19.alignment() }).encode() } },
                       { dup: { n: 3 } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell(__compactRuntime.coinCommitment(
                                                                              { value: _descriptor_9.toValue(tmp_4),
                                                                                alignment: _descriptor_9.alignment() },
                                                                              { value: _descriptor_11.toValue(tmp_5),
                                                                                alignment: _descriptor_11.alignment() }
                                                                            )).encode() } },
                       { idx: { cached: true,
                                pushPath: false,
                                path: [
                                       { tag: 'value',
                                         value: { value: _descriptor_19.toValue(1n),
                                                  alignment: _descriptor_19.alignment() } },
                                       { tag: 'stack' }] } },
                       { push: { storage: false,
                                 value: __compactRuntime.StateValue.newCell({ value: _descriptor_9.toValue(tmp_4),
                                                                              alignment: _descriptor_9.alignment() }).encode() } },
                       { swap: { n: 0 } },
                       { concat: { cached: true, n: 91 } },
                       { ins: { cached: false, n: 1 } }]);
    }
    return [];
  }
  #_withdrawFunds_0(context, partialProofData) {
    __compactRuntime.assert(!(_descriptor_4.fromValue(Contract._query(context,
                                                                      partialProofData,
                                                                      [
                                                                       { dup: { n: 0 } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_19.toValue(2n),
                                                                                                  alignment: _descriptor_19.alignment() } }] } },
                                                                       { popeq: { cached: false,
                                                                                  result: undefined } }]).value).value
                              <
                              _descriptor_0.fromValue(Contract._query(context,
                                                                      partialProofData,
                                                                      [
                                                                       { dup: { n: 0 } },
                                                                       { idx: { cached: false,
                                                                                pushPath: false,
                                                                                path: [
                                                                                       { tag: 'value',
                                                                                         value: { value: _descriptor_19.toValue(3n),
                                                                                                  alignment: _descriptor_19.alignment() } }] } },
                                                                       { popeq: { cached: false,
                                                                                  result: undefined } }]).value)),
                            "Can't withdraw fund: Less than Fund target");
    const requestingUserPk_0 = this.#_public_key_0(context,
                                                   partialProofData,
                                                   this.#_local_secrete_key_0(context,
                                                                              partialProofData),
                                                   __compactRuntime.convert_bigint_to_Uint8Array(32,
                                                                                                 _descriptor_3.fromValue(Contract._query(context,
                                                                                                                                         partialProofData,
                                                                                                                                         [
                                                                                                                                          { dup: { n: 0 } },
                                                                                                                                          { idx: { cached: false,
                                                                                                                                                   pushPath: false,
                                                                                                                                                   path: [
                                                                                                                                                          { tag: 'value',
                                                                                                                                                            value: { value: _descriptor_19.toValue(1n),
                                                                                                                                                                     alignment: _descriptor_19.alignment() } }] } },
                                                                                                                                          { popeq: { cached: true,
                                                                                                                                                     result: undefined } }]).value)));
    __compactRuntime.assert(this.#_equal_2(_descriptor_1.fromValue(Contract._query(context,
                                                                                   partialProofData,
                                                                                   [
                                                                                    { dup: { n: 0 } },
                                                                                    { idx: { cached: false,
                                                                                             pushPath: false,
                                                                                             path: [
                                                                                                    { tag: 'value',
                                                                                                      value: { value: _descriptor_19.toValue(4n),
                                                                                                               alignment: _descriptor_19.alignment() } }] } },
                                                                                    { popeq: { cached: false,
                                                                                               result: undefined } }]).value),
                                           requestingUserPk_0),
                            'Unauthorized');
    this.#_send_0(context,
                  partialProofData,
                  _descriptor_4.fromValue(Contract._query(context,
                                                          partialProofData,
                                                          [
                                                           { dup: { n: 0 } },
                                                           { idx: { cached: false,
                                                                    pushPath: false,
                                                                    path: [
                                                                           { tag: 'value',
                                                                             value: { value: _descriptor_19.toValue(2n),
                                                                                      alignment: _descriptor_19.alignment() } }] } },
                                                           { popeq: { cached: false,
                                                                      result: undefined } }]).value),
                  this.#_left_0(context,
                                partialProofData,
                                _descriptor_7.fromValue(Contract._query(context,
                                                                        partialProofData,
                                                                        [
                                                                         { dup: { n: 0 } },
                                                                         { idx: { cached: false,
                                                                                  pushPath: false,
                                                                                  path: [
                                                                                         { tag: 'value',
                                                                                           value: { value: _descriptor_19.toValue(5n),
                                                                                                    alignment: _descriptor_19.alignment() } }] } },
                                                                         { popeq: { cached: false,
                                                                                    result: undefined } }]).value).value),
                  _descriptor_4.fromValue(Contract._query(context,
                                                          partialProofData,
                                                          [
                                                           { dup: { n: 0 } },
                                                           { idx: { cached: false,
                                                                    pushPath: false,
                                                                    path: [
                                                                           { tag: 'value',
                                                                             value: { value: _descriptor_19.toValue(2n),
                                                                                      alignment: _descriptor_19.alignment() } }] } },
                                                           { popeq: { cached: false,
                                                                      result: undefined } }]).value).value);
    const tmp_0 = 1n;
    Contract._query(context,
                    partialProofData,
                    [
                     { idx: { cached: false,
                              pushPath: true,
                              path: [
                                     { tag: 'value',
                                       value: { value: _descriptor_19.toValue(1n),
                                                alignment: _descriptor_19.alignment() } }] } },
                     { addi: { immediate: parseInt(__compactRuntime.valueToBigInt(
                                            { value: _descriptor_8.toValue(tmp_0),
                                              alignment: _descriptor_8.alignment() }
                                              .value
                                          )) } },
                     { ins: { cached: true, n: 1 } }]);
    return [];
  }
  #_public_key_0(context, partialProofData, sk_0, rInstance_0) {
    return this.#_persistent_hash_1(context,
                                    partialProofData,
                                    [this.#_persistent_hash_1(context,
                                                              partialProofData,
                                                              [new Uint8Array([99, 102, 117, 110, 100, 105, 110, 103, 58, 112, 107, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                                                               rInstance_0]),
                                     sk_0]);
  }
  #_equal_0(x0, y0) {
    if (x0 !== y0) return false;
    return true;
  }
  #_equal_1(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) return false;
    return true;
  }
  #_equal_2(x0, y0) {
    if (!x0.every((x, i) => y0[i] === x)) return false;
    return true;
  }
  static _query(context, partialProofData, prog) {
    var res;
    try {
      res = context.transactionContext.query(prog, __compactRuntime.CostModel.dummyCostModel());
    } catch (err) {
      throw new __compactRuntime.CompactError(err.toString());
    }
    context.transactionContext = res.context;
    var reads = res.events.filter((e) => e.tag === 'read');
    var i = 0;
    partialProofData.publicTranscript = partialProofData.publicTranscript.concat(prog.map((op) => {
      if(typeof(op) === 'object' && 'popeq' in op) {
        return { popeq: {
          ...op.popeq,
          result: reads[i++].content,
        } };
      } else {
        return op;
      }
    }));
    if(res.events.length == 1 && res.events[0].tag === 'read') {
      return res.events[0].content;
    } else {
      return res.events;
    }
  }
}
function ledger(state) {
  const context = {
    originalState: state,
    transactionContext: new __compactRuntime.QueryContext(state, __compactRuntime.dummyContractAddress())
  };
  const partialProofData = {
    input: { value: [], alignment: [] },
    output: undefined,
    publicTranscript: [],
    privateTranscriptOutputs: []
  };
  return {
    contributors: {
      isEmpty(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`is_empty: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_5.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_19.toValue(0n),
                                                                                   alignment: _descriptor_19.alignment() } }] } },
                                                        'size',
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_3.toValue(0n),
                                                                                                               alignment: _descriptor_3.alignment() }).encode() } },
                                                        'eq',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      size(...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`size: expected 0 arguments, received ${args_0.length}`);
        return _descriptor_3.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_19.toValue(0n),
                                                                                   alignment: _descriptor_19.alignment() } }] } },
                                                        'size',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      member(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`member: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32))
          __compactRuntime.type_error('member',
                                      'argument 1',
                                      'src/cfunding.compact line 7, char 1',
                                      'Bytes<32>',
                                      key_0)
        return _descriptor_5.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_19.toValue(0n),
                                                                                   alignment: _descriptor_19.alignment() } }] } },
                                                        { push: { storage: false,
                                                                  value: __compactRuntime.StateValue.newCell({ value: _descriptor_1.toValue(key_0),
                                                                                                               alignment: _descriptor_1.alignment() }).encode() } },
                                                        'member',
                                                        { popeq: { cached: true,
                                                                   result: undefined } }]).value);
      },
      lookup(...args_0) {
        if (args_0.length !== 1)
          throw new __compactRuntime.CompactError(`lookup: expected 1 argument, received ${args_0.length}`);
        const key_0 = args_0[0];
        if (!(key_0.buffer instanceof ArrayBuffer && key_0.BYTES_PER_ELEMENT === 1 && key_0.length === 32))
          __compactRuntime.type_error('lookup',
                                      'argument 1',
                                      'src/cfunding.compact line 7, char 1',
                                      'Bytes<32>',
                                      key_0)
        return _descriptor_2.fromValue(Contract._query(context,
                                                       partialProofData,
                                                       [
                                                        { dup: { n: 0 } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_19.toValue(0n),
                                                                                   alignment: _descriptor_19.alignment() } }] } },
                                                        { idx: { cached: false,
                                                                 pushPath: false,
                                                                 path: [
                                                                        { tag: 'value',
                                                                          value: { value: _descriptor_1.toValue(key_0),
                                                                                   alignment: _descriptor_1.alignment() } }] } },
                                                        { popeq: { cached: false,
                                                                   result: undefined } }]).value);
      },
      [Symbol.iterator](...args_0) {
        if (args_0.length !== 0)
          throw new __compactRuntime.CompactError(`iter: expected 0 arguments, received ${args_0.length}`);
        const self_0 = state.asArray()[0];
        return self_0.asMap().keys().map(  (key) => {    const value = self_0.asMap().get(key).asCell();    return [      _descriptor_1.fromValue(key.value),      _descriptor_2.fromValue(value.value)    ];  })[Symbol.iterator]();
      }
    },
    get instance() {
      return _descriptor_3.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_19.toValue(1n),
                                                                                 alignment: _descriptor_19.alignment() } }] } },
                                                      { popeq: { cached: true,
                                                                 result: undefined } }]).value);
    },
    get fundPoolTotal() {
      return _descriptor_4.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_19.toValue(2n),
                                                                                 alignment: _descriptor_19.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    get fundGoal() {
      return _descriptor_0.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_19.toValue(3n),
                                                                                 alignment: _descriptor_19.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    get owner() {
      return _descriptor_1.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_19.toValue(4n),
                                                                                 alignment: _descriptor_19.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    },
    get ownerPublicKey() {
      return _descriptor_7.fromValue(Contract._query(context,
                                                     partialProofData,
                                                     [
                                                      { dup: { n: 0 } },
                                                      { idx: { cached: false,
                                                               pushPath: false,
                                                               path: [
                                                                      { tag: 'value',
                                                                        value: { value: _descriptor_19.toValue(5n),
                                                                                 alignment: _descriptor_19.alignment() } }] } },
                                                      { popeq: { cached: false,
                                                                 result: undefined } }]).value);
    }
  };
}
const _emptyContext = {
  originalState: new __compactRuntime.ContractState(),
  transactionContext: new __compactRuntime.QueryContext(new __compactRuntime.ContractState().data, __compactRuntime.dummyContractAddress())
};
const _dummyContract = new Contract({
  local_secrete_key: (...args) => undefined
});
const pureCircuits = {
  public_key: (...args_0) => _dummyContract.circuits.public_key(_emptyContext, ...args_0).result
};
const contractReferenceLocations = { tag: 'publicLedgerArray', indices: { } };
exports.Contract = Contract;
exports.ledger = ledger;
exports.pureCircuits = pureCircuits;
exports.contractReferenceLocations = contractReferenceLocations;
//# sourceMappingURL=index.cjs.map
