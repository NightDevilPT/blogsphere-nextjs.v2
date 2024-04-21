"use client";

import React, { useState } from "react";
import HorizontalCard from "../CustomCards/HorizontalCard";
import VerticalCard, { VerticalCardProps } from "../CustomCards/VerticalCard";
import { CardTitle } from "@/components/ui/card";

import { IoGrid } from "react-icons/io5";
import { RiLayout4Fill, RiLayoutGridFill } from "react-icons/ri";

export interface CustomCardLayoutProps {
	title: string;
	layout: boolean;
	data: VerticalCardProps[];
}

const CustomCardLayout = ({ title, layout, data }: CustomCardLayoutProps) => {
	const [isVertical, setIsVertical] = useState<boolean>(false);
	return (
		<div className={`w-full h-auto grid grid-cols-1 gap-2 py-2`}>
			<div className={`flex justify-between items-center gap-2`}>
				<CardTitle className={`text-xl text-foreground`}>
					{title}
				</CardTitle>

				<div
					className={`w-auto relative h-auto p-1.5 rounded bg-border flex justify-center items-center gap-1`}
				>
					<button
						className={`relative z-10 w-6 h-6 cursor-pointer ${
							isVertical
								? "text-primary-foreground"
								: "text-foreground"
						}`}
						onClick={() => setIsVertical(true)}
					>
						<RiLayout4Fill className={`w-full h-full`} />
					</button>
					<button
						className={`relative z-10 w-6 h-6 cursor-pointer ${
							!isVertical
								? "text-primary-foreground"
								: "text-foreground"
						}`}
						onClick={() => setIsVertical(false)}
					>
						<RiLayoutGridFill className={`w-full h-full`} />
					</button>
					<div
						className={`w-7 h-7 rounded absolute ${
							isVertical ? "left-1" : "left-8"
						} top-1 bg-primary transition-all duration-300`}
					></div>
				</div>
			</div>
			<div
				className={`${
					isVertical
						? "grid-cols-3 max-2xl:grid-cols-2 max-lg:grid-cols-1"
						: "grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 place-items-center"
				} grid gap-5`}
			>
				{data?.map(
					(
						{
							title,
							image,
							description,
							tags,
							avtar,
							username,
							createdAt,
						}: VerticalCardProps,
						index: number
					) =>
						isVertical ? (
							<VerticalCard
								title={title}
								image={image}
								avtar={avtar}
								tags={tags}
								description={description}
								username={username}
								createdAt={createdAt}
								key={index}
							/>
						) : (
							<HorizontalCard
								title={title}
								image={image}
								tags={tags}
								username={username}
								createdAt={createdAt}
								key={index}
								avtar={avtar}
							/>
						)
				)}
			</div>
		</div>
	);
};

export default CustomCardLayout;
