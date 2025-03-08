import MyCards from "../layouts/dashboard/MyCards";
import RecentTransactions from "../layouts/dashboard/RecentTransactions";
import BalanceHistory from "../layouts/dashboard/BalanceHistory";
import ExpenseStatistics from "../layouts/dashboard/ExpenseStatistics";
import QuickTransfer from "../layouts/dashboard/QuickTransfer";
import WeeklyActivity from "../layouts/dashboard/WeeklyActivity";
import { mobileContext } from "../utils/context";
import { useContext, useEffect, useRef, useState } from "react";
import { makeStyles } from "@mui/styles";
import { CreditCardType } from "../utils/types";
import Loading from "../components/Loading";

const useStyles = makeStyles({
  dashboard: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: (props: {
      mobileView: boolean;
      dashboardHeight: number;
      isLoading: boolean;
    }) => (!props.mobileView ? "10px" : "15px"),
    height: (props: { isLoading: boolean }) => (props.isLoading ? "100%" : ""),
    justifyContent: (props: { isLoading: boolean }) =>
      props.isLoading ? "center" : "",
  },
  card_tran: {
    width: "100%",
    overflow: "hidden",
    display: "flex",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "0rem" : "0rem 0.5rem",
    flexDirection: (props: { mobileView: boolean; dashboardHeight: number }) =>
      !props.mobileView ? "row" : "column",
  },
  card_wrapper: (props: { mobileView: boolean; dashboardHeight: number }) => ({
    height: "250px",
    width: props.mobileView ? "100%" : "calc(66%)",
  }),
  tran_wrapper: (props: { mobileView: boolean; dashboardHeight: number }) => ({
    height: "250px",
    width: props.mobileView ? "100%" : "calc(33%)",
  }),
  acti_expen: {
    width: "100%",
    display: "flex",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "0rem" : "0rem 0.5rem",
    flexDirection: (props: { mobileView: boolean; dashboardHeight: number }) =>
      !props.mobileView ? "row" : "column",
  },
  acti_wrapper: (props: { mobileView: boolean; dashboardHeight: number }) => ({
    height: "400px",
    width: props.mobileView ? "100%" : "calc(66%)",
  }),
  expen_wrapper: (props: { mobileView: boolean; dashboardHeight: number }) => ({
    height: "400px",
    width: props.mobileView ? "100%" : "calc(33%)",
  }),
  quick_hist: {
    width: "100%",
    display: "flex",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "0rem" : "0rem 0.5rem",
    flexDirection: (props: { mobileView: boolean; dashboardHeight: number }) =>
      !props.mobileView ? "row" : "column",
  },
  quick_wrapper: (props: { mobileView: boolean; dashboardHeight: number }) => ({
    height: "350px",
    width: props.mobileView ? "100%" : "calc(33%)",
  }),
  hist_wrapper: (props: { mobileView: boolean; dashboardHeight: number }) => ({
    height: "350px",
    width: props.mobileView ? "100%" : "calc(66%)",
  }),
});

export default function Dashboard() {
  const { mobileView } = useContext(mobileContext) || {};
  const dashBoardRef = useRef<HTMLDivElement | null>(null);
  const [dashboardHeight, setDashboardHeight] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeCard, setActiveCard] = useState<CreditCardType[] | undefined>(
    undefined
  );

  useEffect(() => {
    if (!dashBoardRef.current) return;
    setDashboardHeight(dashBoardRef.current.clientHeight);
    fetch("http://localhost:3000/api/fetch_cards")
      .then((response) => response.json())
      .then((data) => {
        setActiveCard(data);
        setIsLoading(false);
      });
  }, []);

  const classes = useStyles({
    mobileView: mobileView ?? false,
    dashboardHeight,
    isLoading,
  });

  return (
    <div className={classes.dashboard} ref={dashBoardRef}>
      {isLoading && <Loading />}
      {!isLoading && (
        <>
          <div className={classes.card_tran}>
            <div className={classes.card_wrapper}>
              <MyCards activeData={activeCard} titleMessage="My Cards" />
            </div>
            <div className={classes.tran_wrapper}>
              <RecentTransactions />
            </div>
          </div>
          <div className={classes.acti_expen}>
            <div className={classes.acti_wrapper}>
              <WeeklyActivity />
            </div>
            <div className={classes.expen_wrapper}>
              <ExpenseStatistics />
            </div>
          </div>
          <div className={classes.quick_hist}>
            <div className={classes.quick_wrapper}>
              <QuickTransfer />
            </div>
            <div className={classes.hist_wrapper}>
              <BalanceHistory />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
