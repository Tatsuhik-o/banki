import { makeStyles } from "@mui/styles";
import { mobileContext } from "../utils/context";
import { useContext } from "react";
import MyCards from "../layouts/dashboard/MyCards";
import CreditCard from "../components/CreditCard";
import { my_credit_cards } from "../utils/constants";
import TitleCard from "../components/TitleCard";
import ExpenseStats from "../layouts/credit_cards/expense_stats/ExpenseStats";
import CardList from "../layouts/credit_cards/card_list/CardList";
import AddCard from "../layouts/credit_cards/add_card/AddCard";
import CardSettings from "../layouts/credit_cards/card_settings/CardSettings";

const useStyles = makeStyles({
  cards: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: (props: { mobileView: boolean }) =>
      !props.mobileView ? "10px" : "15px",
  },
  cards_wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: (props: { mobileView: boolean }) =>
      props.mobileView ? "column" : "row",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "0rem" : "0rem 0.5rem",
    gap: "10px",
    height: (props: { mobileView: boolean }) =>
      props.mobileView ? "fit-content" : "250px",
    overflow: "hidden",
  },
  first_row_wrapper: {
    height: "250px",
    width: (props: { mobileView: boolean }) =>
      props.mobileView ? "100%" : "calc(66%)",
  },
  second_row_wrapper: {
    height: "250px",
    width: (props: { mobileView: boolean }) =>
      props.mobileView ? "100%" : "calc(33%)",
  },
  actual_cards: {
    width: "100%",
    flex: "1",
    display: "flex",
    flexDirection: (props: { mobileView: boolean }) =>
      !props.mobileView ? "row" : "column",
    gap: "10px",
  },
  expen_list: {
    width: "100%",
    display: "flex",
    flexDirection: (props: { mobileView: boolean }) =>
      props.mobileView ? "column" : "row",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "0rem" : "0rem 1rem",
    gap: "10px",
    height: (props: { mobileView: boolean }) =>
      props.mobileView ? "fit-content" : "250px",
    overflow: "hidden",
  },
  expen_wrapper: {
    height: "250px",
    width: (props: { mobileView: boolean }) =>
      props.mobileView ? "100%" : "calc(33%)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "0.5rem" : "0rem",
  },
  list_wrapper: {
    height: "250px",
    width: (props: { mobileView: boolean }) =>
      props.mobileView ? "100%" : "calc(66%)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "0.5rem" : "0rem",
  },
  new_settings: {
    width: "100%",
    display: "flex",
    flexDirection: (props: { mobileView: boolean }) =>
      props.mobileView ? "column" : "row",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "0rem" : "0rem 1rem",
    gap: "10px",
    height: (props: { mobileView: boolean }) =>
      props.mobileView ? "fit-content" : "250px",
  },
  new_card_wrapper: {
    height: (props: { mobileView: boolean }) =>
      props.mobileView ? "fit-content" : "400px",
    width: (props: { mobileView: boolean }) =>
      props.mobileView ? "100%" : "calc(66%)",
    display: "flex",
    flexDirection: "column",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "0.5rem" : "0rem",
    gap: "10px",
  },
  settings_wrapper: {
    height: (props: { mobileView: boolean }) =>
      props.mobileView ? "fit-content" : "400px",
    width: (props: { mobileView: boolean }) =>
      props.mobileView ? "100%" : "calc(33%)",
    display: "flex",
    flexDirection: "column",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "0.5rem" : "0rem",
    gap: "10px",
  },
  my_cards: {
    height: "100%",
    width: "100%",
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  credit_card: {
    width: "100%",
    flex: "1",
    display: "flex",
    gap: "10px",
    justifyContent: "space-between",
    overflow: "hidden",
  },
});

export default function Cards() {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  return (
    <div className={classes.cards}>
      <div className={classes.cards_wrapper}>
        <div className={classes.first_row_wrapper}>
          <MyCards titleMessage="Primary Cards" />
        </div>
        <div className={classes.second_row_wrapper}>
          <div className={classes.my_cards}>
            <TitleCard titleMessage="Secondary Card" />
            <div className={classes.credit_card}>
              <CreditCard cardDetails={my_credit_cards[2]} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.expen_list}>
        <div className={classes.expen_wrapper}>
          <TitleCard titleMessage="Bank Distribution" />
          <ExpenseStats />
        </div>
        <div className={classes.list_wrapper}>
          <TitleCard titleMessage="Card Details" />
          <CardList />
        </div>
      </div>
      <div className={classes.new_settings}>
        <div className={classes.new_card_wrapper}>
          <TitleCard titleMessage="Add New Card" />
          <AddCard />
        </div>
        <div className={classes.settings_wrapper}>
          <TitleCard titleMessage="Card Settings" />
          <CardSettings />
        </div>
      </div>
    </div>
  );
}
