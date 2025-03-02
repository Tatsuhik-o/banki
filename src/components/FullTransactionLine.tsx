import { makeStyles } from "@mui/styles";
import { mobileContext } from "../utils/context";
import { useContext, useEffect, useRef, useState } from "react";
import { TransactionType } from "../utils/types";

const useStyles = makeStyles({
  full_transaction_line: {
    display: "flex",
    padding: "0.8rem 0.4rem",
    color: "#313131",
    fontFamily: "Source Code Pro",
    fontSize: "0.8rem",
    position: "relative",
    "& > *": {
      flex: "1",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
      padding: "0rem 1rem",
      textTransform: "capitalize",
    },
  },
  is_show: {
    position: "absolute",
    top: "-12px",
    left: "22px",
    zIndex: "10",
    padding: "4px 8px",
    backgroundColor: "#FFFBCC",
    border: "1px solid #C8B200",
    borderRadius: "4px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    fontSize: "10px",
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
  const serviceRef = useRef<HTMLDivElement>(null);
  const [isTrimmed, setIsTrimmed] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);

  useEffect(() => {
    if (serviceRef.current) {
      setIsTrimmed(
        serviceRef.current.scrollWidth > serviceRef.current.clientWidth
      );
    }
  }, []);

  return (
    <div className={classes.full_transaction_line}>
      {isTrimmed && isShow && (
        <div className={classes.is_show}>{transactionInfo.service}</div>
      )}
      <div
        ref={serviceRef}
        onMouseEnter={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
      >
        {transactionInfo.service}
      </div>
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
