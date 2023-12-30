import { fetchPosts } from "@/lib/data";
import PostComp from "./postComp";

async function Post() {
    const posts = await fetchPosts();

    return (
        <>
            {posts.map((post) => (
                <PostComp
                    key={post.id}
                    post={post}
                />
            ))}
        </>
    )
}

export default Post;
