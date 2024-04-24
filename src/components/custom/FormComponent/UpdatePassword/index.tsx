"use client";

import React, { useState } from "react";

import CustomInput from "../CustomInput";
import { Button } from "@/components/ui/button";

export interface UpdateForm {
	password: string;
}

const UpdateForm = () => {
	const [UpdateForm, setUpdateForm] = useState<UpdateForm>({
		password: "",
	});

	const handleSubmit = (event: any) => {
		event.preventDefault();
	};

	return (
		<div
			className={`w-96 h-auto p-5 rounded-lg bg-background grid grid-cols-1 gap-2`}
		>
			<h1
				className={`w-full h-auto font-inter text-xl text-secondary-foreground font-[500] text-center`}
			>
				Update Password
			</h1>
			<form
				className={`w-full h-auto grid grid-cols-1 gap-3 mt-3 relative`}
				onSubmit={handleSubmit}
			>
				<CustomInput
					bg="bg-input"
					value={UpdateForm.password}
					name="password"
					type="password"
					label="Password"
					placeholder="password"
				/>
				<Button className="mt-3 font-inter font-[600]">Submit</Button>
			</form>
		</div>
	);
};

export default UpdateForm;
