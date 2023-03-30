import React, { useEffect, useState } from "react";
import Post from "./Post";
import PostForm from "./PostForm";

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

    return (
        <>
            <PostForm cryptids={cryptids} locations={locations} />
            {posts.map((post) => (
                <Post
                    key={post.id}
                    id={post.id}
                    comment={post.comment}
                    user={post.user.username}
                    cryptid={post.cryptid.name}
                />
            ))}
        </>
    )
}

export default PostList