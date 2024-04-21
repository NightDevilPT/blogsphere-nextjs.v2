import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import headerLogo from "../../../../assets/big-logo.png";
import shortHeaderLogo from "../../../../assets/small-logo.png";

interface IProps {
	change: boolean;
}

const LogoFrame = () => {
	const [logoSrc, setLogoSrc] = useState<StaticImageData>(headerLogo);

	useEffect(() => {
		const handleResize = () => {
			const newLogoSrc =
				window.innerWidth <= 1024 ? shortHeaderLogo : headerLogo;
			setLogoSrc(newLogoSrc);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div
			className={`w-auto h-full max-sm:w-8 max-sm:h-8`}
		>
			<Image src={logoSrc} alt="headerLogo" className="h-full w-auto object-contain" />
		</div>
	);
};

export default LogoFrame;
