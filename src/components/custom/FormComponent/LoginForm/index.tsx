"use client";

import Link from "next/link";
import React, { useState } from "react";
import CustomInput from "../CustomInput";
import { Button } from "@/components/ui/button";

import { FaGithub } from "react-icons/fa";

export interface LoginForm {
	email: string;
	password: string;
}

const LoginForm = () => {
	const [loginForm, setLoginForm] = useState<LoginForm>({
		email: "",
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
				Login to your account
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
					value={loginForm.email}
					name="email"
					type="email"
					label="Email Address"
					placeholder="Email"
				/>
				<CustomInput
					value={loginForm.password}
					name="password"
					type="password"
					label="Password"
					placeholder="Password"
				/>
				<span className={`w-full h-auto text-right`}>
					<Link
						className="absolute w-full text-xs font-inter font-[500] text-sky-500 right-0 bottom-12"
						href={"#"}
					>
						Forget Password?
					</Link>
				</span>
				<Button className="mt-3 font-inter font-[600]">Submit</Button>
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
				Signup with Github
			</Button>
		</div>
	);
};

export default LoginForm;
