import type * as __compactRuntime from '@midnight-ntwrk/compact-runtime';

export type Witnesses<T> = {
  local_secrete_key(context: __compactRuntime.WitnessContext<Ledger, T>): [T, Uint8Array];
}

export type ImpureCircuits<T> = {
  initializeOwner(context: __compactRuntime.CircuitContext<T>): __compactRuntime.CircuitResults<T, []>;
  addContribution(context: __compactRuntime.CircuitContext<T>,
                  coin_0: { nonce: Uint8Array, color: Uint8Array, value: bigint
                          }): __compactRuntime.CircuitResults<T, []>;
  withdrawFunds(context: __compactRuntime.CircuitContext<T>): __compactRuntime.CircuitResults<T, []>;
}

export type PureCircuits = {
  public_key(sk_0: Uint8Array, rInstance_0: Uint8Array): Uint8Array;
}

export type Circuits<T> = {
  initializeOwner(context: __compactRuntime.CircuitContext<T>): __compactRuntime.CircuitResults<T, []>;
  addContribution(context: __compactRuntime.CircuitContext<T>,
                  coin_0: { nonce: Uint8Array, color: Uint8Array, value: bigint
                          }): __compactRuntime.CircuitResults<T, []>;
  withdrawFunds(context: __compactRuntime.CircuitContext<T>): __compactRuntime.CircuitResults<T, []>;
  public_key(context: __compactRuntime.CircuitContext<T>,
             sk_0: Uint8Array,
             rInstance_0: Uint8Array): __compactRuntime.CircuitResults<T, Uint8Array>;
}

export type Ledger = {
  contributors: {
    isEmpty(): boolean;
    size(): bigint;
    member(key_0: Uint8Array): boolean;
    lookup(key_0: Uint8Array): bigint;
    [Symbol.iterator](): Iterator<[Uint8Array, bigint]>
  };
  readonly instance: bigint;
  readonly fundPoolTotal: { nonce: Uint8Array,
                            color: Uint8Array,
                            value: bigint,
                            mt_index: bigint
                          };
  readonly fundGoal: bigint;
  readonly owner: Uint8Array;
  readonly ownerPublicKey: { is_some: boolean, value: { bytes: Uint8Array } };
}

export type ContractReferenceLocations = any;

export declare const contractReferenceLocations : ContractReferenceLocations;

export declare class Contract<T, W extends Witnesses<T> = Witnesses<T>> {
  witnesses: W;
  circuits: Circuits<T>;
  impureCircuits: ImpureCircuits<T>;
  constructor(witnesses: W);
  initialState(context: __compactRuntime.ConstructorContext<T>): __compactRuntime.ConstructorResult<T>;
}

export declare function ledger(state: __compactRuntime.StateValue): Ledger;
export declare const pureCircuits: PureCircuits;
