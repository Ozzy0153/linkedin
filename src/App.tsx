import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import CreateUserProfile from './components/CreateUserProfile';
import Addpost from './components/addPost/Addpost';
import AddComment from './components/AddComment';
import Home from './components/home/Home';

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/create-profile" element={<CreateUserProfile />} />
                    <Route path="/add-post" element={<Addpost />} />
                    <Route path="/add-comment/:postAuthor/:postIndex" element={<AddComment />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
