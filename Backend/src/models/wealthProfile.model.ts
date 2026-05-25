import mongoose, { Document, Schema } from "mongoose";

export interface IWealthProfile extends Document {
  user: mongoose.Types.ObjectId;

  // Step 1 - Personal Info
  age: number;
  income: number;
  maritalStatus: string;
  dependents: number;
  location: string;
  riskAppetite: string;

  // Step 2 - Liquidity
  cash: number;
  savings: number;
  fixedDeposit: number;
  mutualFunds: number;

  // Step 3 - Investments
  equity: number;
  fixedIncome: number;
  realEstate: number;
  gold: number;

  // Step 4 - Debts
  homeLoan: number;
  carLoan: number;
  personalLoan: number;
  creditCard: number;

  // Step 5 - Insurance
  termInsurance: boolean;
  healthInsurance: boolean;
  criticalIllness: boolean;

  // Form progress
  currentStep: number;
  isCompleted: boolean;

  createdAt: Date;
  updatedAt: Date;
}

const WealthProfileSchema = new Schema<IWealthProfile>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    // Step 1
    age: { type: Number, default: 0 },
    income: { type: Number, default: 0 },
    maritalStatus: { type: String, default: "" },
    dependents: { type: Number, default: 0 },
    location: { type: String, default: "" },
    riskAppetite: { type: String, default: "" },

    // Step 2
    cash: { type: Number, default: 0 },
    savings: { type: Number, default: 0 },
    fixedDeposit: { type: Number, default: 0 },
    mutualFunds: { type: Number, default: 0 },

    // Step 3
    equity: { type: Number, default: 0 },
    fixedIncome: { type: Number, default: 0 },
    realEstate: { type: Number, default: 0 },
    gold: { type: Number, default: 0 },

    // Step 4
    homeLoan: { type: Number, default: 0 },
    carLoan: { type: Number, default: 0 },
    personalLoan: { type: Number, default: 0 },
    creditCard: { type: Number, default: 0 },

    // Step 5
    termInsurance: { type: Boolean, default: false },
    healthInsurance: { type: Boolean, default: false },
    criticalIllness: { type: Boolean, default: false },

    // Progress
    currentStep: { type: Number, default: 1 },
    isCompleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const WealthProfile = mongoose.model<IWealthProfile>(
  "WealthProfile",
  WealthProfileSchema
);

export default WealthProfile;