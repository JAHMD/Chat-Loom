import React from "react";

const FormSeparator = () => {
	return (
		<div className="flex items-center w-full uppercase shrink-0 text-xs text-muted-foreground gap-2">
			<span className="h-[1px] rounded-full flex-1 bg-border" />
			or
			<span className="h-[1px] rounded-full flex-1 bg-border" />
		</div>
	);
};

export default FormSeparator;
