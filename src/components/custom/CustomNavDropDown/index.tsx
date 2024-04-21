import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

export function CustomNavDropdownMenu({
	children,
}: {
	children: React.ReactNode;
}) {
	const user: boolean = false;
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			{user ? (
				<DropdownMenuContent className="w-56 z-[9999]">
					<DropdownMenuLabel>My Account</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuGroup>
						<DropdownMenuItem>
							Profile
							<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
						</DropdownMenuItem>
						<DropdownMenuItem>
							Settings
							<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
						</DropdownMenuItem>
					</DropdownMenuGroup>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						Log out
						<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuContent>
			) : (
				<DropdownMenuContent className="w-56 z-[9999]">
					<DropdownMenuGroup>
						<DropdownMenuItem>
							Signup
						</DropdownMenuItem>
						<DropdownMenuItem>
							Login
						</DropdownMenuItem>
					</DropdownMenuGroup>
				</DropdownMenuContent>
			)}
		</DropdownMenu>
	);
}
