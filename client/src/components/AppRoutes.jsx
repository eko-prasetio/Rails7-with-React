import React from "react";
import { Route, Routes } from "react-router-dom";
import PostsList from "../features/posts/PostsList";
import PostDetails from "../features/posts/PostDetails";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element= {<PostsList />} />
            <Route path="posts/:id" element= {<PostDetails />} />
            <Route path="/new" element= {<h1>New Post Form testing</h1>} />
        </Routes>
    );
}