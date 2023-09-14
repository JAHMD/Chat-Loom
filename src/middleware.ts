import { NextRequest } from "next/server";

export const middleware = (req: NextRequest) => {
	const pathname = req.nextUrl.pathname;
};

export const config = {
	mathre: ["/", "/conversation/:path*", "/contacts"],
};
