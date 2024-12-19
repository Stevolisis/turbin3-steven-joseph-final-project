import { Connection, Keypair, PublicKey } from "@solana/web3.js";
import new_wallet from "./wallet.json";
import { AnchorProvider, Program, Wallet } from "@coral-xyz/anchor";
import { IDL, WbaPrereq } from "./programs/wba_prereq";

const keypair = Keypair.fromSecretKey(new Uint8Array(new_wallet));
const connection = new Connection("https://api.devnet.solana.com");
const github = Buffer.from("Stevolisis");
console.log("PublicKey: ", keypair.publicKey);

//Anchor
const provider = new AnchorProvider(connection, new Wallet(keypair), { commitment: "confirmed" });
const program: Program<WbaPrereq> = new Program(IDL, provider);

//PDA
const enrollmentSeeds = [Buffer.from("prereq"), keypair.publicKey.toBuffer()];
const [enrollmentKey, _bumb ] = PublicKey.findProgramAddressSync( enrollmentSeeds, program.programId );
console.log("enrollmentKey: ", enrollmentKey);

//Transaction
(async ()=>{
    try{
        const txHash = await program.methods.complete(github)
        .accounts({
            signer: keypair.publicKey
        })
        .signers([ keypair ])
        .rpc();
        console.log(`Success! Check out your TX here: https://explorer.solana.com/tx/${txHash}?cluster=devnet`);

    }catch (e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();

