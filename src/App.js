import React, { useState } from "react";
import Header from "./components/Header";
import EmailSpamChecker from './components/EmailSpamChecker';
import FeatureSection from "./components/FeatureSection";
import HowItWorks from "./components/HowItWorks";
import SampleEmails from "./components/SampleEmails";
import Analyzer from "./components/Analyzer";
import Footer from "./components/Footer";

function App() {
  const [emailContent, setEmailContent] = useState("");

  const handleSelectEmail = (email) => {
    setEmailContent(email); // This will automatically update Analyzer
    setTimeout(() => {
      document.getElementById("analyzer")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div>
      <Header />
      <EmailSpamChecker />

      {/* ✅ Always show analyzer before sample emails */}
      <Analyzer emailContent={emailContent} setEmailContent={setEmailContent} />

      <SampleEmails onSelectEmail={handleSelectEmail} />

      <FeatureSection />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
