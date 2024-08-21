# Verfy - Contracts

E-Mail Attachment authentication using Blockchain technology.

This is the repository that includes the code for the Smart Contracts. The frontend codebase can be found [here](https://github.com/marlykiwi/verfy).

## Setup

1. `git clone <url>`
2. `npm install`
3. `npx hardhat test`
4. `npx hardhat vars set INFURA_API_KEY`
5. `npx hardhat vars set SEPOLIA_PRIVATE_KEY`
6. `npx hardhat ignition deploy ignition/modules/Verfy.ts`

## How it works

To ensure the authenticity of E-Mail attachments we ask the sender to sign a SHA-256 hash of the attachment via Metamask. Once done, the document hash alongside the signature is stored in a Smart Contract on-chain.

The E-Mail recipient who knows the account address of the sender would download the E-Mail attachment once she received the E-Mail. Using our tool she can recompute the SHA-256 hash of the document which is then used to query the Smart Contract on-chain to retrieve the signature over such document. A signature verification using the account address known to the receiver reveals if the document was signed by the sender and is therefore safe to open.
