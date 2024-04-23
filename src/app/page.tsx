import React from "react";

import { data } from "@/dummy/blog-dummy-data";
import CustomBanner from "@/components/custom/CustomBanner";
import CustomCardLayout from "@/components/custom/CustomCardLayout";

const page = () => {
	return (
		<div className={`h-full`}>
			<CustomBanner />
			<div className={`container mt-5 max-sm:px-5`}>
				<CustomCardLayout data={data} title="Saved Blog" layout={true} />
			</div>
		</div>
	);
};

export default page;
