import React, { useEffect, useState } from "react";
import PostForm from "./PostForm";
import Post from "./Post";

function PostList() {

    const [posts, setPosts] = useState([])
    const [cryptids, setCryptids] = useState([])
    const [locations, setLocations] = useState([])

    useEffect(() => {
        fetch("/posts")
            .then((r) => r.json())
            .then(setPosts)
    }, []);

    useEffect(() => {
        fetch("/cryptids")
            .then((r) => r.json())
            .then(setCryptids)
    }, []);

    useEffect(() => {
        fetch("/locations")
            .then((r) => r.json())
            .then(setLocations)
    }, []);

    function handleAddPost(newPost) {
        console.log(newPost)
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
            <PostForm cryptids={cryptids} locations={locations} onAddPost={handleAddPost} />
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    comment={post.comment}
                    user={post.user.username}
                    cryptid={post.cryptid}
                    cryptids={cryptids}
                    location={post.location}
                    locations={locations}
                    onPostDelete={handleDeletePost}
                    onUpdatePost={handleUpdatePost}
                />
            ))}
        </>
    )
}

export default PostList