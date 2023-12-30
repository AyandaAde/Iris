import { followUser } from "@/lib/actions";
import SubmitButton from "./submitButton";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

function FollowButton({
    profileId,
    isFollowing,
    className,
    buttonClassName,
}: {
    profileId: string;
    isFollowing?: boolean;
    className?: string;
    buttonClassName?: string;
}) {
    return (
        <form action={followUser} className={className}>
            <input type="hidden" value={profileId} name="id" />
            <SubmitButton
                className={buttonVariants({
                    variant: isFollowing ? "secondary" : "default",
                    className: cn("!font-bold w-full", buttonClassName),
                    size: "sm",
                })}
            >
                {isFollowing ? "Following" : "Follow"}
            </SubmitButton>
        </form>
    );
}

export default FollowButton;