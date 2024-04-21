'use client'

import React, { useEffect, useState } from "react";
import LogoFrame from "./LogoFrame";
import NavbarFrame from "./NavBarFrame";
import UseNavFrame from "./UserNavFrame";

const HeaderFrame = () => {
	const [scrollPosition, setScrollPosition] = useState<number>(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentPosition = window.pageYOffset;
			setScrollPosition(currentPosition);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<header
			className={`fixed left-0 top-0 w-full h-16 z-[999] bg-slate-950/40 backdrop-blur`}
		>
			<div className={`container h-full flex justify-between items-center py-3 max-sm:px-5`}>
				<LogoFrame />
				<NavbarFrame />
				<UseNavFrame />
			</div>
		</header>
	);
};

export default HeaderFrame;
