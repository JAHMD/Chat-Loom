import { useParams } from "next/navigation";
import { useMemo } from "react";

export default function useConversationId() {
	const params = useParams();

	const conversationId = useMemo(() => {
		if (!params?.id) {
			return "";
		}

		return params.id as string;
	}, [params.id]);

	const isConversationOpen = useMemo(() => !!conversationId, [conversationId]);

	return { isConversationOpen, conversationId };
}
