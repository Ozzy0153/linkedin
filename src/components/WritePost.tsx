import React, { useState } from 'react';
import { writePost } from '../solana/program';

const WritePost = () => {
    const [content, setContent] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await writePost(content);
    };

    return (
        <form onSubmit={handleSubmit}>
      <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post..."
      />
            <button type="submit">Post</button>
        </form>
    );
};

export default WritePost;
