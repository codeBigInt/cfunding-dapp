/*
    * NB: After compilation of the compact code the only file most useful to us allow interaction within the frontend and the backend is the index.cjs file
    * Becuase it holds the typescript representation of our compact code
*/
export * from "./managed/cfunding/contract/index.cjs"
export * from "./withness.js" 