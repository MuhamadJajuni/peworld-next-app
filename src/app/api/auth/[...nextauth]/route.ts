import { compare } from 'bcrypt';
import { login } from '@/lib/service';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface CredentialsWithRole {
  email: string;
  password: string;
  role: string;
}

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: 'credentials',
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email', placeholder: 'Email' },
        password: { label: 'Password', type: 'password', placeholder: 'Password' },
        role: { label: 'Role', type: 'text', placeholder: 'Role' },
      },
      async authorize(credentials: CredentialsWithRole | undefined, req: any) {
        if (!credentials) {
          throw new Error('Credentials are undefined');
        }

        const { email, password, role } = credentials;

        try {
          const user: any = await login({ email });

          if (user) {
            const passwordConfirm = await compare(password, user.password);

            if (passwordConfirm && user.role === role) {
              // Include userId in the token
              return { ...user, userId: user.id };
            }
          }

          return null;
        } catch (error) {
          throw new Error('Failed to login');
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account?.provider === 'credentials') {
        // Include userId in the token
        token.userId = user.userId;
        token.email = user.email;
        token.name = user.name;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }: any) {
      if ('userId' in token) {
        // Include userId in the session
        session.user.userId = token.userId;
      }
      if ('email' in token) {
        session.user.email = token.email;
      }
      if ('name' in token) {
        session.user.name = token.name;
      }
      if ('role' in token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
