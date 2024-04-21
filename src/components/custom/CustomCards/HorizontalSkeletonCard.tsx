import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const HorizontalSkeletonCard = () => {
	return (
		<div className={`relative w-full h-auto grid grid-cols-1 gap-3`}>
			<Skeleton className="aspect-video w-full" />
			<Skeleton className={`w-full h-auto p-3 rounded`} />
			<Skeleton className={`w-[80%] h-auto p-3 rounded`} />
			{/* <Skeleton className={`relative left-[40%] w-[60%] h-auto p-2 rounded`} /> */}
			<div
				className={`w-full h-auto flex justify-start items-start gap-3`}
			>
				<Skeleton className="w-10 h-10 rounded-full" />
				<div className={`flex-1 grid grid-cols-1 gap-1`}>
					<Skeleton className={`w-[60%] h-auto p-2 rounded`} />
					<Skeleton className={`w-[40%] h-auto p-2 rounded`} />
				</div>
			</div>
		</div>
	);
};

export default HorizontalSkeletonCard;
