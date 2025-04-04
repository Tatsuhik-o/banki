import { z } from "zod";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
const isValidLuhn = (cardNumber: string): boolean => {
  let sum = 0;
  let shouldDouble = false;
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber[i]);
    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    sum += digit;
    shouldDouble = !shouldDouble;
  }
  return sum % 10 === 0;
};

export type TSideBar = {
  mobileView: boolean;
  setMobileView: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TTitle = {
  titleMessage: string;
};

export const CreditCardScheme = z.object({
  balance: z.string(),
  card_holder: z.string().min(5).max(45),
  expiry_date: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/),
  card_number: z.string().refine(isValidLuhn),
  type: z.enum(["primary", "secondary", "other"]),
  provider: z.enum(["visa", "mastercard", "american"]),
  bank: z.string().optional(),
});

export type CreditCardType = z.infer<typeof CreditCardScheme>;

export const transactionScheme = z.object({
  provider: z.enum(["paypal", "gpay", "card"]).optional(),
  colorTheme: z
    .string()
    .regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
    .optional(),
  date: z.date(),
  amount: z.string(),
  id: z
    .string()
    .regex(/^#\d{8}$/)
    .optional(),
  iconColor: z.string().optional(),
  service: z.string().optional(),
  type: z.enum(["Shopping", "Transfer", "Service"]).optional(),
  card: z
    .string()
    .regex(/^\d{4} \*{4}$/)
    .optional(),
  icon: z
    .custom<IconDefinition>(
      (val) => {
        if (typeof val !== "object" || val === null) return false;
        return "prefix" in val && "iconName" in val && "icon" in val;
      },
      { message: "Invalid FontAwesome IconDefinition" }
    )
    .optional(),
});

export type TransactionType = z.infer<typeof transactionScheme>;

export type FriendType = {
  name: string;
  profile: string;
  tag: string;
};

export const FullTransactionSchema = z.object({
  description: z.string(),
  id: z.string().regex(/^#\d{8}$/),
  type: z.enum(["Shopping", "Transfer", "Service"]),
  card: z.string().regex(/^\d{4} \*{4}$/),
  date: z.string(),
  amount: z.number().min(1).max(5000),
});

export type FullTransaction = z.infer<typeof FullTransactionSchema>;

export const BoxInfoScheme = z.object({
  icon: z.custom<IconDefinition>(),
  primaryColor: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
  secondaryColor: z.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/),
  title: z.string(),
  content: z.string(),
  date: z.date().optional(),
  type: z.enum(["Shopping", "Service", "Transfer"]).optional(),
  card: z
    .string()
    .regex(/[A-Za-z0-9]{4} \*{4}$/)
    .optional(),
  status: z.enum(["pending", "compeleted", "rejected"]).optional(),
  column1: z.string().optional(),
  column2: z.string().optional(),
  column3: z.string().optional(),
});

export type BoxInfo = z.infer<typeof BoxInfoScheme>;

export const OneSettingOption = z.object({
  icon: z.custom<IconDefinition>(),
  name: z.string(),
  desc: z.string(),
  color: z.string(),
  bgColor: z.string(),
});

export type OneSettingType = z.infer<typeof OneSettingOption>;

export const LoanSchema = z.object({
  id: z.number(),
  loanMoney: z.number(),
  leftMoney: z.number(),
  duration: z.number(),
  interest: z.number(),
  installement: z.number().min(1).max(5),
});

export type LoanDataType = z.infer<typeof LoanSchema>;
