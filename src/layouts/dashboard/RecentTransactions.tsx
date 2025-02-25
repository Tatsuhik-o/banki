import TitleCard from "../../components/TitleCard";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  recent_transactions: {
    height: "100%",
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  the_transaction: {
    width: "100%",
    flex: "1",
    display: "flex",
    border: "1px solid black",
  },
});

export default function RecentTransactions() {
  const classes = useStyles();
  return (
    <div className={classes.recent_transactions}>
      <TitleCard titleMessage="Recent Transactions" />
      <div className={classes.the_transaction}></div>
    </div>
  );
}
