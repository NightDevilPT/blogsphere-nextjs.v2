// import HeaderFrame from "@/components/custom/HeaderFrame";

export default function HeaderFooterLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="relative">
			{/* <HeaderFrame /> */}
			{children}
		</div>
	);
}
