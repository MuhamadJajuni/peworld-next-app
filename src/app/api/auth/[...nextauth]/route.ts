import { login } from '@/lib/service';
import { compare } from 'bcrypt';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface CredentialsWithRole {
    email: string;
    password: string;
    role: string;
}

interface UserWithRole {
    email: string;
    fullname: string;
    role: string;
    // ... (tambahkan properti lain jika diperlukan)
}

const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
    },
    secret: "jun123",
    providers: [
        CredentialsProvider({
            type: "credentials",
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "Password" },
                role: { label: "Role", type: "text", placeholder: "Role" },
            },
            async authorize(credentials: CredentialsWithRole) {
                const { email, password, role } = credentials;

                const user: UserWithRole | null = await login({ email });

                if (user) {
                    const passwordConfirm = await compare(password, user.password);
                    if (passwordConfirm) {
                        if (user.role === role) {
                            // Tambahkan properti role ke token di sini
                            return { ...user, role };
                        } else {
                            // Role tidak sesuai
                            throw new Error("Role tidak sesuai");
                        }
                    } else {
                        // Password salah
                        throw new Error("Password salah");
                    }
                } else {
                    // Email tidak terdaftar
                    throw new Error("Email tidak terdaftar");
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, account, profile, user }: any) {
            if (account?.provider === "credentials") {
                // Pastikan properti role ada di token
                token.email = user.email;
                token.fullname = user.fullname;
                token.role = user.role;
            }
            return token;
        },

        async session({ session, token }: any) {
            if ("email" in token) {
                session.user.email = token.email;
            }
            if ("fullname" in token) {
                session.user.fullname = token.fullname;
            }
            if ("role" in token) {
                session.user.role = token.role;
            }
            return session;
        }
    },
    pages: {
        signIn: "/login",
    },
};

const handler = NextAuth(authOptions);

export {
    handler as GET,
    handler as POST
};
