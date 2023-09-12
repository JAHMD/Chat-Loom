import { Card } from "@/components/ui/card";
import Link from "next/link";

type Props = {};

export default function Home({}: Props) {
	return (
		<main className="flex min-h-screen items-center justify-center p-8">
			<Card className="w-[500px] max-w-full">
				In a world that&lsquo;s constantly evolving, where distances are bridged
				by technology, and communication is at the heart of our daily lives, we
				present ChatLoom—a revolutionary chat app designed to foster meaningful
				connections, empower conversations, and bring people closer together.
				<Link href="/conversation" className="block">
					Conversation
				</Link>
			</Card>
		</main>
	);
}
