import React from "react";
import banner from "../../../assets/banner.jpg";
import Image from "next/image";

const CustomBanner = () => {
	return (
		<div
			className={`w-full h-[700px] flex justify-center items-center overflow-hidden relative`}
		>
			<Image
				src={banner}
				alt="bannerImage"
				className={`w-full h-full object-cover absolute left-0 top-0`}
			/>
			<div
				className={`w-full h-full absolute left-0 top-0 bg-slate-950/30`}
			></div>
			<div
				className={`w-full h-full relative z-10 bg-gradient-to-b from-transparent to-slate-950 flex justify-center items-center gap-1 flex-col max-sm:px-5`}
			>
				<h1 className={`text-3xl font-bold text-slate-100 text-center`}>Welcome to BlogSphere</h1>
				<h3 className={`text-base text-slate-100 text-center`}>
					Welcome to the world of blog writing Awesome place to make
					oneself productive and entertained through daily updates.
				</h3>
			</div>
		</div>
	);
};

export default CustomBanner;
