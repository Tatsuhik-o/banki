import { makeStyles } from "@mui/styles";
import { mobileContext } from "../utils/context";
import { useContext, useState, useEffect } from "react";
import MyCards from "../layouts/dashboard/MyCards";
import CreditCard from "../components/CreditCard";
import TitleCard from "../components/TitleCard";
import ExpenseStats from "../layouts/credit_cards/expense_stats/ExpenseStats";
import CardList from "../layouts/credit_cards/card_list/CardList";
import AddCard from "../layouts/credit_cards/add_card/AddCard";
import CardSettings from "../layouts/credit_cards/card_settings/CardSettings";
import Loading from "../components/Loading";
import { CreditCardType } from "../utils/types";

const useStyles = makeStyles({
  cards: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: (props: { mobileView: boolean }) =>
      !props.mobileView ? "10px" : "15px",
    height: (props: { mobileView: boolean; isLoading: boolean }) =>
      props.isLoading ? "100%" : "",
    justifyContent: (props: { isLoading: boolean }) =>
      props.isLoading ? "center" : "",
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
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    "& > *": {
      height: "100%",
    },
  },
});

export default function Cards() {
  const { mobileView } = useContext(mobileContext) || {};
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const classes = useStyles({ mobileView: mobileView || false, isLoading });
  const [activeCard, setActiveCard] = useState<CreditCardType[] | undefined>(
    undefined
  );

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const response = await fetch("http://localhost:3000/api/fetch_cards", {
          signal: controller.signal,
        });
        const data = await response.json();
        setActiveCard(data);
        setIsLoading(false);
      } catch (e) {
        console.log("err: ", e);
      }
    })();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className={classes.cards}>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <div className={classes.cards_wrapper}>
            <div className={classes.first_row_wrapper}>
              <MyCards activeData={activeCard} titleMessage="Primary Cards" />
            </div>
            <div className={classes.second_row_wrapper}>
              <div className={classes.my_cards}>
                <TitleCard titleMessage="Secondary Card" />
                <div className={classes.credit_card}>
                  {activeCard && <CreditCard cardDetails={activeCard[2]} />}
                </div>
              </div>
            </div>
          </div>
          <div className={classes.expen_list}>
            <div className={classes.expen_wrapper}>
              <TitleCard titleMessage="Bank Distribution" />
              <ExpenseStats activeData={activeCard} isLoading={isLoading} />
            </div>
            <div className={classes.list_wrapper}>
              <TitleCard titleMessage="Card Details" />
              <CardList activeCard={activeCard as CreditCardType[]} />
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
        </>
      )}
    </div>
  );
}
