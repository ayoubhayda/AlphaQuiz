import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import Link from "next/link";
import { Heart, Layers2, LogOut } from "lucide-react";
import { signOut } from "@/utils/auth";

interface UserInfoProps {
  email: string;
  name: string;
  image: string;
}
const UserDropdown = ({ email, name, image }: UserInfoProps) => {
  return (
    <DropdownMenu >
      <DropdownMenuTrigger>
        <Avatar className="cursor-pointer size-[42px]">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 mt-1" align="end">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-medium text-foreground">
            {name}
          </span>
          <span className="truncate text-xs font-normal text-muted-foreground">
            {email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/favorites">
              <Heart
                size={16}
                strokeWidth={2}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Saved Jobs</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="cursor-pointer">
            <Link href="/my-jobs">
              <Layers2
                size={16}
                strokeWidth={2}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>My Job Listings</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/" });
            }}
          >
            <button type="submit" className="w-full flex items-center gap-2 cursor-pointer">
              <LogOut
                size={16}
                strokeWidth={2}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Logout</span>
            </button>
          </form>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
