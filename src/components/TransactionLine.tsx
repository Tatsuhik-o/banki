import { TransactionType } from "../utils/types";
import { makeStyles } from "@mui/styles";
import { mobileContext } from "../utils/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDotCircle } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
type TTransactionLine = {
  transactionInfo: TransactionType;
};

const useStyles = makeStyles({
  transaction_line: {
    width: "100%",
    height: "33%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0rem 1rem",
    gap: "10px",
    overflow: "hidden",
    "& > *": {
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
    },
  },
  transaction_icon: (props: { iconColor: string; amount: string }) => ({
    height: "90%",
    backgroundColor: props.iconColor,
    aspectRatio: "1",
    borderRadius: "50px",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }),
  transaction_details: {
    height: "90%",
    width: "60%",
    display: "flex",
    flexDirection: "column",
    textTransform: "capitalize",
    justifyContent: "center",
  },
  transaction_type: {
    fontFamily: "Poppins",
    fontSize: "0.85rem",
    width: "100%",
    textOverflow: "ellipsis",
    textWrap: "nowrap",
  },
  transaction_date: {
    color: "#718EBF",
    fontSize: "0.85rem",
    width: "100%",
    textOverflow: "ellipsis",
    textWrap: "nowrap",
  },
  transaction_amount: {
    width: "65px",
    height: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: (props: {
      iconColor: string;
      amount: string;
      mobileView: boolean;
    }) => (props.amount[0] === "-" ? "#FF4B4A" : "#41D4A8"),
    fontSize: "1rem",
    fontFamily: "Source Code Pro",
  },
});

export default function TransactionLine({ transactionInfo }: TTransactionLine) {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({
    iconColor: transactionInfo.colorTheme || "transparent",
    amount: transactionInfo.amount,
    mobileView: mobileView || false,
  });
  return (
    <div className={classes.transaction_line}>
      {!mobileView && (
        <div className={classes.transaction_icon}>
          <FontAwesomeIcon
            icon={transactionInfo.icon || faDotCircle}
            fontSize={22}
            color={transactionInfo.iconColor}
          />
        </div>
      )}
      <div className={classes.transaction_details}>
        <p className={classes.transaction_type}>
          {transactionInfo.service ||
            `${
              transactionInfo.amount[0] === "+" ? "Deposit From" : "Widthraw To"
            } ${transactionInfo.provider}`}
        </p>
        <p className={classes.transaction_date}>
          {transactionInfo.date.toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
      <div className={classes.transaction_amount}>{transactionInfo.amount}</div>
    </div>
  );
}
