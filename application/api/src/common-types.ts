import { CFundingContractPrivateState, Contract, Witnesses, Ledger } from "@cfunding/cfunding-contract"
import { FoundContract } from "@midnight-ntwrk/midnight-js-contracts"
import { type MidnightProviders } from "@midnight-ntwrk/midnight-js-types"

export type PrivateStates = {
    readonly cfundingPrivateState: CFundingContractPrivateState
}


export type CFundingContract = Contract<CFundingContractPrivateState, Witnesses<CFundingContractPrivateState>>;
// Exporting the circuit functions to be callable 
export type CFundingCircuitKeys = Exclude<keyof CFundingContract['impureCircuits'], number | symbol>

// Exporting the keys or circuitts so they can be used fo tx submission
export type CFundingProviders = MidnightProviders<CFundingCircuitKeys, PrivateStates>;

//defining the type of a CFunding Contract tht has already been deployed
export type DeployedCFundingContract = FoundContract<CFundingContractPrivateState, CFundingContract>;

export type CFundingDerivedState = Pick<Ledger, "instance" | "contributors" | "owner" | "fundGoal" | "fundPoolTotal">
