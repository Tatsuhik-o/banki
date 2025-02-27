import {
  faHouse,
  faMoneyCheckDollar,
  faUser,
  faChartSimple,
  faCreditCard,
  faPiggyBank,
  faScrewdriverWrench,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { faMoneyBills } from "@fortawesome/free-solid-svg-icons";
import { faPaypal, faGooglePay } from "@fortawesome/free-brands-svg-icons";
import { CreditCardType } from "./types";
import { TransactionType } from "./types";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FriendType } from "./types";

export const nav_bar = [
  {
    icon: faHouse,
    name: "Dashboard",
  },
  {
    icon: faMoneyCheckDollar,
    name: "Transactions",
  },
  {
    icon: faUser,
    name: "Accounts",
  },
  {
    icon: faChartSimple,
    name: "Investments",
  },
  {
    icon: faCreditCard,
    name: "Cards",
  },
  {
    icon: faPiggyBank,
    name: "Loans",
  },
  {
    icon: faScrewdriverWrench,
    name: "Services",
  },
  {
    icon: faGear,
    name: "Settings",
  },
];

export const my_credit_cards: CreditCardType[] = [
  {
    balance: formatBalance(1420),
    card_holder: "Taha HALIM",
    expiry_date: "10/28",
    card_number: "4532015112830366",
    type: "primary",
    provider: "visa",
  },
  {
    balance: formatBalance(24810),
    card_holder: "Salma Faiz",
    expiry_date: "02/26",
    card_number: "5258319275342063",
    type: "secondary",
    provider: "mastercard",
  },
  {
    balance: formatBalance(15460),
    card_holder: "Imane Rossafi",
    expiry_date: "01/29",
    card_number: "4539148803436467",
    type: "secondary",
    provider: "visa",
  },
  {
    balance: formatBalance(3483),
    card_holder: "Kamal Tangui",
    expiry_date: "06/26",
    card_number: "6011590423789154",
    type: "secondary",
    provider: "american",
  },
];

export function formatBalance(balance: number): string {
  return balance
    .toFixed()
    .split("")
    .reverse()
    .map((elem, idx) => {
      if (Number(idx) % 3 === 0 && idx !== 0) return elem + ",";
      return elem;
    })
    .reverse()
    .join("");
}

export function hideCreditCard(credit_card: string): string {
  return credit_card
    .split("")
    .map((elem, idx) => {
      if (idx < 4 || idx >= 12) return elem;
      return "*";
    })
    .map((elem, idx) => {
      if ((idx + 1) % 4 === 0) return elem + " ";
      return elem;
    })
    .join("");
}

export const recent_transactions: (TransactionType & {
  icon: IconDefinition;
})[] = [
  {
    provider: "card",
    colorTheme: "#FFF5D9",
    date: new Date("28 January 2025"),
    amount: "-$" + formatBalance(850),
    icon: faMoneyBills,
    iconColor: "#FFBB38",
  },
  {
    provider: "paypal",
    colorTheme: "#E7EDFF",
    date: new Date("17 July 2024"),
    amount: "+$" + formatBalance(2500),
    icon: faPaypal,
    iconColor: "#396AFF",
  },
  {
    provider: "gpay",
    colorTheme: "#DCFAF8",
    date: new Date("12 February 2024"),
    amount: "+$" + formatBalance(5400),
    icon: faGooglePay,
    iconColor: "#16DBCC",
  },
];

export const fullDayNames = {
  Sat: "Saturday",
  Sun: "Sunday",
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
};

export const friends: FriendType[] = [
  {
    name: "Guillermo",
    profile: "https://avatar.iran.liara.run/public",
    tag: "Manager",
  },
  {
    name: "Imane",
    profile: "https://avatar.iran.liara.run/public",
    tag: "CEO",
  },
  {
    name: "Kamal",
    profile: "https://avatar.iran.liara.run/public",
    tag: "Employee",
  },
];

export const balances: number[] = [110, 230, 460, 780, 210, 570, 220, 600];
export const expenses: number[] = [30, 15, 20, 35];
export const deposits: number[] = [490, 350, 320, 490, 170, 380, 390];
export const withdraws: number[] = [230, 140, 260, 370, 240, 240, 320];
