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
   git clone <your-repo-url>
   cd <repo-folder>
    ```

2. **Generate wallet.json**:
   ```bash
   solana-keygen new --outfile wallet.json
    ```

3. **Run the Enrollment Script**:
   ```bash
   ts-node enroll.ts
    ```

4. **Expected Output**:
   ```bash
   Success! Check your transaction: https://explorer.solana.com/tx/<transaction-hash>?cluster=devnet
    ```