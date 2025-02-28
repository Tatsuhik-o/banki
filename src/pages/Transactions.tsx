import { makeStyles } from "@mui/styles";
import { mobileContext } from "../utils/context";
import { useContext } from "react";
import MyCards from "../layouts/dashboard/MyCards";
import BarExpense from "../layouts/transactions/BarExpense";

const useStyles = makeStyles({
  transactions: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: (props: { mobileView: boolean }) =>
      !props.mobileView ? "10px" : "15px",
    "& > *": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      gap: "15px",
    },
  },
  card_expen: {
    width: "100%",
    overflow: "hidden",
    display: "flex",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "0rem" : "0rem 0.5rem",
    flexDirection: (props: { mobileView: boolean }) =>
      !props.mobileView ? "row" : "column",
  },
  card_wrapper: (props: { mobileView: boolean }) => ({
    height: "250px",
    width: props.mobileView ? "100%" : "calc(66%)",
  }),
  tran_wrapper: (props: { mobileView: boolean }) => ({
    height: "250px",
    width: props.mobileView ? "100%" : "calc(33%)",
  }),
});

export default function Transactions() {
  const { mobileView } = useContext(mobileContext) || {};

  const classes = useStyles({ mobileView: mobileView || false });
  return (
    <div className={classes.transactions}>
      <div className={classes.card_expen}>
        <div className={classes.card_wrapper}>
          <MyCards />
        </div>
        <div className={classes.tran_wrapper}>
          <BarExpense />
        </div>
      </div>
    </div>
  );
}
