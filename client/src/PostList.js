import React, { useEffect, useState } from "react";
import PostForm from "./PostForm";
import Post from "./Post";

function PostList({ cryptids, locations }) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("/posts")
            .then((r) => r.json())
            .then((data) => setPosts(data));
    }, []);

    function handleAddPost(newPost) {
        setPosts([...posts, newPost])
    };

    function handleDeletePost(id) {
        const updatedPosts = posts.filter((post) => post.id !== id);
        setPosts(updatedPosts)
    };

    function handleUpdatePost(updatedPost) {
        const updatedPosts = posts.map((post) => {
            if (post.id === updatedPost.id) {
                return updatedPost
            } else {
                return post
            }
        })
        setPosts(updatedPosts)
    };

    return (
        <>
            <PostForm
                cryptids={cryptids}
                locations={locations}
                onAddPost={handleAddPost}
            />
            {posts.slice(0).reverse().map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    comment={post.comment}
                    postUser={post.user}
                    cryptid={post.cryptid}
                    location={post.location}
                    cryptidsEditForm={cryptids}
                    locationsEditForm={locations}
                    onPostDelete={handleDeletePost}
                    onUpdatePost={handleUpdatePost}
                />
            ))}
        </>
    )
}

export default PostList