"use client";

import Link from "next/link";
import React, { useState } from "react";

import CustomInput from "../CustomInput";
import { Button } from "@/components/ui/button";

import { FaGithub } from "react-icons/fa";

export interface ForgetForm {
	email: string;
}

const ForgetForm = () => {
	const [ForgetForm, setForgetForm] = useState<ForgetForm>({
		email: "",
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
				Forget Password
			</h1>
			<span
				className={`text-xs font-inter font-[500] w-full text-center text-secondary-foreground`}
			>
				Don't have an account?
				<Link className={`text-sky-500`} href={"/auth/signup"}>
					{" "}
					Signup
				</Link>
			</span>
			<form
				className={`w-full h-auto grid grid-cols-1 gap-3 mt-3 relative`}
				onSubmit={handleSubmit}
			>
				<CustomInput
					bg="bg-input"
					value={ForgetForm.email}
					name="email"
					type="email"
					label="Email Address"
					placeholder="Email"
				/>
				<Button className="mt-3 font-inter font-[600]">Submit</Button>
			</form>
		</div>
	);
};

export default ForgetForm;
