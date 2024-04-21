import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import avtar from "../../../assets/avtar.png";
import Image from "next/image";
interface AvtarProps {
	src?: string;
	text?: string;
}

export function CustomAvtar({ src, text }: AvtarProps) {
	const convertName = (name: string) => {
		if (name.split(" ").length > 1) {
			return `${name.split(" ")[0][0]}${
				name.split(" ")[1][0]
			}`.toUpperCase();
		}
		return name[0].toUpperCase();
	};

	return (
		<Avatar className="m-0 p-0">
			<AvatarImage src={src} alt="@shadcn" />
			<AvatarFallback>
				<Image src={avtar} alt="" />
			</AvatarFallback>
		</Avatar>
	);
}
