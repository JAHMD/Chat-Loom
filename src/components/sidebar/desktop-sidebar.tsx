"use client";

import useRouters from "@/hooks/use-routers";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import { Button } from "../ui/button";

type Props = {};

const DesktopSidebar = () => {
	const routers = useRouters();

	return (
		<aside className="w-fit h-screen border-r hidden sm:block">
			<ul className="hidden sm:flex flex-col gap-y-8 px-4 py-8 h-full">
				{routers.map((router, idx) => {
					const { icon, active, clickHandler } = router;
					return (
						<li key={idx}>
							<Button
								variant="ghost"
								size="icon"
								className={cn(active ? "bg-muted hover:bg-muted" : "")}
								onClick={clickHandler}
							>
								{icon}
							</Button>
						</li>
					);
				})}

				<Button asChild size="icon">
					user
				</Button>
			</ul>
		</aside>
	);
};

export default DesktopSidebar;
