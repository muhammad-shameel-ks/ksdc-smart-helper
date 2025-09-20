import { SignIn } from "@clerk/clerk-react";

interface SignInPageProps {
  setAuthPage: (page: "signIn" | "signUp") => void;
}

export default function SignInPage({ setAuthPage }: SignInPageProps) {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <SignIn signUpUrl="/sign-up" />
      <button onClick={() => setAuthPage("signUp")} style={{ position: "absolute", bottom: "20px" }}>
        Don't have an account? Sign up
      </button>
    </div>
  );
}