"use client";

import { cn } from "@/lib/utils";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { createContext, useCallback, useState } from "react";
import {
	FieldErrors,
	SubmitHandler,
	UseFormRegister,
	useForm,
} from "react-hook-form";
import { Button, buttonVariants } from "../ui/button";
import InputField from "./input";
import InputFields from "./input-fields";
import FormSeparator from "./separator";
import SocialAuthButtons from "./social-buttons";

type Props = {};

export type Inputs = {
	name?: string;
	email: string;
	password: string;
};

type VariantType = "login" | "register";

export type InputsContextType = {
	errors: FieldErrors<Inputs>;
	register: UseFormRegister<Inputs>;
	isLoading: boolean;
	variant: VariantType;
};

export const InputsContext = createContext<InputsContextType | null>(null);

const UserAuthForm = (props: Props) => {
	const [variant, setVariant] = useState<VariantType>("login");
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const toggleVariant = useCallback(() => {
		if (variant === "login") {
			setVariant("register");
		} else setVariant("login");
	}, [variant]);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (data) => {
		setIsLoading(true);
		console.log(data);
		setIsLoading(false);
		reset();
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col gap-y-4 border rounded-md p-6"
		>
			<InputsContext.Provider value={{ variant, isLoading, errors, register }}>
				<InputFields />
			</InputsContext.Provider>

			<FormSeparator />

			<SocialAuthButtons />

			<div className="text-sm text-center flex items-center gap-2 justify-center">
				{variant === "login" ? "New to ChatLoom?" : "Already a user?"}
				<Button
					variant="link"
					type="button"
					disabled={isLoading}
					onClick={toggleVariant}
					className="font-semibold p-0"
				>
					{variant === "login" ? "Create an account" : "Sign in"}
				</Button>
			</div>
		</form>
	);
};

export default UserAuthForm;
