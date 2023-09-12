"use client";

import useConversationId from "@/hooks/use-conversationId";
import useRouters from "@/hooks/use-routers";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";

const MoblieFooter = () => {
	const { isConversationOpen } = useConversationId();
	const routers = useRouters();

	if (isConversationOpen) {
		return null;
	}

	return (
		<div className="sm:hidden flex h-fit w-full order-last px-4 pb-4">
			<ul className="w-full flex bg-muted p-1 gap-1 rounded-md">
				{routers.map((router, idx) => {
					const { icon, active, clickHandler } = router;
					return (
						<li className="flex-1" key={idx}>
							<Button
								className={cn(
									buttonVariants({ variant: "outline" }),
									active
										? "hover:bg-background"
										: "bg-muted hover:bg-background",
									"w-full text-white"
								)}
								onClick={clickHandler}
							>
								{icon}
							</Button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default MoblieFooter;
