import TitleCard from "../../components/TitleCard";
import { makeStyles } from "@mui/styles";
import { recent_transactions } from "../../utils/constants";
import TransactionLine from "../../components/TransactionLine";

const useStyles = makeStyles({
  recent_transactions: {
    height: "100%",
    width: "100%",
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  the_transaction: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    justifyContent: "space-around",
    padding: "1rem",
    backgroundColor: "#FFFFFF",
    borderRadius: "25px",
    overflow: "hidden",
  },
});

export default function RecentTransactions() {
  const classes = useStyles();
  return (
    <div className={classes.recent_transactions}>
      <TitleCard titleMessage="Recent Transactions" />
      <div className={classes.the_transaction}>
        {recent_transactions.map((transaction, idx) => {
          return <TransactionLine transactionInfo={transaction} key={idx} />;
        })}
      </div>
    </div>
  );
}
