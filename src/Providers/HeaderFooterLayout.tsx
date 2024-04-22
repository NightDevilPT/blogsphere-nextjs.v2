"use client";

import HeaderFrame from "@/components/custom/HeaderFrame";
import { usePathname } from "next/navigation";
import React from "react";

export default function HeaderFooterLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const pathName = usePathname();
	const isHeaderShow = () => {
		if (pathName) {
			const allRoutes = ["/auth/login","/auth/signup"];
			const isRestricted = allRoutes.includes(pathName);
			return !isRestricted ? (
				<React.Fragment>
					<HeaderFrame />
					{children}
				</React.Fragment>
			) : (
				<React.Fragment>{children}</React.Fragment>
			);
		}
	};
	return <div className="relative">{isHeaderShow()}</div>;
}
