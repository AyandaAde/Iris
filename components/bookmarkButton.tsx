"use client";

import { bookmarkPost } from "@/lib/actions";
import { PostWithExtras } from "@/lib/definitions";
import { cn } from "@/lib/utils";
import ActionIcon from "./actionIcon";
import { SavedPost } from "@prisma/client";
import { Bookmark } from "lucide-react";
import { useOptimistic } from "react";

function BookmarkButton({ post, userId }: {
    post: PostWithExtras
    userId?: string
}) {
    const predicate = (bookmark: SavedPost) =>
        bookmark.userId === userId && bookmark.postId === post.id;
    const [optimisticBookmarks, addOptimisticBookmark] = useOptimistic<SavedPost[]>(
        post.savedBy,
        //@ts-ignore
        (state: SavedPost[], newBookmark: SavedPost) =>
            state.find(predicate)
                ? state.filter((bookmark) => bookmark.userId !== userId)
                : [...state, newBookmark]
    );

    return (
        <form
            action={async (formData: FormData) => {
                const postId = formData.get("postId");
                addOptimisticBookmark({ postId, userId });
                await bookmarkPost(postId);
            }}
            className="ml-auto"
        >
            <input type="hidden" name="postId" value={post.id} />

            <ActionIcon>
                <Bookmark
                    className={cn("h-6 w-6", {
                        "dark:fill-white fill-black": optimisticBookmarks.some(predicate),
                    })}
                />
            </ActionIcon>
        </form>
    )
}

export default BookmarkButton
