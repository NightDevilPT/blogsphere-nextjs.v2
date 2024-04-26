"use client";

import CustomCardLayout from "@/components/custom/CustomCardLayout";
import { tags } from "@/constants/tags";
import { data } from "@/dummy/blog-dummy-data";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export interface PageParamsProps {
	params: {
		tagName: string;
	};
}

export interface TagsFrameProps {
	name: string;
	image: string;
}
const page = ({ params }: PageParamsProps) => {
	const [paramsData, setParamsData] = useState<{
		name: string;
		image: string;
	}>();

	useEffect(() => {
		tags.map((items: TagsFrameProps) => {
			if (items.name === params.tagName) {
				setParamsData({ name: items.name, image: items.image });
			}
		});
	}, [params.tagName]);

	return (
		<div className={`h-auto relative`}>
			<div className={`w-full h-96 relative`}>
				{paramsData?.image && (
					<Image
						src={paramsData?.image}
						alt="banner"
						className={`w-full h-full object-cover`}
						fill
						loading="lazy"
					/>
				)}
				<div
					className={`w-full h-full absolute left-0 top-0 bg-gradient-to-b from-transparent to-slate-950 z-10 flex justify-center items-center`}
				>
					<span
						className={`text-2xl font-inter font-[600] text-white`}
					>
						{params.tagName}
					</span>
				</div>
			</div>
			<div className={`container mt-5`}>
				<CustomCardLayout
					data={data}
					title={`${params.tagName} Blogs`}
					layout={true}
				/>
			</div>
		</div>
	);
};

export default page;
