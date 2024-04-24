import CreateProfileForm from "@/components/custom/CreateProfileForm";
import React from "react";

const page = () => {
	return (
		<div className={`container max-sm:px-5 h-auto top-20 relative space-y-2`}>
			<h1 className={` font-inter font-[600] text-2xl text-foreground`}>
				Create a New Profile
			</h1>
			<div className={`w-full h-[2px] rounded bg-secondary-foreground`}></div>
			<CreateProfileForm />
		</div>
	);
};

export default page;
