import React from "react";
import ProfileImageDropDown from "./profile-dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { auth } from "@/auth";

type Props = {};

const ProfilerHeaderRender = async (props: Props) => {
  const session = await auth();
  const username = session?.user?.name!;
  return (
    <ProfileImageDropDown>
      <Avatar className="size-8">
        <AvatarImage src={session?.user?.image!} />
        <AvatarFallback className="bg-secondary-foreground/40">
          {username[0].toUpperCase() || "U"}
        </AvatarFallback>
      </Avatar>
    </ProfileImageDropDown>
  );
};

export default ProfilerHeaderRender;
