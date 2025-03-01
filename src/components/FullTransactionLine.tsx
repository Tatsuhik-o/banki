import { makeStyles } from "@mui/styles";
import { mobileContext } from "../utils/context";
import { useContext } from "react";
import { TransactionType } from "../utils/types";

const useStyles = makeStyles({
  full_transaction_line: {
    display: "flex",
    padding: "0.8rem 0.4rem",
    color: "#313131",
    fontFamily: "Source Code Pro",
    fontSize: "0.8rem",
    "& > *": {
      flex: "1",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
      padding: "0rem 1rem",
      textTransform: "capitalize",
    },
  },
});

type TFullTrnsactionLine = {
  transactionInfo: TransactionType;
};

export default function FullTransactionLine({
  transactionInfo,
}: TFullTrnsactionLine) {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  return (
    <div className={classes.full_transaction_line}>
      <div>{transactionInfo.service}</div>
      <div>{transactionInfo.id}</div>
      <div>{transactionInfo.type}</div>
      <div>{transactionInfo.card}</div>
      <div>{transactionInfo.date.toDateString()}</div>
      <div
        style={{
          color: transactionInfo.amount[0] === "+" ? "#50E4BF" : "#FE5C73",
        }}
      >
        {transactionInfo.amount}
      </div>
    </div>
  );
}
