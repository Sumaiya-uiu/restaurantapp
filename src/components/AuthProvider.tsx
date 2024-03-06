"use client";

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
