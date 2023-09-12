"use client";

import useContacts from "@/hooks/use-contacts";
import ListComponent from "./list-component";
import { SidebarNav } from "./sidebar/sidebar-nav";

type Props = {
	linkItems: { href: string; title: string }[];
};

const ChatListSection = ({ linkItems }: Props) => {
	const { isContactsOpen } = useContacts();

	return (
		<ListComponent notActive={isContactsOpen} title="chat">
			<SidebarNav items={linkItems} />
		</ListComponent>
	);
};

export default ChatListSection;
