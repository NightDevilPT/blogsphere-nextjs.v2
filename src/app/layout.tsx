import type { Metadata } from "next";
import "./globals.css";
import LanguageCallLayout from "@/Providers/LanguageCallLayout";
import CustomScroll from "@/components/custom/ScrollLayout/CustomScroll";
import ReduxProvide from "@/Providers/ReduxProvider";
import HeaderFooterLayout from "@/Providers/HeaderFooterLayout";

export const metadata: Metadata = {
	title: "Blogsphere",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="light w-full h-[100vh]">
			<body className="bg-background h-full text-primary-foreground">
				<CustomScroll>
					<ReduxProvide>
						<LanguageCallLayout>
							<HeaderFooterLayout>{children}</HeaderFooterLayout>
						</LanguageCallLayout>
					</ReduxProvide>
				</CustomScroll>
			</body>
		</html>
	);
}
