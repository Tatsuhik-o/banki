import {
  faHouse,
  faMoneyCheckDollar,
  faUser,
  faCreditCard,
  faPiggyBank,
  faScrewdriverWrench,
  faGear,
  faMoneyBills,
  faSackDollar,
  faHandHoldingDollar,
  faFileInvoiceDollar,
  faHeadphonesSimple,
  faFilm,
  faLock,
  faLockOpen,
  faKey,
  faBriefcase,
  faChartSimple,
  faHandshake,
  faWallet,
  faUserShield,
  faChartLine,
  faGlobe,
  faMobileAlt,
  faExchangeAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faPaypal,
  faGooglePay,
  faApplePay,
  faPlaystation,
} from "@fortawesome/free-brands-svg-icons";
import { CreditCardType } from "./types";
import { TransactionType } from "./types";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FriendType } from "./types";
import { BoxInfo } from "./types";
import { OneSettingType } from "./types";
import { LoanDataType } from "./types";

export const routes: string[] = [
  "",
  "Dashboard",
  "Transactions",
  "Accounts",
  "Investements",
  "Cards",
  "Loans",
  "Services",
  "Settings",
];

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
    bank: "CIH",
  },
  {
    balance: formatBalance(24810),
    card_holder: "Salma Faiz",
    expiry_date: "02/26",
    card_number: "5258319275342063",
    type: "secondary",
    provider: "mastercard",
    bank: "CIH",
  },
  {
    balance: formatBalance(15460),
    card_holder: "Imane Rossafi",
    expiry_date: "01/29",
    card_number: "4539148803436467",
    type: "other",
    provider: "american",
    bank: "BOJ",
  },
  {
    balance: formatBalance(3483),
    card_holder: "Kamal Tangui",
    expiry_date: "06/26",
    card_number: "6011590423789154",
    type: "other",
    provider: "american",
    bank: "BOA",
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
export const monthly_expenses: number[] = Array.from({ length: 6 }, () =>
  Math.floor(Math.random() * 10000 + 5000)
);
export const deposits: number[] = [490, 350, 320, 490, 170, 380, 390];
export const withdraws: number[] = [230, 140, 260, 370, 240, 240, 320];
export const generateMonths = (num: number): string[] => {
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentMonth: number = new Date().getMonth();
  return Array.from({ length: num }, (_, idx) => {
    return months[(currentMonth + idx) % months.length];
  });
};
export const generateDays = (num: number): string[] => {
  const days: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date().getDay();
  return Array.from({ length: num }, (_, idx) => {
    return days[(today + idx) % days.length];
  });
};

export const maxIndex = (arr: number[]): number =>
  arr.indexOf(Math.max(...arr));

export const minIndex = (arr: number[]): number =>
  arr.indexOf(Math.min(...arr));

const transactionDescriptions = [
  "Purchase at Amazon",
  "Subscription to Netflix",
  "Donation to Red Cross",
  "Loan to Mouna",
  "Payment for Spotify Premium",
  "Grocery shopping at Walmart",
  "Gas station payment at Shell",
  "Uber ride to downtown",
  "Monthly rent payment",
  "Coffee purchase at Starbucks",
  "Gym membership renewal",
  "Payment for mobile phone bill",
  "Hotel booking at Marriott",
  "Flight ticket with Delta Airlines",
  "Electric bill payment",
  "Water bill payment",
  "Internet subscription to Comcast",
  "Restaurant dinner at Olive Garden",
  "Movie ticket at AMC Theatres",
  "Train ticket purchase",
  "Purchase of new phone at Apple Store",
  "Clothing shopping at H&M",
  "Insurance premium payment",
  "Home appliance purchase at Best Buy",
  "Taxi fare payment",
  "Music album purchase on iTunes",
  "Subscription to Adobe Creative Cloud",
  "Online course payment on Udemy",
  "Transfer to savings account",
  "ATM cash withdrawal",
  "Car lease payment",
  "Electronics purchase on eBay",
  "Donation to WWF",
  "Payment for car wash",
  "Medical bill payment",
  "Dentist appointment payment",
  "Monthly student loan payment",
  "Loan repayment to Ali",
  "Concert ticket purchase",
  "Video game purchase on Steam",
  "Payment for freelance work",
  "Purchase of furniture at IKEA",
  "Subscription to The New York Times",
  "Cloud storage payment for Google Drive",
  "Transfer to investment account",
  "Money sent to family abroad",
  "Charity donation to UNICEF",
  "Fast food order at McDonald's",
  "Streaming service payment for Disney+",
  "Annual Amazon Prime renewal",
  "Parking fee payment",
  "Payment for business lunch",
  "Credit card bill payment",
  "Haircut appointment payment",
  "Shopping for cosmetics at Sephora",
  "Rental car payment",
  "Booking at Airbnb",
  "Payment for personal trainer",
  "Monthly car insurance premium",
  "Software subscription for Microsoft 365",
  "House cleaning service payment",
  "Water park entry ticket purchase",
  "Payment for flower delivery",
  "Pet food purchase at PetSmart",
  "Subscription to Coursera",
  "Payment for online gaming subscription",
  "Payment for legal consultation",
  "Taxi fare to airport",
  "Furniture repair payment",
  "Dinner reservation deposit",
  "Food delivery order on Uber Eats",
  "Donation to cancer research",
  "Payment for child’s school fees",
  "Purchase of concert merchandise",
  "Subscription to PlayStation Plus",
  "Investment deposit to stock account",
  "Payment for language learning app",
  "Yearly domain name renewal",
  "Custom T-shirt order on Etsy",
  "Payment for yoga class package",
  "Gas bill payment",
  "Subscription to Headspace meditation app",
  "Shopping at farmer’s market",
  "Payment for photography session",
  "Bicycle rental payment",
  "Payment for repair service",
  "Subscription to HBO Max",
  "Gym personal training session",
  "Book purchase on Kindle Store",
  "Donation to homeless shelter",
  "Payment for a tailor-made suit",
  "Car maintenance at Toyota Service Center",
  "Payment for local museum entry",
  "Streaming rental of a movie on Amazon Prime Video",
  "Payment for driving license renewal",
  "Monthly health insurance payment",
  "Online groceries order at Instacart",
  "Payment for digital marketing course",
  "Subscription to The Economist magazine",
  "Airport lounge access fee",
];

const signNumArray: number[] = [-1, 1];

function getRandomDate(): string {
  const year = 2020 + Math.floor(Math.random() * 5);
  const month = Math.floor(Math.random() * 12);
  const day = Math.floor(Math.random() * 28) + 1;

  return new Date(year, month, day).toDateString();
}

export const full_transactions = Array.from(
  {
    length: Math.floor(Math.random() * 20) + 60,
  },
  (_) => {
    return {
      description:
        transactionDescriptions[
          Math.floor(Math.random() * transactionDescriptions.length)
        ],
      id: `#${Array.from({ length: 8 }, (_) =>
        Math.floor(Math.random() * 10)
      ).join("")}`,
      type: ["Shopping", "Transfer", "Service"][Math.floor(Math.random() * 3)],
      card: `${Array.from({ length: 4 }, (_) =>
        Math.floor(Math.random() * 5)
      ).join("")} ****`,
      date: getRandomDate(),
      amount:
        signNumArray[Math.round(Math.random())] *
        Math.floor(Math.random() * 10000),
    };
  }
);

export const box_info: BoxInfo[] = [
  {
    icon: faSackDollar,
    primaryColor: "#FFBB38",
    secondaryColor: "#FFF5D9",
    title: "My Balance",
    content: "$12,750",
  },
  {
    icon: faPiggyBank,
    primaryColor: "#16DBCC",
    secondaryColor: "#DCFAF8",
    title: "Total Saving",
    content: "$7,920",
  },
  {
    icon: faHandHoldingDollar,
    primaryColor: "#396AFF",
    secondaryColor: "#E7EDFF",
    title: "My Income",
    content: "$5,600",
  },
  {
    icon: faFileInvoiceDollar,
    primaryColor: "#FF82AC",
    secondaryColor: "#FFE0EB",
    title: "My Expenses",
    content: "$3,460",
  },
];

export const bank_service: BoxInfo[] = [
  {
    icon: faHandshake,
    primaryColor: "#D63384",
    secondaryColor: "#FCE4EC",
    title: "Business Loans",
    content: "Flexible financing",
    column1: "Low-interest rates",
    column2: "Fast approval process",
    column3: "Multiple loan options",
  },
  {
    icon: faWallet,
    primaryColor: "#F4A261",
    secondaryColor: "#FFF3E0",
    title: "Checking Accounts",
    content: "Manage transactions",
    column1: "No hidden fees",
    column2: "Instant mobile banking",
    column3: "Free debit card",
  },
  {
    icon: faPiggyBank,
    primaryColor: "#E63946",
    secondaryColor: "#FAD2E1",
    title: "Savings Accounts",
    content: "Secure your future",
    column1: "High interest rates",
    column2: "Easy withdrawals",
    column3: "No minimum balance",
  },
  {
    icon: faCreditCard,
    primaryColor: "#457B9D",
    secondaryColor: "#E3F2FD",
    title: "Debit and Credit Cards",
    content: "Secure payments with exclusive benefits",
    column1: "Cashback rewards",
    column2: "Contactless payments",
    column3: "Fraud protection",
  },
  {
    icon: faUserShield,
    primaryColor: "#2A9D8F",
    secondaryColor: "#E0F2F1",
    title: "Life Insurance",
    content: "Financial security for your loved ones.",
    column1: "Customizable plans",
    column2: "Tax-free payouts",
    column3: "24/7 customer support",
  },
  {
    icon: faChartLine,
    primaryColor: "#8E44AD",
    secondaryColor: "#F3E5F5",
    title: "Wealth Management",
    content: "Personalized investment and financial planning.",
    column1: "Expert financial advisors",
    column2: "Portfolio diversification",
    column3: "Retirement planning",
  },
  {
    icon: faGlobe,
    primaryColor: "#1D3557",
    secondaryColor: "#D6EAF8",
    title: "Trade Finance",
    content: "Grow your business with international trade support.",
    column1: "Letters of credit",
    column2: "Export/import funding",
    column3: "Risk mitigation",
  },
  {
    icon: faMobileAlt,
    primaryColor: "#F77F00",
    secondaryColor: "#FFF4D6",
    title: "Digital Wallets & Payments",
    content: "Fast, secure, and convenient digital transactions.",
    column1: "Instant money transfers",
    column2: "QR code payments",
    column3: "Integration with e-commerce",
  },
  {
    icon: faExchangeAlt,
    primaryColor: "#28A745",
    secondaryColor: "#D4EDDA",
    title: "Forex Services",
    content: "Currency exchange and international remittance services.",
    column1: "Competitive exchange rates",
    column2: "Same-day transfers",
    column3: "No hidden fees",
  },
];

export const loans_info: BoxInfo[] = [
  {
    icon: faUser,
    primaryColor: "#396AFF",
    secondaryColor: "#E7EDFF",
    title: "Personal Loans",
    content: "$50,000",
  },
  {
    icon: faBriefcase,
    primaryColor: "#FFBB38",
    secondaryColor: "#FFF5D9",
    title: "Corporate Loans",
    content: "$100,000",
  },
  {
    icon: faChartSimple,
    primaryColor: "#FF82AC",
    secondaryColor: "#FFE0EB",
    title: "Business Loans",
    content: "$500,000",
  },
  {
    icon: faScrewdriverWrench,
    primaryColor: "#16DBCC",
    secondaryColor: "#DCFAF8",
    title: "Custom Loans",
    content: "$3,460",
  },
];

export const upcoming_bills: BoxInfo[] = [
  {
    icon: faHeadphonesSimple,
    primaryColor: "#2FDFD1",
    secondaryColor: "#DCFAF8",
    title: "Spotify Subscription",
    content: "$150",
    date: new Date("2024-01-25"),
    type: "Shopping",
    card: "4975 ****",
    status: "pending",
  },
  {
    icon: faScrewdriverWrench,
    primaryColor: "#4372FF",
    secondaryColor: "#E7EDFF",
    title: "Mobile Service",
    content: "$340",
    date: new Date("2024-12-08"),
    type: "Service",
    card: "5172 ****",
    status: "pending",
  },
  {
    icon: faUser,
    primaryColor: "#FF82AC",
    secondaryColor: "#FFE0EB",
    title: "Emily Wilson",
    content: "$780",
    date: new Date("2024-07-23"),
    type: "Transfer",
    card: "4975 ****",
    status: "compeleted",
  },
];

export const invoices: BoxInfo[] = [
  {
    icon: faApplePay,
    primaryColor: "#23DDCF",
    secondaryColor: "#DCFAF8",
    title: "Apple Pay",
    content: "$450",
    date: new Date(new Date().getTime() - Math.random() * 100000000),
  },
  {
    icon: faUser,
    primaryColor: "#FFBB38",
    secondaryColor: "#FFF5D9",
    title: "Michael",
    content: "$160",
    date: new Date(new Date().getTime() - Math.random() * 100000000),
  },
  {
    icon: faPlaystation,
    primaryColor: "#396AFF",
    secondaryColor: "#E7EDFF",
    title: "Playstation",
    content: "$1085",
    date: new Date(new Date().getTime() - Math.random() * 100000000),
  },
  {
    icon: faFilm,
    primaryColor: "#FF82AC",
    secondaryColor: "#FFE0EB",
    title: "Netflix",
    content: "$90",
    date: new Date(new Date().getTime() - Math.random() * 100000000),
  },
];

export const settings_options: OneSettingType[] = [
  {
    icon: faLock,
    name: "Block Card",
    desc: "Instantly Block your card",
    color: "#4372FF",
    bgColor: "#E7EDFF",
  },
  {
    icon: faKey,
    name: "Change Pin Code",
    desc: "Choose Another Pin Code For Your Card",
    color: "#FFBB38",
    bgColor: "#FFF5D9",
  },
  {
    icon: faLockOpen,
    name: "Unblock Card",
    desc: "Unblock All Your Cards",
    color: "#4372FF",
    bgColor: "#E7EDFF",
  },
  {
    icon: faGooglePay,
    name: "Add To Google Play",
    desc: "Pay With Your Card On Any Android Phone",
    color: "#16DBCC",
    bgColor: "#DCFAF8",
  },
  {
    icon: faApplePay,
    name: "Add To Apple Pay",
    desc: "Pay With Your Card On Any iPhone",
    color: "#FF82AC",
    bgColor: "#FFE0EB",
  },
];

export const loans_data: LoanDataType[] = [
  {
    id: 1,
    loanMoney: 100000,
    leftMoney: 40500,
    duration: 8,
    interest: 12,
    installement: 2000,
  },
  {
    id: 2,
    loanMoney: 500000,
    leftMoney: 250000,
    duration: 36,
    interest: 10,
    installement: 8000,
  },
  {
    id: 3,
    loanMoney: 900000,
    leftMoney: 40500,
    duration: 12,
    interest: 12,
    installement: 5000,
  },
  {
    id: 4,
    loanMoney: 50000,
    leftMoney: 40500,
    duration: 25,
    interest: 5,
    installement: 2000,
  },
  {
    id: 5,
    loanMoney: 50000,
    leftMoney: 40500,
    duration: 5,
    interest: 16,
    installement: 10000,
  },
  {
    id: 6,
    loanMoney: 80000,
    leftMoney: 25500,
    duration: 14,
    interest: 8,
    installement: 2000,
  },
  {
    id: 7,
    loanMoney: 12000,
    leftMoney: 5500,
    duration: 9,
    interest: 13,
    installement: 500,
  },
  {
    id: 8,
    loanMoney: 160000,
    leftMoney: 100800,
    duration: 3,
    interest: 12,
    installement: 900,
  },
];

export const country_list: string[] = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

export const currencies: string[] = ["USD", "EUR", "JPY", "MAD", "GBP"];

export const timeZones = [
  { offset: "-12:00", city: "Baker Island" }, // UTC-12
  { offset: "-11:00", city: "Pago Pago" }, // UTC-11
  { offset: "-10:00", city: "Honolulu" }, // UTC-10
  { offset: "-09:00", city: "Anchorage" }, // UTC-9
  { offset: "-08:00", city: "Los Angeles" }, // UTC-8
  { offset: "-07:00", city: "Denver" }, // UTC-7
  { offset: "-06:00", city: "Chicago" }, // UTC-6
  { offset: "-05:00", city: "New York" }, // UTC-5
  { offset: "-04:00", city: "Santiago" }, // UTC-4
  { offset: "-03:00", city: "Buenos Aires" }, // UTC-3
  { offset: "-02:00", city: "South Georgia" }, // UTC-2
  { offset: "-01:00", city: "Azores" }, // UTC-1
  { offset: "±00:00", city: "London" }, // UTC±0
  { offset: "+01:00", city: "Berlin" }, // UTC+1
  { offset: "+02:00", city: "Cairo" }, // UTC+2
  { offset: "+03:00", city: "Moscow" }, // UTC+3
  { offset: "+04:00", city: "Dubai" }, // UTC+4
  { offset: "+05:00", city: "Karachi" }, // UTC+5
  { offset: "+06:00", city: "Dhaka" }, // UTC+6
  { offset: "+07:00", city: "Bangkok" }, // UTC+7
  { offset: "+08:00", city: "Beijing" }, // UTC+8
  { offset: "+09:00", city: "Tokyo" }, // UTC+9
  { offset: "+10:00", city: "Sydney" }, // UTC+10
  { offset: "+11:00", city: "Nouméa" }, // UTC+11
  { offset: "+12:00", city: "Auckland" }, // UTC+12
];
