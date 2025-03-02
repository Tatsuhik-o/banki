import { makeStyles } from "@mui/styles";
import { mobileContext } from "../utils/context";
import { useContext } from "react";
import MainCard from "../layouts/accounts/main_card/MainCard";
import TitleCard from "../components/TitleCard";
import CreditCard from "../components/CreditCard";
import Upcoming from "../layouts/accounts/upcoming_bills/Upcoming";
import { my_credit_cards } from "../utils/constants";

const useStyles = makeStyles({
  accounts: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: "3rem 1rem 1rem 1rem",
    gap: (props: { mobileView: boolean }) =>
      !props.mobileView ? "10px" : "15px",
  },
  upcom_card: {
    width: "100%",
    overflow: "hidden",
    display: "flex",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "0rem" : "0rem 0.5rem",
    flexDirection: (props: { mobileView: boolean }) =>
      !props.mobileView ? "row" : "column",
  },
  debcredove_invoi: {
    width: "100%",
    overflow: "hidden",
    display: "flex",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "0rem" : "0rem 0.5rem",
    flexDirection: (props: { mobileView: boolean }) =>
      !props.mobileView ? "row" : "column",
  },
  upcom_bills: {
    height: "100%",
    width: "100%",
    padding: "0.5rem",
    display: "flex",
    flex: "2",
    flexDirection: "column",
    gap: "10px",
  },
  main_card: {
    height: "100%",
    width: "100%",
    padding: "0.5rem",
    display: "flex",
    flex: "1",
    flexDirection: "column",
    gap: "10px",
  },
  credit_card: {
    width: "100%",
    display: "flex",
    gap: "10px",
    justifyContent: "space-between",
    overflow: "hidden",
  },
});

export default function Accounts() {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  return (
    <div className={classes.accounts}>
      <MainCard />
      <div className={classes.upcom_card}>
        <div className={classes.upcom_bills}>
          <TitleCard titleMessage="Upcoming Bills" />
          <Upcoming />
        </div>
        <div className={classes.main_card}>
          <TitleCard titleMessage="Main Card" />
          <div className={classes.credit_card}>
            <CreditCard cardDetails={my_credit_cards[0]} />
          </div>
        </div>
      </div>
      <div className={classes.debcredove_invoi}></div>
    </div>
  );
}
