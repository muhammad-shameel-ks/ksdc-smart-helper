import { SignUp } from "@clerk/clerk-react";

interface SignUpPageProps {
  setAuthPage: (page: "signIn" | "signUp") => void;
}

export default function SignUpPage({ setAuthPage }: SignUpPageProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <SignUp signInUrl="/sign-in" />
      <button
        onClick={() => setAuthPage("signIn")}
        style={{ position: "absolute", bottom: "20px" }}
      >
        Already have an account? Sign in
      </button>
    </div>
  );
}
