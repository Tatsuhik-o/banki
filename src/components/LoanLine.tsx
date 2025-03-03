import { makeStyles } from "@mui/styles";
import { mobileContext } from "../utils/context";
import { useContext } from "react";
import { LoanDataType } from "../utils/types";
import { formatBalance } from "../utils/constants";

const useStyles = makeStyles({
  loan_line: {
    width: "100%",
    flex: "1",
    display: "flex",
    gap: "5px",
    padding: "0.5rem",
    "& > *": {
      padding: "0.5rem",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      fontFamily: "Source Code Pro",
      fontSize: "0.9rem",
    },
  },
  sl_no: {
    flex: "1",
  },
  left_money: {
    flex: "2",
  },
  left_repay: {
    flex: "2",
  },
  duration: {
    flex: "1.5",
  },
  interest: {
    flex: "2",
  },
  installement: {
    flex: "2",
  },
  repay: {
    flex: "2",
  },
  special: {
    backgroundColor: "transparent",
    border: "1px solid #2623F4",
    color: "#2623F4",
    borderRadius: "15px",
    cursor: "pointer",
  },
});

type TLoanLine = {
  loanInfo: LoanDataType;
};

export default function LoanLine({ loanInfo }: TLoanLine) {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  console.log(loanInfo);
  return (
    <div className={classes.loan_line}>
      {!mobileView && (
        <div
          className={classes.sl_no}
          style={{ color: loanInfo.id === -1 ? "red" : "" }}
        >
          {loanInfo.id === 0
            ? "SL No"
            : loanInfo.id === -1
            ? "Total"
            : loanInfo.id < 10
            ? "0" + loanInfo.id + "."
            : loanInfo.id + "."}
        </div>
      )}
      <div
        className={classes.left_money}
        style={{ color: loanInfo.id === -1 ? "red" : "" }}
      >
        {loanInfo.leftMoney === 0
          ? "Loan Money"
          : "$" + formatBalance(loanInfo.loanMoney)}
      </div>
      <div
        className={classes.left_repay}
        style={{ color: loanInfo.id === -1 ? "red" : "" }}
      >
        {loanInfo.leftMoney === 0
          ? "Left To Repay"
          : "$" + formatBalance(loanInfo.leftMoney)}
      </div>
      {!mobileView && (
        <>
          <div className={classes.duration}>
            {loanInfo.duration === 0
              ? "Duration"
              : loanInfo.duration < 0
              ? ""
              : loanInfo.duration + " Months"}
          </div>
          <div className={classes.interest}>
            {loanInfo.interest === 0
              ? "Interest Rate"
              : loanInfo.interest < 0
              ? ""
              : loanInfo.interest + "%"}
          </div>
          <div
            className={classes.installement}
            style={{ color: loanInfo.id === -1 ? "red" : "" }}
          >
            {loanInfo.installement === 0
              ? "Installement"
              : "$" + formatBalance(loanInfo.installement) + " / Months"}
          </div>
        </>
      )}
      {loanInfo.id !== 0 && (
        <button className={`${classes.repay} ${classes.special}`}>
          {loanInfo.id > 0 ? "Repay" : "Repay All"}
        </button>
      )}
      {loanInfo.id === 0 && <div className={classes.repay}></div>}
    </div>
  );
}
