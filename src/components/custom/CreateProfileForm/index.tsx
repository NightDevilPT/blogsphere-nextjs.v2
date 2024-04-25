"use client";

import { Button } from "@/components/ui/button";
import { avtarConstants } from "@/constants/avtar";
import React, { useId, useState } from "react";
import CustomDialog from "../CustomDialog";
import CustomInput from "../FormComponent/CustomInput";
import { SelectScrollable } from "../FormComponent/CustomSelect";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";

export enum GENDER {
	MALE = "MALE",
	FEMAIL = "FEMALE",
	OTHER = "OTHER",
}

export interface UserFormInterface {
	firstName: string;
	lastName: string;
	gender: GENDER;
	bio?: string;
	avtar?: string;
	facebookUrl?: string;
	instgramUrl?: string;
	twitterUrl?: string;
	youtubeUrl?: string;
	linkedinUrl?: string;
}

const CreateProfileForm = () => {
	const [avtar, setAvtar] = useState<string>("Working Man");
	const [showAvtarPopup, setShowAvtarPopup] = useState<boolean>(false);
	const [userForm, setUserForm] = useState<UserFormInterface>({
		firstName: "",
		lastName: "",
		gender: GENDER.MALE,
		bio: "",
		avtar: avtar,
		facebookUrl: "",
		instgramUrl: "",
		twitterUrl: "",
		youtubeUrl: "",
		linkedinUrl: "",
	});
	return (
		<div
			className={`w-[1300px] max-2xl:w-full max-sm:w-full h-auto grid grid-cols-3 max-md:grid-cols-1 gap-4 max-md:gap-4 relative top-3 max-sm:mb-5`}
		>
			<div className={`w-full h-auto rounded-md`}>
				<div
					className={`w-auto h-auto flex justify-center items-center flex-col gap-5 relative`}
				>
					<img
						src={avtarConstants[avtar]}
						className={`w-full max-w-72 h-auto object-contain rounded-full`}
					/>
					<Button onClick={() => setShowAvtarPopup(true)}>
						Change Profile
					</Button>
				</div>
			</div>
			<form
				className={`w-full h-96 col-span-2 max-md:col-span-1 space-y-3 rounded-md`}
			>
				<div
					className={`w-full h-auto rounded-lg border-2 border-secondary p-4 space-y-2`}
				>
					<h1
						className={`w-full h-auto py-0 my-0 text-base font-inter text-secondary-foreground font-[500]`}
					>
						Personal Info
					</h1>
					<div
						className={`w-full h-auto grid grid-cols-2 max-sm:grid-cols-1 gap-3`}
					>
						<CustomInput
							value={userForm.firstName}
							name="firstName"
							type="text"
							label="Firstname"
							placeholder="Firstname"
						/>
						<CustomInput
							value={userForm.lastName}
							name="lastName"
							type="text"
							label="Lastname"
							placeholder="Lastname"
						/>
						<div
							className={`col-span-2 max-sm:col-span-1 space-y-3`}
						>
							<SelectScrollable
								value={userForm.gender}
								name="gender"
								placeholder="Select Gender"
								values={["MALE", "FEMALE", "OTHER"]}
							/>
							<Textarea
								placeholder="Type your bio here."
								className=" text-foreground font-inter"
								name="bio"
								value={userForm.bio}
								onChange={(
									event: React.ChangeEvent<HTMLTextAreaElement>
								) =>
									setUserForm((pre) => ({
										...pre,
										bio: event.target.value,
									}))
								}
							/>
						</div>
					</div>
				</div>
				<div
					className={`w-full h-auto rounded-lg border-2 border-secondary p-4 space-y-2`}
				>
					<h1
						className={`w-full h-auto py-0 my-0 text-base font-inter text-secondary-foreground font-[500]`}
					>
						Social Info
					</h1>
					<div
						className={`w-full h-auto grid grid-cols-2 max-sm:grid-cols-1 gap-3`}
					>
						<CustomInput
							value={userForm.facebookUrl || ""}
							name="facebookUrl"
							type="text"
							label="Facebook url"
							placeholder="Facebook url"
						/>
						<CustomInput
							value={userForm.instgramUrl || ""}
							name="instgramUrl"
							type="text"
							label="Instgram url"
							placeholder="Instgram url"
						/>
						<CustomInput
							value={userForm.twitterUrl || ""}
							name="twitterUrl"
							type="text"
							label="Twitter url"
							placeholder="Twitter url"
						/>
						<CustomInput
							value={userForm.youtubeUrl || ""}
							name="youtubeUrl"
							type="text"
							label="Youtube url"
							placeholder="Youtube url"
						/>
						<CustomInput
							value={userForm.linkedinUrl || ""}
							name="linkedinUrl"
							type="text"
							label="Linkedin url"
							placeholder="Linkedin url"
						/>
					</div>
				</div>
				<Button className={`w-full`}>Submit</Button>
			</form>

			{/* Avtar Popup */}
			<CustomDialog
				show={showAvtarPopup}
				setShow={setShowAvtarPopup}
				title="Choose an Avtar"
			>
				<ScrollArea className="w-full h-56 bg-secondary p-3 rounded">
					<div className="grid grid-cols-3 gap-3 max-[460px]:grid-cols-2 h-auto w-full">
						{Object.keys(avtarConstants).map(
							(items: string, index: number) => {
								const uniqueId = useId();
								return (
									<button
										className={`w-full h-auto p-1 rounded-full border-2 ${
											avtar === items
												? "border-primary"
												: " border-transparent"
										}`}
										key={uniqueId}
										onClick={() => setAvtar(items)}
									>
										<img
											src={avtarConstants[items]}
											className={`w-full h-auto rounded-full object-contain`}
										/>
									</button>
								);
							}
						)}
					</div>
				</ScrollArea>
			</CustomDialog>
		</div>
	);
};

export default CreateProfileForm;
