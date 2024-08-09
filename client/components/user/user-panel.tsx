"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";
import { Avatar } from "@nextui-org/avatar";
import { useState } from "react";

import { useWindowSize } from "@/utils/common";
import { screenSizes } from "@/utils/constants";

export const UserPanel = () => {
  const size = useWindowSize();
  
  const [userState, setUserState] = useState({
    firstName: "Aleksander",
    lastName: "Oleszkiewicz",
    username: "aoleszkiewicz",
    avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  });

  return (
    <Dropdown placement="bottom-start">
      <DropdownTrigger>
        {!!size.width && size.width > screenSizes.lg ? (
          // TODO: Add skeleton for User component
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src: userState.avatar,
              showFallback: true,
            }}
            className="transition-transform"
            description={`@${userState.username}`}
            name={`${userState.firstName} ${userState.lastName}`}
          />
        ) : (
          <Avatar
            isBordered
            showFallback
            as="button"
            className="transition-transform"
            name={`${userState.firstName} ${userState.lastName}`}
            size="sm"
            src={userState.avatar}
          />
        )}
      </DropdownTrigger>
      <DropdownMenu aria-label="User Actions" variant="flat">
        <DropdownItem
          key="user_details"
          className="gap-2 h-14"
          textValue="User Details"
        >
          <p className="font-bold">Signed in as</p>
          <p className="font-bold">{`@${userState.username}`}</p>
        </DropdownItem>
        <DropdownItem key="profile" textValue="My Profile">
          My Profile
        </DropdownItem>
        <DropdownItem key="settings" textValue="Settings">
          Settings
        </DropdownItem>
        <DropdownItem key="help_and_feedback" textValue="Help And Feedback">
          Help & Feedback
        </DropdownItem>
        <DropdownItem key="logout" color="danger">
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
