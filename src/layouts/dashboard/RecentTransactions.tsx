import TitleCard from "../../components/TitleCard";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  recent_transactions: {
    padding: "0.5rem",
  },
});

export default function RecentTransactions() {
  const classes = useStyles();
  return (
    <div className={classes.recent_transactions}>
      <TitleCard titleMessage="Recent Transactions" />
    </div>
  );
}
