import React from "react";
import { IoClose } from "react-icons/io5";

export interface CustomDialogProps {
	children: React.ReactNode;
	setShow: any;
	title: string;
	show:boolean;
}

const CustomDialog = ({ children, setShow, title,show }: CustomDialogProps) => {
	return (
		<div className={`w-full h-full fixed left-0 top-0 z-[9999] ${show?'flex':'hidden'} justify-center items-center max-sm:px-5`}>
			<div className={`w-96 h-auto p-5 space-y-3 shadow-[0_10px_32px_rgb(0,0,0,0.25)] bg-background rounded-md`}>
				<div
					className={`w-full h-auto flex justify-between items-center`}
				>
					<h1 className={`text-xl font-inter font-[500] text-foreground`}>{title}</h1>
					<button className={`w-6 h-6 rounded-md p-1 text-slate-300 bg-red-500`} onClick={()=>setShow(false)}>
						<IoClose className={`w-full h-full`} />
					</button>
				</div>
				<div className={`w-full h-[3px] rounded bg-secondary`}></div>
				{children}
			</div>
		</div>
	);
};

export default CustomDialog;