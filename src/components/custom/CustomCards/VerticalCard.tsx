import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { CustomAvtar } from "../CustomAvtar";

export interface VerticalCardProps {
	image?: string;
	title: string;
	tags?: string[];
	createdAt: string;
	username: string;
	avtar: string;
	description:string;
}

const VerticalCard = ({
	image,
	title,
	tags,
	createdAt,
	username,
	description
}: VerticalCardProps) => {
	return (
		<Card
			className={`w-full h-auto rounded-3xl overflow-hidden relative p-5 grid grid-cols-4 max-sm:grid-cols-5 gap-3 hover:shadow-xl hover:shadow-slate-950/10 transition-all duration-300`}
		>
			<div
				className={`col-span-3 w-full h-auto flex justify-start items-start flex-col gap-3`}
			>
				<CardDescription
					className={`text-white text-sm flex justify-start items-start flex-wrap gap-2`}
				>
					{tags &&
						Array.isArray(tags) &&
						tags.map((items: string, index: number) => (
							<Badge
								className={`rounded-full bg-primary`}
								key={items + "-" + index}
							>
								{items}
							</Badge>
						))}
				</CardDescription>
				<CardTitle className={`text-xl line-clamp-1`}>{title}</CardTitle>
				<CardDescription
					className={`text-xs flex justify-start items-center gap-3`}
				>
					<CustomAvtar />
					<div className={`grid grid-cols-1`}>
						<span>{username}</span>
						<span>{createdAt}</span>
					</div>
				</CardDescription>
				<CardDescription className={`line-clamp-2`}>
					{description}
				</CardDescription>
			</div>
			<div className={`w-full max-sm:col-span-2 h-auto rounded-2xl overflow-hidden`}>
				<img
					src={image}
					className={`w-full h-full rounded-2xl object-cover`}
				/>
			</div>
		</Card>
	);
};

export default VerticalCard;
