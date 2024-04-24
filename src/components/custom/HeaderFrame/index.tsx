'use client'

import React, { useState } from "react";

import LogoFrame from "./LogoFrame";
import NavbarFrame from "./NavBarFrame";
import UseNavFrame from "./UserNavFrame";
import { usePathname } from "next/navigation";

const HeaderFrame = () => {
	const pathName = usePathname();
	const [navBar, setNavBar] = useState<boolean>(false);
	const allRoutes = ['/create-profile']

	return (
		<header
			className={`fixed left-0 top-0 w-full h-16 z-[999] ${allRoutes.includes(pathName) ? 'bg-slate-950' : 'bg-slate-950/70'} backdrop-blur`}
		>
			<div className={`container h-full flex justify-between items-center py-3 max-sm:px-5`}>
				<LogoFrame />
				<NavbarFrame navbar={navBar} setNavBar={setNavBar} />
				<UseNavFrame setNavBar={setNavBar} />
			</div>
		</header>
	);
};

export default HeaderFrame;
