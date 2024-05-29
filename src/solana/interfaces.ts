import { PublicKey } from '@solana/web3.js';

export class Comment {
    author: PublicKey;
    content: string;

    constructor(author: PublicKey, content: string) {
        this.author = author;
        this.content = content;
    }
}

export class Post {
    author: PublicKey;
    content: string;
    comments: Comment[];

    constructor(author: PublicKey, content: string, comments: Comment[]) {
        this.author = author;
        this.content = content;
        this.comments = comments;
    }
}

export class UserProfile {
    is_initialized: boolean;
    name: string;
    bio: string;
    profile_picture: string;
    address: PublicKey;
    friends: Set<PublicKey>;
    nft_owned: boolean;
    posts: Map<PublicKey, Post[]>;

    constructor(
        is_initialized: boolean,
        name: string,
        bio: string,
        profile_picture: string,
        address: PublicKey,
        friends: Set<PublicKey>,
        nft_owned: boolean,
        posts: Map<PublicKey, Post[]>
    ) {
        this.is_initialized = is_initialized;
        this.name = name;
        this.bio = bio;
        this.profile_picture = profile_picture;
        this.address = address;
        this.friends = friends;
        this.nft_owned = nft_owned;
        this.posts = posts;
    }
}
