import React, { useState } from 'react';
import { PublicKey } from '@solana/web3.js';
import { addComment } from '../solana/program';

const AddComment = ({ postAuthor, postIndex }: { postAuthor: PublicKey; postIndex: number }) => {
    const [content, setContent] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await addComment(postAuthor, postIndex, content);
        setContent('');
    };

    return (
        <form onSubmit={handleSubmit}>
      <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Add a comment..."
      />
            <button type="submit">Comment</button>
        </form>
    );
};

export default AddComment;
