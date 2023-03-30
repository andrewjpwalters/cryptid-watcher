import React, { useEffect, useState } from "react";
import Post from "./Post";

function PostList() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("/posts")
            .then((r) => r.json())
            .then(setPosts)
    }, []);

    return (
        <>
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