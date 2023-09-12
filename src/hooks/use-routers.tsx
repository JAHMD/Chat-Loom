import { LogOut, MessageCircle, Users2 } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useMemo } from "react";
import useConversationId from "./use-conversationId";

const useRouters = () => {
	const router = useRouter();
	const pathname = usePathname();
	const { conversationId } = useConversationId();

	const routers = useMemo(() => {
		return [
			{
				label: "Conversation",
				href: "/conversation",
				icon: <MessageCircle size={20} />,
				active: pathname === "/conversation" || !!conversationId,
				clickHandler: () => {
					router.push("/conversation");
				},
			},
			{
				label: "Contacts",
				href: "/conversation/contacts",
				icon: <Users2 size={20} />,
				active: pathname === "/conversation/contacts",
				clickHandler: () => {
					router.push("/conversation/contacts");
				},
			},
			{
				label: "Home",
				href: "/",
				icon: <LogOut size={20} />,
				active: pathname === "/",
				clickHandler: () => {
					router.push("/");
				},
			},
		];
	}, [pathname, conversationId, router]);

	return routers;
};

export default useRouters;
