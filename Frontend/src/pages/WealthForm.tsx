import React from "react";
import { useState } from "react";
import FormInput from "../components/ui/FormInput";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

export default function WealthForm() {

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
  const [step,setStep] = useState(1);

const totalField =  Object.keys(form).length;
const filledForm = Object.values(form).filter((value)=> value !== "").length

const progress = Math.round((filledForm/totalField)*100)


type FormType = typeof form;

const handleChange = (key: keyof FormType, value: string) => {
setForm((prev) => ({
  ...prev,
  [key]: value,
}));
};
  const handleSubmit = () => {
    console.log(form);
    alert("Form Submitted ");
  };

  return (
  
    
    <div className="min-h-screen bg-black text-white ">
       
      <Navbar/>
   
      {/* Title */}
      <h1 className="text-2xl md:text-4xl text-center font-semibold mt-9 mb-2">
        Let’s Personalize Your Wealth Score
      </h1>

      <p className="text-center text-gray-400 mb-8">
        Fill in your financial details securely, it only takes 2 minutes.
      </p>


      {/* Progress Bar */}
        <div className="max-w-5xl mx-auto mb-6">
        <div className="w-full bg-gray-800 h-2 rounded-full">
            <div
            className="h-2 rounded-full bg-linear-to-r from-yellow-400 to-cyan-400 transition-all"
            style={{ width: `${progress}%` }}
            />
        </div>

        <p className="text-sm text-gray-400 mt-2 text-right">
            {progress}% completed
        </p>
        </div>

      
      {/* Card */}
      <div className="max-w-5xl mx-auto bg-[#111827] p-6 rounded-2xl border border-gray-800 space-y-8">

        {/*  Personal Info */}
        {step === 1 && (
            <Section title="Personal Information">
          <FormInput label="Age" value={form.age}  onChange={(v)=>handleChange("age", v)} />
          <FormInput label="Monthly Income" value={form.income} onChange={(v)=>handleChange("income", v)} />
          <FormInput label="Marital Status" value={form.marital} onChange={(v)=>handleChange("marital", v)} />
          <FormInput label="Dependents" value={form.dependents} onChange={(v)=>handleChange("dependents", v)} />
          <FormInput label="Location Tier" value={form.location} onChange={(v)=>handleChange("location", v)} />
          <FormInput label="Risk Profile" value={form.risk} onChange={(v)=>handleChange("risk", v)}  />
        </Section>

        )}

        {/*  Liquidity */}
        {step === 2 && (
          <Section title="Liquidity Assessment">
          <FormInput label="Cash in hand" value={form.cash} onChange={(v)=>handleChange("cash", v)} isMoney />
          <FormInput label="Savings account balance" value={form.savings} onChange={(v)=>handleChange("savings", v)} isMoney />
          <FormInput label="Fixed Deposits" value={form.fd} onChange={(v)=>handleChange("fd", v)} isMoney/>
          <FormInput label="Mutual Funds" value={form.mutual} onChange={(v)=>handleChange("mutual", v)} isMoney />
        </Section>

        )}

        {/*  Investments */}
        {step === 3 && (
            <Section title="Investment Portfolio">
          <FormInput label="Equity Investments" value={form.equity} onChange={(v)=>handleChange("equity", v)} isMoney />
          <FormInput label="Fixed Income Investments" value={form.fixed} onChange={(v)=>handleChange("fixed", v)} isMoney />
          <FormInput label="Real Estate" value={form.realEstate} onChange={(v)=>handleChange("realEstate", v)} isMoney />
          <FormInput label="Gold / Others" value={form.gold} onChange={(v)=>handleChange("gold", v)} isMoney />
        </Section>

        )}

        {/*  Debts */}
        {step === 4 && (
        <Section title="Debts & Liabilities">
          <FormInput label="Home Loan" value={form.homeLoan} onChange={(v)=>handleChange("homeLoan", v)} isMoney />
          <FormInput label="Car Loan" value={form.carLoan} onChange={(v)=>handleChange("carLoan", v)} isMoney />
          <FormInput label="Personal Loan" value={form.personalLoan} onChange={(v)=>handleChange("personalLoan", v)} isMoney />
          <FormInput label="Credit Card Debt" value={form.creditCard} onChange={(v)=>handleChange("creditCard", v)} isMoney />
        </Section>

        )}

        {/*  Insurance */}
        {step === 5 && (
          <Section title="Insurance Coverage">
          <FormInput label="Term Life Insurance" value={form.termInsurance} onChange={(v)=>handleChange("termInsurance", v)} isMoney />
          <FormInput label="Health Insurance" value={form.healthInsurance} onChange={(v)=>handleChange("healthInsurance", v)} isMoney />
          <FormInput label="Critical Illness Cover" value={form.critical} onChange={(v)=>handleChange("critical", v)} isMoney />
        </Section>

        )}
        {/* Button */}
        <div className="flex justify-between mt-6">

  {/* Back */}
  {step > 1 && (
    <button
      onClick={() => setStep(step - 1)}
      className="px-4 py-2 bg-gray-700 rounded"
    >
      Back
    </button>
  )}

  {/* Next or Submit */}
        {step < 5 ? (
            <button
            onClick={() => setStep(step + 1)}
            className="ml-auto px-4 py-2 bg-linear-to-r from-yellow-400 to-cyan-400 text-black rounded"
            >
            Next
            </button>
        ) : (
            <button
            onClick={handleSubmit}
            className="ml-auto px-4 py-2 bg-green-500 rounded"
            >
            Submit
            </button>
        )}

        </div>
            </div>
            <Footer/>
            </div>
  

        
        
      )
        }
        

/*  Section Wrapper */
function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {children}
      </div>
    </div>
  );
  
}