import React from "react";

export function CustomSearchSheet({ icons,children }: { icons:boolean,children: React.ReactNode }) {
	return (
		<React.Fragment>
			{icons?<button className={`w-auto h-auto px-4 py-2 rounded`}></button>:<button></button>}
		</React.Fragment>
	);
}
