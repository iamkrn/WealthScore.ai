import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../components/ui/FormInput";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import useProfileStore from "../store/useProfileStore";

export default function WealthForm() {
  const navigate = useNavigate();
  const { saveStep, submitProfile, isLoading, error } = useProfileStore();

  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    age: "",
    income: "",
    marital: "",
    dependents: "",
    location: "",
    risk: "",
    cash: "",
    savings: "",
    fd: "",
    mutual: "",
    equity: "",
    fixed: "",
    realEstate: "",
    gold: "",
    homeLoan: "",
    carLoan: "",
    personalLoan: "",
    creditCard: "",
    termInsurance: "",
    healthInsurance: "",
    critical: "",
  });

  const totalField = Object.keys(form).length;
  const filledForm = Object.values(form).filter((v) => v !== "").length;
  const progress = Math.round((filledForm / totalField) * 100);

  type FormType = typeof form;

  const handleChange = (key: keyof FormType, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const getStepData = (currentStep: number) => {
    if (currentStep === 1) return {
      age: Number(form.age),
      income: Number(form.income),
      maritalStatus: form.marital,
      dependents: Number(form.dependents),
      location: form.location,
      riskAppetite: form.risk,
    };
    if (currentStep === 2) return {
      cash: Number(form.cash),
      savings: Number(form.savings),
      fixedDeposit: Number(form.fd),
      mutualFunds: Number(form.mutual),
    };
    if (currentStep === 3) return {
      equity: Number(form.equity),
      fixedIncome: Number(form.fixed),
      realEstate: Number(form.realEstate),
      gold: Number(form.gold),
    };
    if (currentStep === 4) return {
      homeLoan: Number(form.homeLoan),
      carLoan: Number(form.carLoan),
      personalLoan: Number(form.personalLoan),
      creditCard: Number(form.creditCard),
    };
    if (currentStep === 5) return {
      termInsurance: form.termInsurance === "yes",
      healthInsurance: form.healthInsurance === "yes",
      criticalIllness: form.critical === "yes",
    };
    return {};
  };

  const handleNext = async () => {
    const data = getStepData(step);
    const success = await saveStep(step, data);
    if (success) setStep(step + 1);
  };

  const handleSubmit = async () => {
    const data = getStepData(5);
    const saved = await saveStep(5, data);
    if (!saved) return;
    const submitted = await submitProfile();
    if (submitted) {
      navigate("/");
      alert("Profile submit ho gayi! Score jaldi aa jayega 🎉");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <h1 className="text-2xl md:text-4xl text-center font-semibold mt-9 mb-2">
        Let's Personalize Your Wealth Score
      </h1>
      <p className="text-center text-gray-400 mb-8">
        Fill in your financial details securely, it only takes 2 minutes.
      </p>

      {/* Progress Bar */}
      <div className="max-w-5xl mx-auto mb-6 px-4">
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          {["Personal", "Liquidity", "Investments", "Debts", "Insurance"].map((label, i) => (
            <span key={i} className={step === i + 1 ? "text-cyan-400 font-medium" : ""}>
              {label}
            </span>
          ))}
        </div>
        <div className="w-full bg-gray-800 h-2 rounded-full">
          <div
            className="h-2 rounded-full bg-linear-to-r from-yellow-400 to-cyan-400 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm text-gray-400 mt-2 text-right">{progress}% completed</p>
      </div>

      {/* Card */}
      <div className="max-w-5xl mx-auto bg-[#111827] p-6 rounded-2xl border border-gray-800 space-y-8 mx-4">

        {error && (
          <p className="text-red-400 text-sm bg-red-400/10 px-3 py-2 rounded-lg">{error}</p>
        )}

        {/* Step 1 - Personal Info */}
        {step === 1 && (
          <Section title="Personal Information" subtitle="Tell us about yourself">
            <FormInput
              label="Age"
              value={form.age}
              onChange={(v) => handleChange("age", v)}
              placeholder="Enter your age"
            />
            <FormInput
              label="Monthly Income"
              value={form.income}
              onChange={(v) => handleChange("income", v)}
              isMoney
              placeholder="Your monthly take-home"
            />
            <FormInput
              label="Marital Status"
              value={form.marital}
              onChange={(v) => handleChange("marital", v)}
              options={[
                { label: "Single", value: "single" },
                { label: "Married", value: "married" },
                { label: "Divorced", value: "divorced" },
                { label: "Widowed", value: "widowed" },
              ]}
            />
            <FormInput
              label="Number of Dependents"
              value={form.dependents}
              onChange={(v) => handleChange("dependents", v)}
              options={[
                { label: "None", value: "0" },
                { label: "1", value: "1" },
                { label: "2", value: "2" },
                { label: "3", value: "3" },
                { label: "4 or more", value: "4" },
              ]}
            />
            <FormInput
              label="City Tier"
              value={form.location}
              onChange={(v) => handleChange("location", v)}
              options={[
                { label: "Tier 1 — Metro (Mumbai, Delhi, Bangalore)", value: "tier1" },
                { label: "Tier 2 — Mid City (Pune, Jaipur, Lucknow)", value: "tier2" },
                { label: "Tier 3 — Small City / Town", value: "tier3" },
                { label: "Rural", value: "rural" },
              ]}
            />
            <FormInput
              label="Risk Appetite"
              value={form.risk}
              onChange={(v) => handleChange("risk", v)}
              options={[
                { label: "Conservative — Safety first", value: "conservative" },
                { label: "Moderate — Balanced approach", value: "moderate" },
                { label: "Aggressive — High growth", value: "aggressive" },
              ]}
            />
          </Section>
        )}

        {/* Step 2 - Liquidity */}
        {step === 2 && (
          <Section title="Liquidity Assessment" subtitle="Your easily accessible money">
            <FormInput label="Cash in Hand" value={form.cash} onChange={(v) => handleChange("cash", v)} isMoney placeholder="Physical cash at home" />
            <FormInput label="Savings Account Balance" value={form.savings} onChange={(v) => handleChange("savings", v)} isMoney placeholder="Total bank savings" />
            <FormInput label="Fixed Deposits (FD)" value={form.fd} onChange={(v) => handleChange("fd", v)} isMoney placeholder="Total FD value" />
            <FormInput label="Mutual Funds" value={form.mutual} onChange={(v) => handleChange("mutual", v)} isMoney placeholder="Current market value" />
          </Section>
        )}

        {/* Step 3 - Investments */}
        {step === 3 && (
          <Section title="Investment Portfolio" subtitle="Your wealth building assets">
            <FormInput label="Equity / Stocks" value={form.equity} onChange={(v) => handleChange("equity", v)} isMoney placeholder="Direct stocks value" />
            <FormInput label="Fixed Income (Bonds/PPF/NPS)" value={form.fixed} onChange={(v) => handleChange("fixed", v)} isMoney placeholder="Total value" />
            <FormInput label="Real Estate" value={form.realEstate} onChange={(v) => handleChange("realEstate", v)} isMoney placeholder="Property market value" />
            <FormInput label="Gold / Silver / Others" value={form.gold} onChange={(v) => handleChange("gold", v)} isMoney placeholder="Total value" />
          </Section>
        )}

        {/* Step 4 - Debts */}
        {step === 4 && (
          <Section title="Debts & Liabilities" subtitle="Your outstanding obligations">
            <FormInput label="Home Loan Outstanding" value={form.homeLoan} onChange={(v) => handleChange("homeLoan", v)} isMoney placeholder="Remaining loan amount" />
            <FormInput label="Car Loan Outstanding" value={form.carLoan} onChange={(v) => handleChange("carLoan", v)} isMoney placeholder="Remaining loan amount" />
            <FormInput label="Personal Loan Outstanding" value={form.personalLoan} onChange={(v) => handleChange("personalLoan", v)} isMoney placeholder="Remaining loan amount" />
            <FormInput label="Credit Card Debt" value={form.creditCard} onChange={(v) => handleChange("creditCard", v)} isMoney placeholder="Total outstanding" />
          </Section>
        )}

        {/* Step 5 - Insurance */}
        {step === 5 && (
          <Section title="Insurance Coverage" subtitle="Your financial safety net">
            <FormInput
              label="Term Life Insurance"
              value={form.termInsurance}
              onChange={(v) => handleChange("termInsurance", v)}
              options={[
                { label: "Yes — I have term insurance", value: "yes" },
                { label: "No — I don't have it", value: "no" },
              ]}
            />
            <FormInput
              label="Health Insurance"
              value={form.healthInsurance}
              onChange={(v) => handleChange("healthInsurance", v)}
              options={[
                { label: "Yes — I have health insurance", value: "yes" },
                { label: "No — I don't have it", value: "no" },
              ]}
            />
            <FormInput
              label="Critical Illness Cover"
              value={form.critical}
              onChange={(v) => handleChange("critical", v)}
              options={[
                { label: "Yes — I have critical illness cover", value: "yes" },
                { label: "No — I don't have it", value: "no" },
              ]}
            />
          </Section>
        )}

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="px-6 py-2 bg-gray-700 rounded-lg text-white hover:bg-gray-600 transition"
            >
              ← Back
            </button>
          )}

          {step < 5 ? (
            <button
              onClick={handleNext}
              disabled={isLoading}
              className="ml-auto px-6 py-2 bg-linear-to-r from-yellow-400 to-cyan-400 text-black rounded-lg font-medium disabled:opacity-50"
            >
              {isLoading ? "Saving..." : "Next →"}
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="ml-auto px-6 py-2 bg-green-500 rounded-lg font-medium disabled:opacity-50"
            >
              {isLoading ? "Submitting..." : "Submit & Get Score 🚀"}
            </button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-gray-400 text-sm mt-1">{subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {children}
      </div>
    </div>
  );
}