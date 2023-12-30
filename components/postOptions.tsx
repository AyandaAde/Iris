"use client";

import { deletePost } from "@/lib/actions";
import { PostWithExtras } from "@/lib/definitions"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { cn } from "@/lib/utils";
import SubmitButton from "@/components/submitButton";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

function PostOptions({ post, userId, className }: {
    post: PostWithExtras;
    userId?: string;
    className?: string;
}) {
    const isPostOwner = post.userId === userId;
    return (
        <Dialog>
            <DialogTrigger asChild>
                <MoreHorizontal
                    className={cn(
                        "h-5 w-5 cursor-pointer dark:text-neutral-400",
                        className
                    )}
                />
            </DialogTrigger>
            <DialogContent className="dialogContent">
                {isPostOwner && (
                    <form
                        action={async (formData) => {
                            const { message } = await deletePost(formData);
                            toast(message);
                        }}
                        className="postOption"
                    >
                        <input type="hidden" name="id" value={post.id} />
                        <SubmitButton className="text-red-500 font-bold disabled:cursor-not-allowed w-full p-3">
                            Delete post
                        </SubmitButton>
                    </form>
                )}

                {isPostOwner && (
                    <Link
                        scroll={false}
                        href={`/dashboard/p/${post.id}/edit`}
                        className="postOption p-3"
                    >
                        Edit
                    </Link>
                )}
                <form action="" className="postOption border-0">
                    <button className="w-full p-3">Hide like count</button>
                </form>
            </DialogContent>
        </Dialog>
    )
}

export default PostOptions
