"use client";

import { GitHubIcon } from "../../../public/assets/icons/github";
import { GoogleIcon } from "../../../public/assets/icons/google";
import { Button } from "../ui/button";

type Props = {};

const SocialAuthButtons = (props: Props) => {
	return (
		<div className="flex gap-4 text-3xl">
			<Button type="button" variant="outline" className="font-semibold flex-1">
				<GoogleIcon />
			</Button>
			<Button type="button" variant="outline" className="font-semibold flex-1 ">
				<GitHubIcon />
			</Button>
		</div>
	);
};

export default SocialAuthButtons;
