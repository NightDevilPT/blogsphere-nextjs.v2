import React from "react";
import { CustomNavDropdownMenu } from "../../CustomNavDropDown";
import { CustomAvtar } from "../../CustomAvtar";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import { IoSearchOutline } from "react-icons/io5";

const UseNavFrame = () => {
	return (
		<div className={`w-auto h-auto flex justify-start items-center gap-5`}>
			<button className={`w-auto h-auto font-inter bg-slate-700 flex justify-center items-center gap-1 px-3 py-1 rounded-md text-slate-300 text-sm`}>
				<IoSearchOutline className="h-4 w-4" />
				<span>Search</span>
			</button>
			<CustomNavDropdownMenu>
				<button className={`rounded-full`}>
					<CustomAvtar />
				</button>
			</CustomNavDropdownMenu>
		</div>
	);
};

export default UseNavFrame;
