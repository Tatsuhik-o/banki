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
import { CreditCardType } from "./types";

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
