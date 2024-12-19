## TX Link
```bash 
https://explorer.solana.com/tx/gcfNXj5YAgauV6vhkc73QPKXDNcspF3BWskhXPf2AVYLJEfSdD9R6xkXj4U36yLsk1fHRmmawHRYgZJBv1FYdTQ?cluster=devnet
```

# WBA Final Project

## Overview
This project interacts with the WBA program on the Solana Devnet. It demonstrates:
- Program Derived Addresses (PDA)
- Interface Definition Language (IDL)
- The Anchor Framework for Solana development

The script will enroll your GitHub username with the WBA program on the blockchain.

---

## **Setup and Execution Instructions**

1. **Clone the Repository**:
   ```bash
   git clone git@github.com:Stevolisis/turbin3-steven-joseph-final-project.git
    ```
    ```bash 
       cd turbin3-steven-joseph-final-project
    ```

2. **Install Repo**:
   ```bash
   yarn install
    ```

3. **Initialize typescript**:
   ```bash
   yarn tsc --init
    ```

4. **Add resolveJsonModule to tsconfig.json to load json files e.g wallet.json**:
   ```bash
   "resolveJsonModule": true
    ```

5. **Generate your wallet.json**:
   ```bash
   solana-keygen new --outfile wallet.json
    ```

6. **Request SOL using you wallet public key**:
   Head to https://faucet.solana.com and request SOL

3. **Run the Enrollment Script**:
   ```bash
   ts-node enroll.ts
    ```

4. **Expected Output**:
   ```bash
   Success! Check out your TX here: https://explorer.solana.com/tx/<transaction-hash>?cluster=devnet
    ```