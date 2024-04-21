import { ScrollArea } from "@/components/ui/scroll-area";
import { ChildrenNode } from "@/types/type";
import React from "react";

const CustomScroll = ({ children }: ChildrenNode) => {
	return <ScrollArea className={`w-full h-full`}>{children}</ScrollArea>;
};

export default CustomScroll;
