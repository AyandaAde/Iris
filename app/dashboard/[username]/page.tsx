import PostsGrid from "@/components/postsGrid"
import { fetchPostsByUsername } from "@/lib/data"

async function ProfilePage({ params: { username } }: { params: { username: string } }) {
    const posts = await fetchPostsByUsername(username);
    return (
        <div>
            <PostsGrid posts={posts} />
        </div>
    )
}

export default ProfilePage
