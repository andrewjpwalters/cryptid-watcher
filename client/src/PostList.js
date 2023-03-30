import React, { useEffect, useState } from "react";
import Post from "./Post";
import PostForm from "./PostForm";

function PostList() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("/posts")
            .then((r) => r.json())
            .then(setPosts)
    }, []);

    return (
        <>
            <PostForm />
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