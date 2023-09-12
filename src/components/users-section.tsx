"use client";

import useContacts from "@/hooks/use-contacts";
import { memo } from "react";
import ListComponent from "./list-component";

type Props = {};

const UsersSection = (props: Props) => {
	const { isContactsOpen } = useContacts();

	return (
		<ListComponent notActive={!isContactsOpen} title="users">
			users
		</ListComponent>
	);
};

export default memo(UsersSection);
