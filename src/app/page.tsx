import UserAuthForm from "@/components/form/user-auth-form";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

type Props = {};

export default function Home({}: Props) {
	return (
		<main className="grid grid-flow-col grid-col-1 lg:grid-cols-2 min-h-screen">
			<div className="relative hidden h-full flex-col items-center gap-y-4 justify-center bg-muted p-10 dark:border-r lg:flex">
				<Image
					src="/assets/pattern/patternpad.svg"
					priority={true}
					width={500}
					height={500}
					alt="pattern image"
					className="absolute h-full w-full object-cover opacity-20"
					aria-hidden="true"
				/>
				<div className="absolute inset-0" />
				<h1 className="relative flex items-center gap-2 text-2xl font-bold">
					<svg
						className="w-8"
						fill="none"
						stroke="currentColor"
						strokeWidth={1.5}
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
						/>
					</svg>
					ChatLoom
				</h1>
				<div className="relative text-center">
					<blockquote className="space-y-2">
						<p className="tracking-wide">
							In a world that&lsquo;s constantly evolving, where distances are
							bridged by technology, and communication is at the heart of our
							daily lives, we present ChatLoom—a revolutionary chat app designed
							to foster meaningful connections, empower conversations, and bring
							people closer together.
						</p>
					</blockquote>
				</div>
			</div>
			<div className="lg:p-8 w-full flex items-center justify-center relative">
				<ModeToggle className="absolute bottom-6 right-6" />
				<div className="mx-auto flex max-w-full flex-col justify-center space-y-6 w-[420px] p-6">
					<div className="flex flex-col space-y-2 text-center">
						<h2 className="text-2xl font-semibold tracking-tight">
							ChatLoom form
						</h2>
						<p className="text-sm text-muted-foreground">
							Enter your information below and start chatting with your friends.
						</p>
					</div>
					<UserAuthForm />
				</div>
			</div>
		</main>
	);
}
