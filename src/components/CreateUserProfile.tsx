import React, { useState } from 'react';
import { createUserProfile } from '../solana/program';

const CreateUserProfile = () => {
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [profilePicture, setProfilePicture] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await createUserProfile(name, bio, profilePicture);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
            />
            <input
                type="text"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Bio"
            />
            <input
                type="text"
                value={profilePicture}
                onChange={(e) => setProfilePicture(e.target.value)}
                placeholder="Profile Picture URL"
            />
            <button type="submit">Create Profile</button>
        </form>
    );
};

export default CreateUserProfile;
