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
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: (props: { mobileView: boolean; dashboardHeight: number }) =>
      !props.mobileView ? "10px" : "0px",
    "& > *": {
      width: "100%",
      padding: "0.4rem",
      display: "flex",
      justifyContent: "space-between",
      gap: "15px",
    },
  },
  card_tran: {
    flex: "0.28",
    display: "flex",
    flexDirection: (props: { mobileView: boolean; dashboardHeight: number }) =>
      !props.mobileView ? "row" : "column",
  },
  card_wrapper: {
    flex: "2",
    border: "1px solid black",
    minHeight: (props: { mobileView: boolean; dashboardHeight: number }) =>
      props.mobileView ? `${props.dashboardHeight / 3 - 25}px` : "",
  },
  tran_wrapper: {
    flex: "1",
    border: "1px solid black",
    minHeight: (props: { mobileView: boolean; dashboardHeight: number }) =>
      props.mobileView ? `${props.dashboardHeight / 3 - 25}px` : "",
  },
  acti_expen: {
    flex: "0.42",
    flexDirection: (props: { mobileView: boolean; dashboardHeight: number }) =>
      !props.mobileView ? "row" : "column",
  },
  acti_wrapper: {
    flex: "2",
    border: "1px solid black",
    minHeight: (props: { mobileView: boolean; dashboardHeight: number }) =>
      props.mobileView ? `${props.dashboardHeight / 3 - 25}px` : "",
  },
  expen_wrapper: {
    flex: "1",
    border: "1px solid black",
    minHeight: (props: { mobileView: boolean; dashboardHeight: number }) =>
      props.mobileView ? `${props.dashboardHeight / 3 - 25}px` : "",
  },
  quick_hist: {
    flex: "0.28",
    flexDirection: (props: { mobileView: boolean; dashboardHeight: number }) =>
      !props.mobileView ? "row" : "column",
  },
  quick_wrapper: {
    flex: "1",
    border: "1px solid black",
    minHeight: (props: { mobileView: boolean; dashboardHeight: number }) =>
      props.mobileView ? `${props.dashboardHeight / 3 - 25}px` : "",
  },
  hist_wrapper: {
    flex: "2",
    border: "1px solid black",
    minHeight: (props: { mobileView: boolean; dashboardHeight: number }) =>
      props.mobileView ? `${props.dashboardHeight / 3 - 25}px` : "",
  },
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
