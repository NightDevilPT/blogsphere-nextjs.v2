import React from "react";
import Image from "next/image";

import background from "../../../assets/banner.jpg";
import VerifyUser from "@/components/custom/VerifyUser";

const page = () => {
	return (
		<div className={`w-full h-full`}>
			<Image
				src={background}
				alt=""
				className={`w-full h-full absolute left-0 top-0 object-cover`}
			/>
			<div
				className={`w-full h-full absolute left-0 top-0 bg-slate-950/50`}
			></div>
			<div
				className={`w-full h-full absolute left-0 top-0 bg-gradient-to-b from-transparent to-slate-950/90`}
			></div>
			<div className={`w-full h-full justify-center items-center flex absolute max-sm:px-5`}>
				<VerifyUser />
			</div>
		</div>
	);
};

export default page;
