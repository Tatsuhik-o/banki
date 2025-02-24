export type TSideBar = {
  mobileView: boolean;
  setMobileView: React.Dispatch<React.SetStateAction<boolean>>;
};
export type TTitle = {
  titleMessage: string;
};
export type CreditCard = {
  balance: number;
  card_holder: string;
  expiray_date: number;
  card_number: number;
};
