"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";
import { Avatar } from "@nextui-org/avatar";
import { Suspense, useState } from "react";

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
          <Suspense fallback={<div className="w-20 h-8 bg-white" />}>
            <User
              as="button"
              avatarProps={{
                isBordered: true,
                src: userState.avatar,
                showFallback: true,
              }}
              className="transition-transform"
              description={userState.username}
              name={`${userState.firstName} ${userState.lastName}`}
            />
          </Suspense>
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
          key="profile"
          className="gap-2 h-14"
          textValue="User Details"
        >
          <p className="font-bold">Signed in as</p>
          <p className="font-bold">@tonyreichert</p>
        </DropdownItem>
        <DropdownItem key="settings">My Settings</DropdownItem>
        <DropdownItem key="analytics">Analytics</DropdownItem>
        <DropdownItem key="system">System</DropdownItem>
        <DropdownItem key="configurations">Configurations</DropdownItem>
        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
        <DropdownItem key="logout" color="danger">
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
