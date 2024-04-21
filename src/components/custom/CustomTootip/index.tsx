import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

interface IProps {
	children: React.ReactNode;
	content?: string;
}

export function CustomTooltip({ children, content }: IProps) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>{children}</TooltipTrigger>
				<TooltipContent className={`text-primary-foreground bg-card-foreground font-bold px-2 py-1`}>
					<p>{content}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
