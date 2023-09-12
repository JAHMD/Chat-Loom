import { Separator } from "@/components/ui/separator";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

type Props = {
	params: { id: string };
};

const ChatArea = ({ params: { id } }: Props) => {
	return (
		<section className="flex flex-1 flex-col w-full gap-6 px-6">
			<div className="flex justify-between items-center min-h-[64px] pt-6">
				<div className="flex gap-2 items-center">
					<Link href="/conversation">
						<ChevronLeft size={18} />
					</Link>
					<h2 className="font-semibold">Ahmed Wael</h2>
				</div>
			</div>
			<Separator />
			<div className="">{id}</div>
		</section>
	);
};

export default ChatArea;
