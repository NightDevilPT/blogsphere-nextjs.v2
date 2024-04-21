import React from "react";

import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { CustomAvtar } from "../CustomAvtar";
import { Badge } from "@/components/ui/badge";

export interface HorizontalCardProps {
	image?: string;
	title: string;
	tags?: string[];
	createdAt: string;
	username: string;
	avtar: string;
}

const HorizontalCard = ({
	image,
	title,
	tags,
	createdAt,
	username,
	avtar,
}: HorizontalCardProps) => {
	return (
		<Card
			className={`w-full max-w-72 h-96 rounded-3xl overflow-hidden relative group`}
		>
			<div className={`w-full h-full`}>
				<img src={image} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300" />
			</div>
			<div
				className={`w-full h-full absolute left-0 top-0 bg-slate-950/30`}
			>
				<CardHeader
					className={`w-full h-auto absolute left-0 bottom-0 px-3 py-5 bg-gradient-to-b from-transparent to-slate-900`}
				>
					<CardDescription
						className={`text-white text-sm line-clamp-1 flex justify-start items-start gap-2 flex-wrap`}
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
					<CardTitle
						className={`text-xl text-primary-foreground line-clamp-1`}
					>
						{title}
					</CardTitle>
					<CardDescription
						className={`text-xs flex justify-start items-center gap-3 text-white`}
					>
						<CustomAvtar />
						<span className={`grid grid-cols-1`}>
							<span>{username}</span>
							<span>{createdAt}</span>
						</span>
					</CardDescription>
				</CardHeader>
			</div>
		</Card>
	);
};

export default HorizontalCard;
