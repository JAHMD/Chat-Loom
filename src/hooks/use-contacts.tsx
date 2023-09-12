"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

export default function useContacts() {
	const pathname = usePathname();

	const isContactsOpen = useMemo(
		() => pathname.endsWith("/contacts"),
		[pathname]
	);

	return { isContactsOpen };
}
