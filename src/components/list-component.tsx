"use client";

import useConversationId from "@/hooks/use-conversationId";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";
import { ModeToggle } from "./mode-toggle";
import { ScrollArea } from "./ui/scroll-area";

type Props = {
	title: string;
	notActive: boolean;
	children: ReactNode;
};

const ListComponent = ({ title, notActive, children }: Props) => {
	const { isConversationOpen } = useConversationId();

	if (notActive) {
		return null;
	}

	return (
		<section
			className={cn(
				isConversationOpen ? "hidden" : "",
				"sm:block sm:w-[330px] w-full shrink-0 sm:border-r py-6"
			)}
		>
			<div className="flex flex-col flex-1 sm:flex-none  gap-6  px-6">
				<div className="flex justify-between items-center pb-4 border-b">
					<h1 className="text-2xl font-bold tracking-tight capitalize">
						{title}
					</h1>
					<ModeToggle />
				</div>
				<ScrollArea className="h-[calc(100vh-192.8px)] sm:h-[calc(100vh-130.8px)] overflow-y-auto">
					{children}
				</ScrollArea>
			</div>
		</section>
	);
};

export default ListComponent;
