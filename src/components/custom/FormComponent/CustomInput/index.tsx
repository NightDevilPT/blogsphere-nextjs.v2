import React, { useState } from "react";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";

import { Input } from "@/components/ui/input";

export interface CustomInputIProps {
	type: string;
	placeholder: string;
	label: string;
	name: string;
	value: string;
	bg?:string;
}

const CustomInput = ({
	type,
	placeholder,
	label,
	name,
	value,
	bg
}: CustomInputIProps) => {
	const [inputValue, setInputValue] = useState<string>(value);
	const [showPass, setShowPass] = useState<boolean>(
		type === "password" ? true : false
	);
	return (
		<div className={`w-full h-auto grid grid-cols-1 gap-1`}>
			{/* <label
				className={`w-full h-auto text-xs font-inter text-slate-500 ml-1 font-[500]`}
			>
				{label}
			</label> */}
			<div className={`w-full h-auto flex justify-center items-center gap-2`}>
				<Input
					name={name}
					value={inputValue}
					onChange={(event) => setInputValue(event.target.value)}
					type={showPass ? "password" : "text"}
					placeholder={placeholder}
					className={`${bg} text-secondary-foreground font-inter text-sm`}
				/>
				{type === "password" && (
					<button className={`w-9 p-2 h-full rounded-md bg-input text-secondary-foreground`} onClick={()=>setShowPass(!showPass)}>
						{showPass?<IoMdEyeOff className={`w-full h-full`} />:<IoMdEye className="w-full h-full" />}
					</button>
				)}
			</div>
		</div>
	);
};

export default CustomInput;
