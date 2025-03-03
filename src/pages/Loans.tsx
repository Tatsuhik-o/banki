import { makeStyles } from "@mui/styles";
import { mobileContext } from "../utils/context";
import { useContext } from "react";
import QuickStats from "../layouts/loans/quick_stats/QuickStats";
import TitleCard from "../components/TitleCard";
import { loans_data } from "../utils/constants";
import LoanLine from "../components/LoanLine";
import { LoanDataType } from "../utils/types";

const useStyles = makeStyles({
  loans: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "1rem 0.5rem" : "3rem 1rem 1rem 1rem",
    gap: (props: { mobileView: boolean }) =>
      !props.mobileView ? "10px" : "15px",
  },
  loans_overview: {
    width: "100%",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  loans_table: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    "& > *:not(:last-child)": {
      borderBottom: "1px solid #F9FAFB",
    },
  },
});

const empty: LoanDataType = {
  id: 0,
  loanMoney: 0,
  leftMoney: 0,
  interest: 0,
  installement: 0,
  duration: 0,
};
const total: LoanDataType = {
  id: -1,
  loanMoney: loans_data.reduce((acc, val) => (acc += val.loanMoney), 0),
  leftMoney: loans_data.reduce((acc, val) => (acc += val.leftMoney), 0),
  interest: -1,
  installement: loans_data.reduce((acc, val) => (acc += val.installement), 0),
  duration: -1,
};

export default function Loans() {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  return (
    <div className={classes.loans}>
      <QuickStats />
      <div className={classes.loans_overview}>
        <TitleCard titleMessage="Active Loans" />
        <div className={classes.loans_table}>
          <LoanLine loanInfo={empty} />
          {loans_data.map((loan, idx) => {
            return <LoanLine loanInfo={loan} key={idx} />;
          })}
          <LoanLine loanInfo={total} />
        </div>
      </div>
    </div>
  );
}
