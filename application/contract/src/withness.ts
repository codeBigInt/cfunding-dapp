/* 
    * NB: The Ledger instance mported has to be from the index.cjs file which is generated from the compilation of the compact code
    * Its a type that is defined in the index.d.ts file to represent the edger state variables we defined and the constructor where provided
*/
import { Ledger } from "./managed/cfunding/contract/index.cjs"
/*
    * The withness-context is imported from the midnight-ntwrk/compact-runtime library provided by Midnight.js
*/
import { WitnessContext } from "@midnight-ntwrk/compact-runtime"


/* 
    * Define the type for the private state and then the function to create the state
*/

export type CFundingContractPrivateState = {
    readonly secrete_key: Uint8Array;
}

// Function to create the private key
export const createCFundingPrivateKey = (secrete_key: Uint8Array) => ({
    /* 
     * NB: The create private state fucnction take in the private key and retrurns it to the blockchain code as secerete key via the withness to * make it available for hashing as a mean of keepeing track of the user in the ledger
    */
    secrete_key
})
/* 
    * The exported withness object here make all our offchain dependendt withnesses available to the onchian code
*/
export const withnesses = {
    local_secrete_key: ({ privateState } : WitnessContext<Ledger, CFundingContractPrivateState>): [CFundingContractPrivateState, Uint8Array]=> [
        privateState,
        privateState.secrete_key
    ]
}