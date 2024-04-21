'use client'

import React, { useState } from "react";

import LogoFrame from "./LogoFrame";
import NavbarFrame from "./NavBarFrame";
import UseNavFrame from "./UserNavFrame";

const HeaderFrame = () => {
	const [navBar,setNavBar] = useState<boolean>(false);

	return (
		<header
			className={`fixed left-0 top-0 w-full h-16 z-[999] bg-slate-950/70 backdrop-blur`}
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
