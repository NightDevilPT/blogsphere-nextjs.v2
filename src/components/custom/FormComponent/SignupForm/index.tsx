"use client";

import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import CustomInput from "../CustomInput";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export interface SignupForm {
	email: string;
	password: string;
	username: string;
}

const SignupForm = () => {
	const [signupForm, setSignupForm] = useState<SignupForm>({
		email: "",
		username: "",
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
				Sign up for free!
			</h1>
			<span
				className={`text-xs font-inter font-[500] w-full text-center text-secondary-foreground`}
			>
				Already have an account?
				<Link className={`text-sky-500`} href={"/auth/login"}>
					{" "}
					Login
				</Link>
			</span>
			<form
				className={`w-full h-auto grid grid-cols-1 gap-3 mt-3`}
				onSubmit={handleSubmit}
			>
				<CustomInput
					bg="bg-input"
					value={signupForm.username}
					name="username"
					type="text"
					label="Username"
					placeholder="username"
				/>
				<CustomInput
					bg="bg-input"
					value={signupForm.email}
					name="email"
					type="email"
					label="Email Address"
					placeholder="Email"
				/>
				<CustomInput
					bg="bg-input"
					value={signupForm.password}
					name="password"
					type="password"
					label="Password"
					placeholder="Password"
				/>
				<Button className="mt-3 font-inter font-[600]">
					Submit with email
				</Button>
			</form>
			<div
				className={`w-full h-auto flex justify-center items-center gap-2 my-1`}
			>
				<div className={`flex-1 h-[2px] rounded bg-secondary`} />
				<span className="font-inter text-xs text-foreground font-[500]">
					OR
				</span>
				<div className={`flex-1 h-[2px] rounded bg-secondary`} />
			</div>
			<Button className="flex justify-center items-center gap-3 bg-secondary-foreground text-secondary hover:bg-secondary-foreground hover:text-secondary">
				<FaGithub className={`h-5 w-5`} />
				Login with Github
			</Button>
		</div>
	);
};

export default SignupForm;
