import { z } from "zod";

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
  type: z.enum(["primary", "secondary"]),
  provider: z.enum(["visa", "mastercard", "american"]),
});

export type CreditCardType = z.infer<typeof CreditCardScheme>;
