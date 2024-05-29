import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useWallet } from "@solana/wallet-adapter-react";
import "./Profile.css";

const Profile: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { disconnect } = useWallet();

    const [username, setUsername] = useState("");
    const [walletAddress, setWalletAddress] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const [friendsCount, setFriendsCount] = useState(0);
    const [friendKey, setFriendKey] = useState("");
    const [friendsList, setFriendsList] = useState<string[]>([]);

    useEffect(() => {
        const storedUsername = localStorage.getItem("username");
        const storedWalletAddress = localStorage.getItem("walletAddress");
        const storedProfilePic = localStorage.getItem("profilePic");
        const storedFriends = localStorage.getItem("friendsList");

        if (storedUsername) {
            setUsername(storedUsername);
        }
        if (storedWalletAddress) {
            setWalletAddress(storedWalletAddress);
        }
        if (storedProfilePic) {
            setProfilePic(storedProfilePic);
        }
        if (storedFriends) {
            setFriendsList(JSON.parse(storedFriends));
            setFriendsCount(JSON.parse(storedFriends).length);
        }
    }, []);

    const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event: ProgressEvent<FileReader>) => {
                if (event.target?.result) {
                    const profilePicData = event.target.result as string;
                    setProfilePic(profilePicData);
                    localStorage.setItem("profilePic", profilePicData);
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newUsername = e.target.value;
        setUsername(newUsername);
        localStorage.setItem("username", newUsername);
    };

    const handleFriendKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFriendKey(e.target.value);
    };

    const handleAddFriend = () => {
        if (friendKey && !friendsList.includes(friendKey)) {
            const newFriendsList = [...friendsList, friendKey];
            setFriendsList(newFriendsList);
            setFriendsCount(newFriendsList.length);
            localStorage.setItem("friendsList", JSON.stringify(newFriendsList));
            setFriendKey("");
        }
    };

    const handleDisconnect = () => {
        disconnect();
        localStorage.removeItem("username");
        localStorage.removeItem("walletAddress");
        localStorage.removeItem("profilePic");
        localStorage.removeItem("friendsList");
        navigate("/");
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src={profilePic || "https://via.placeholder.com/150"} alt="User Avatar" className="profile-avatar" />
                <input
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={handleUsernameChange}
                    className="username-input"
                />
                <label htmlFor="file-upload" className="custom-file-upload">
                    Change Profile Picture
                </label>
                <input id="file-upload" type="file" accept="image/*" onChange={handleProfilePicChange} className="input-file" />
            </div>
            <div className="profile-details">
                <p><strong>Address:</strong> {walletAddress}</p>
                <p><strong>Number of Friends:</strong> {friendsCount}</p>
                <input
                    type="text"
                    placeholder="Enter friend key"
                    value={friendKey}
                    onChange={handleFriendKeyChange}
                    className="friend-key-input"
                />
                <button className="btn btn-primary" onClick={handleAddFriend}>Add Friend</button>
                <button className="btn btn-danger" onClick={handleDisconnect}>Remove Wallet</button>
            </div>
        </div>
    );
};

export default Profile;
