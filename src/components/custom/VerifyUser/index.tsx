"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";

import LoadingSpin from "../LoadingSpin";

import { RiErrorWarningFill } from "react-icons/ri";
import { HiMiniCheckBadge } from "react-icons/hi2";

export enum VERIFYTYPE {
	SUCCESS = "SUCCESS",
	LOADING = "LOADING",
	INVALID = "INVALID",
}

const VerifyUser = () => {
	// const param = useSearchParams();
	const [verify, setVerify] = useState<VERIFYTYPE>(VERIFYTYPE.SUCCESS);

	return (
		<div
			className={`w-auto h-auto px-6 py-3 rounded-lg bg-background flex justify-center items-center gap-2`}
		>
			<span className={`text-base font-inter font-[600] text-foreground`}>
				{verify === VERIFYTYPE.LOADING
					? "Verifying User"
					: verify === VERIFYTYPE.INVALID
					? "Invalid Token"
					: "Successfully Verified"}
			</span>
			<div className={`w-7 h-7`}>
				{verify === VERIFYTYPE.LOADING ? (
					<LoadingSpin />
				) : verify === VERIFYTYPE.INVALID ? (
					<RiErrorWarningFill
						className={`w-7 h-7  text-yellow-500`}
					/>
				) : (
					<HiMiniCheckBadge className={`w-7 h-7  text-blue-500`} />
				)}
			</div>
		</div>
	);
};

export default VerifyUser;
