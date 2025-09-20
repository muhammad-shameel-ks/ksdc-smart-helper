import { useState } from "react";
import BusinessCalculators from "./components/BusinessCalculators";
import DeductionCalculator from "./components/DeductionCalculator";
import SmartPartPaymentGen from "./components/SmartPartPaymentGen";
import { ReceiptChecker } from "./components/ReceiptChecker";
import TransactionCanceller from "./components/TransactionCanceller";
import BankGenerator from "./components/BankGenerator";
import SchemeChanger from "./components/SchemeChanger";
import { AppSidebar } from "./components/app-sidebar";
import { SiteHeader } from "./components/site-header";
import { SidebarProvider, SidebarInset } from "./components/ui/sidebar";
import { LoanAppIdFinder } from "./components/LoanAppIdFinder";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import { useUser } from "@clerk/clerk-react";

function App() {
  const { isLoaded, isSignedIn } = useUser();
  const [page, setPage] = useState("business-calculators");
  const [authPage, setAuthPage] = useState<"signIn" | "signUp">(() => {
    if (window.location.pathname === "/sign-up") {
      return "signUp";
    }
    return "signIn";
  });

  const renderPage = () => {
    if (page === "business-calculators") {
      return <BusinessCalculators />;
    } else if (page === "deduction") {
      return <DeductionCalculator />;
    } else if (page === "smart-part-payment-gen") {
      return <SmartPartPaymentGen />;
    } else if (page === "receipt-checker") {
      return <ReceiptChecker />;
    } else if (page === "transaction-canceller") {
      return <TransactionCanceller />;
    } else if (page === "bank-generator") {
      return <BankGenerator />;
    } else if (page === "scheme-changer") {
      return <SchemeChanger />;
    }
    return <BusinessCalculators />;
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    if (authPage === "signIn") {
      return <SignInPage setAuthPage={setAuthPage} />;
    } else {
      return <SignUpPage setAuthPage={setAuthPage} />;
    }
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <AppSidebar setPage={setPage} className="w-64" />
        <SidebarInset>
          <div className="flex-1 flex flex-col">
            <SiteHeader />
            <main className="flex-1 p-6 overflow-auto">{renderPage()}</main>
          </div>
        </SidebarInset>
        <LoanAppIdFinder />
      </div>
    </SidebarProvider>
  );
}

export default App;
