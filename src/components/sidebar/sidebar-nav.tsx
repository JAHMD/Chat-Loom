"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ScrollArea } from "../ui/scroll-area";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
	items: {
		href: string;
		title: string;
	}[];
}

export function SidebarNav({ className, items, ...props }: SidebarNavProps) {
	const pathname = usePathname();

	return (
		<nav className={cn("flex gap-2 flex-col", className)} {...props}>
			{items.map((item, idx) => (
				<Link
					key={idx}
					href={item.href}
					className={cn(
						buttonVariants({ variant: "ghost" }),
						pathname === item.href ? "bg-muted hover:bg-muted" : "",
						"justify-start line-clamp-1 capitalize text-base py-2 h-auto"
					)}
				>
					<Avatar className="mr-3 block">
						<AvatarImage src="https://github.com/shadcn.png" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>

					{item.title}
				</Link>
			))}
		</nav>
	);
}
