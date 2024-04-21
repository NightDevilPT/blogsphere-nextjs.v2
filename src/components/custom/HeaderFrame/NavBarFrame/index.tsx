import React from "react";
import Link from "next/link";
import Image from "next/image";

import { IoClose } from "react-icons/io5";

import logo from "../../../../assets/big-logo.png";

export interface NavbarFrameProps {
	navbar:boolean,
	setNavBar:React.Dispatch<React.SetStateAction<boolean>>
}

const NavbarFrame = ({navbar,setNavBar}:NavbarFrameProps) => {
	const navStyle =
		"text-slate-100 hover:bg-slate-100 hover:text-slate-900 hover:font-[600] px-3 py-1 rounded transition-all duration-300 font-inter text-sm max-md:w-full max-md:h-auto";
	return (
		<div
			className={`w-auto h-auto max-md:fixed max-md:w-auto max-md:h-full ${navbar?"max-md:right-0":"max-md:-right-full"} transition-all duration-300 max-md:top-0 max-md:z-[99]`}
		>
			<nav
				className={`w-auto h-auto flex justify-center items-center gap-2 max-md:h-[100vh] max-md:w-48 max-md:bg-slate-900 max-md:flex-col max-md:justify-start max-md:px-5 max-md:gap-3`}
			>
				<button
					className={`hidden max-md:flex w-6 h-6 hover:bg-slate-300 rounded absolute right-2 top-2 p-[.18rem] hover:text-slate-800 transition-all duration-300`}
					onClick={()=>{
						setNavBar(false);
					}}
				>
					<IoClose className="w-full h-full" />
				</button>
				<Link className={`py-7 mt-5 hidden max-md:flex`} href={"/"}>
					<Image
						src={logo}
						alt="logo"
						className="w-full h-auto object-contain"
					/>
				</Link>
				<div
					className={`w-full h-[2px] rounded bg-slate-800 hidden max-md:flex`}
				></div>
				<button className={navStyle}>Home</button>
				<button className={navStyle}>Blogs</button>
				<button className={navStyle}>About Us</button>
				<button className={navStyle}>Contact Us</button>
			</nav>
		</div>
	);
};

export default NavbarFrame;
