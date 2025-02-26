import MyCards from "../layouts/dashboard/MyCards";
import RecentTransactions from "../layouts/dashboard/RecentTransactions";
import BalanceHistory from "../layouts/dashboard/BalanceHistory";
import ExpenseStatistics from "../layouts/dashboard/ExpenseStatistics";
import QuickTransfer from "../layouts/dashboard/QuickTransfer";
import WeeklyActivity from "../layouts/dashboard/WeeklyActivity";
import { mobileContext } from "../utils/context";
import { useContext, useEffect, useRef, useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  dashboard: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: (props: { mobileView: boolean; dashboardHeight: number }) =>
      !props.mobileView ? "10px" : "15px",
    "& > *": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      gap: "15px",
    },
  },
  card_tran: {
    width: "100%",
    overflow: "hidden",
    display: "flex",
    padding: "0rem 0.5rem",
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
    padding: "0rem 0.5rem",
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
    padding: "0rem 0.5rem",
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

  useEffect(() => {
    if (!dashBoardRef.current) return;
    setDashboardHeight(dashBoardRef.current.clientHeight);
  }, []);

  const classes = useStyles({
    mobileView: mobileView ?? false,
    dashboardHeight,
  });

  return (
    <div className={classes.dashboard} ref={dashBoardRef}>
      <div className={classes.card_tran}>
        <div className={classes.card_wrapper}>
          <MyCards />
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
    </div>
  );
}
