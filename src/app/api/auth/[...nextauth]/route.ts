import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

interface CredentialsWithRole {
  email: string;
  password: string;
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
      },
      async authorize(credentials: CredentialsWithRole | undefined, req: any) {
        if (!credentials) {
          throw new Error('Credentials are undefined');
        }

        const { email } = credentials;

        try {
          const res = await fetch("https://hire-job-backend-rho.vercel.app/login", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
          });

          const user = await res.json();

          if (user && user.data.email === email) {
            return { ...user, userId: user.id };
          }
          return null;
        } catch (error) {
          console.error('Failed to login:', error);
          throw new Error('Failed to login');
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }: any) {
      if (account?.provider === 'credentials' && user) {
        token.userId = user.data.id;
        token.email = user.data.email;
        token.name = user.data.name;
        token.role = user.data.role;
      }
      return token;
    },
    async session({ session, token }: any) {
      if ('userId' in token) {
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
