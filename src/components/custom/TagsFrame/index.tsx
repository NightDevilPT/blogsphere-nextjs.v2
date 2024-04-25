import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { tags } from "@/constants/tags";
import Image from "next/image";
import React, { useId } from "react";

const TagFrame = () => {
	return (
		<div className={`w-full h-auto space-y-2`}>
			<div className={`w-full h-auto flex justify-start items-center`}>
				<h1 className={`text-xl font-inter font-[600] text-foreground`}>
					Some Popular Tags
				</h1>
			</div>
			<ScrollArea
				className={`w-full h-auto flex justify-start items-start gap-3`}
			>
				<div className="w-full h-full flex justify-start items-start gap-3">
					{tags?.map(
						(
							items: { name: string; image: string },
							index: number
						) => {
							const uniqueId = useId();
							return (
								<div
									className={`relative cursor-pointer w-auto h-28 overflow-hidden min-w-44 min-h-28 mb-3 rounded-md group`}
									key={uniqueId}
								>
									<Image
										src={items.image}
										alt="tags"
										height={100}
										width={100}
										className={`w-full h-full rounded-md object-cover`}
									/>
									<div
										className={`absolute left-0 top-0 w-full h-full hidden group-hover:flex justify-center items-center group-hover:bg-slate-950/50 transition-all duration-300`}
									>
										<h1
											className={`text-white font-inter text-xl font-[500]`}
										>
											{items.name}
										</h1>
									</div>
								</div>
							);
						}
					)}
				</div>
				<ScrollBar orientation="horizontal" />
			</ScrollArea>
		</div>
	);
};

export default TagFrame;
