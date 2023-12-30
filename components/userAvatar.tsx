import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import type { AvatarProps } from "@radix-ui/react-avatar";
import type { User } from "next-auth";

type Props = Partial<AvatarProps> & {
    user: User | undefined;
};
function UserAvatar({ user, ...avatarProps }: Props) {
    return (
        <div>
            <Avatar className="relative h-8 w-8" {...avatarProps}>
                <AvatarImage
                    src={user?.image || undefined}
                    alt={`${user?.name}'s profile picture`}
                    className="relative rounded-full object-cover" />
                <AvatarFallback>P</AvatarFallback>
            </Avatar>
        </div>
    )
}

export default UserAvatar
