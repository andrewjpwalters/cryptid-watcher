function Post({ comment, user, cryptid }) {
    return (
        <div>
            <h3>{cryptid}</h3>
            <p>{comment}</p>
            <p>Submitted by {user}</p>
        </div>

    )
}

export default Post;