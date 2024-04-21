import React from "react";

const NavbarFrame = () => {
	const navStyle = 'text-slate-100 hover:bg-slate-100 hover:text-slate-900 hover:font-[600] px-3 py-1 rounded transition-all duration-300 font-inter text-sm'
	const menuStyle = ''
	return (
		<div className={`w-auto h-auto`}>
			<nav className={`w-auto h-auto flex justify-center items-center gap-2`}>
				<button className={navStyle}>Home</button>
				<button className={navStyle}>Blogs</button>
				<button className={navStyle}>About Us</button>
				<button className={navStyle}>Contact Us</button>
			</nav>
		</div>
	);
};

export default NavbarFrame;
