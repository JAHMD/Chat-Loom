import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],
	callbacks: {
		async signIn({ user }) {
			try {
				return true;
			} catch (error) {
				return false;
			}
		},

		async session({ session }) {
			// session.id = "";s
			return session;
		},
	},
});

export { handler as GET, handler as POST };
