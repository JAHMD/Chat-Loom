"use client";

import React, { useContext } from "react";
import { Input } from "../ui/input";
import { InputsContext, InputsContextType } from "./user-auth-form";

type Props = {
	id: "name" | "email" | "password";
	type: "email" | "text" | "password";
	placeholder: string;
	label: string;
	required: string;
};

const InputField = ({ id, label, type, required, placeholder }: Props) => {
	const { errors, register, isLoading } = useContext(
		InputsContext
	) as InputsContextType;

	return (
		<div className="flex flex-col gap-y-2 ">
			<label htmlFor={id} className="text-sm">
				{label}
			</label>
			<Input
				type={type}
				placeholder={placeholder}
				{...register(id, { required, disabled: isLoading })}
			/>
			{errors[id] ? (
				<p className="text-rose-500 text-sm font-medium">
					{errors[id]?.message}
				</p>
			) : null}
		</div>
	);
};

export default InputField;
