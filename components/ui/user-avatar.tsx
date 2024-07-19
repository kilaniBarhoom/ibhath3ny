import { ny } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type UserAvatarProps = {
  name?: string;
  image?: string | undefined;
  description?: string;
  avatarClassName?: string;
  nameClassName?: string;
  className?: string;
};
const UserAvatar = ({
  name,
  description,
  image,
  avatarClassName,
  nameClassName,
  className,
}: UserAvatarProps) => {
  return (
    <div className={ny("flex gap-2", className)}>
      <Avatar className={ny("size-7", avatarClassName)}>
        <AvatarImage src={image} alt={name} />
        <AvatarFallback className="bg-smoked">
          {name?.[0].toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start justify-center gap-0">
        <p
          className={ny(
            "leading-none text-secondary-foreground text-xs font-medium",
            nameClassName
          )}
        >
          {name}
        </p>
        <p className="text-xs leading-none text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

export { UserAvatar };
