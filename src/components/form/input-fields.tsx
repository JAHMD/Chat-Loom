import React, { useContext } from "react";
import { Button } from "../ui/button";
import InputField from "./input";
import { InputsContext, InputsContextType } from "./user-auth-form";

const InputFields = () => {
	const { isLoading, variant } = useContext(InputsContext) as InputsContextType;

	return (
		<div className="flex flex-col gap-y-4">
			{variant === "register" ? (
				<InputField
					id="name"
					type="text"
					label="Name"
					placeholder="Ahmed Wael"
					required="Name is required"
				/>
			) : null}
			<InputField
				id="email"
				type="email"
				label="Email address"
				placeholder="ahmed@email.com"
				required="Email is required"
			/>
			<InputField
				id="password"
				type="password"
				label="Password"
				placeholder="@password123"
				required="Password is required"
			/>
			<Button disabled={isLoading} onClick={() => {}} className="font-semibold">
				{variant === "login" ? "Sign in" : "Register"}
			</Button>
		</div>
	);
};

export default InputFields;
