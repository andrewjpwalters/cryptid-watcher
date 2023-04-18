import PostForm from "./PostForm";
import Post from "./Post";

function PostList({ posts, cryptids, locations, onAddPost, onDeletePost, onUpdatePost }) {
    return (
        <>
            <PostForm
                cryptids={cryptids}
                locations={locations}
                onAddPost={onAddPost}
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
                    onPostDelete={onDeletePost}
                    onUpdatePost={onUpdatePost}
                />
            ))}
        </>
    )
}

export default PostList