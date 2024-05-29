import { Connection, PublicKey, clusterApiUrl, Keypair, Transaction, SystemProgram } from '@solana/web3.js';
import { Program, Provider, web3 } from '@project-serum/anchor';
import idl from './idl.json';

const programID = new PublicKey('YOUR_PROGRAM_ID');
const network = clusterApiUrl('devnet');
const provider = new Provider(new Connection(network, 'processed'), window.solana, 'processed');
const program = new Program(idl, programID, provider);

export async function createUserProfile(name: string, bio: string, profilePicture: string) {
    const user = Keypair.generate();
    const tx = new Transaction().add(
        program.instruction.createUserProfile(name, bio, profilePicture, {
            accounts: {
                userAccount: user.publicKey,
                systemProgram: SystemProgram.programId,
            },
            signers: [user],
        })
    );
    await provider.send(tx, [user]);
}

export async function writePost(content: string) {
    const user = Keypair.generate();
    const tx = new Transaction().add(
        program.instruction.writePost(content, {
            accounts: {
                userAccount: user.publicKey,
                systemProgram: SystemProgram.programId,
            },
            signers: [user],
        })
    );
    await provider.send(tx, [user]);
}

export async function addComment(postAuthor: PublicKey, postIndex: number, content: string) {
    const user = Keypair.generate();
    const tx = new Transaction().add(
        program.instruction.addComment(postAuthor, postIndex, content, {
            accounts: {
                userAccount: user.publicKey,
                systemProgram: SystemProgram.programId,
            },
            signers: [user],
        })
    );
    await provider.send(tx, [user]);
}
