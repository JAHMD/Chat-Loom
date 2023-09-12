"use client";

import useConversationId from "@/hooks/use-conversationId";

const EmptyChat = () => {
	const { isConversationOpen } = useConversationId();

	if (isConversationOpen) {
		return null;
	}

	return (
		<section className="hidden sm:flex items-center justify-center w-full flex-1 sm:h-screen">
			<p className="first-letter:uppercase text-lg font-semibold text-center">
				select a chat or start a new conversation.
			</p>
		</section>
	);
};

export default EmptyChat;
