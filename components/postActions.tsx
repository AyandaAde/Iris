import { PostWithExtras } from "@/lib/definitions"
import { cn } from "@/lib/utils"
import Link from "next/link"
import BookmarkButton from "./bookmarkButton";
import ShareButton from "./shareButton";
import LikeButton from "./likeButton";
import ActionIcon from "./actionIcon";
import { MessageCircle } from "lucide-react";

function PostActions({ post, userId, className }: {
    post: PostWithExtras
    userId?: string
    className?: string


}) {
    return (
        <div className={cn("relative flex items-start w-full gap-x-2", className)}>
            <LikeButton post={post} userId={userId} />
            <Link href={`/dashboard/p/${post.id}`}>
                <ActionIcon>
                    <MessageCircle className={"h-6 w-6"} />
                </ActionIcon>
            </Link>
            <ShareButton postId={post.id} />
            <BookmarkButton post={post} userId={userId} />
        </div>
    )
}

export default PostActions
