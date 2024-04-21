import React from "react";
import { CustomNavDropdownMenu } from "../../CustomNavDropDown";
import { CustomAvtar } from "../../CustomAvtar";
import { IoSearchOutline } from "react-icons/io5";
import { TbMenu2 } from "react-icons/tb";

const UseNavFrame = ({
	setNavBar,
}: {
	setNavBar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<div className={`w-auto h-auto flex justify-start items-center gap-5`}>
			<button
				className={`w-auto h-auto font-inter bg-slate-700 flex justify-center items-center gap-1 px-3 py-1 rounded-md text-slate-300 text-sm`}
			>
				<IoSearchOutline className="h-4 w-4" />
				<span className=" max-sm:hidden">Search</span>
			</button>
			<CustomNavDropdownMenu>
				<button className={`rounded-full`}>
					<CustomAvtar />
				</button>
			</CustomNavDropdownMenu>
			<button
				className={`w-7 h-7 rounded text-slate-100 hover:bg-slate-200 hover:text-slate-800 transition-all duration-300 max-md:flex hidden p-1`}
				onClick={() => {
					setNavBar(true);
				}}
			>
				<TbMenu2 className={`w-full h-full`} />
			</button>
		</div>
	);
};

export default UseNavFrame;
