import TitleCard from "../../components/TitleCard";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  balance_history: { padding: "0.5rem" },
});

export default function BalanceHistory() {
  const classes = useStyles();
  return (
    <div className={classes.balance_history}>
      <TitleCard titleMessage="Balance History" />
    </div>
  );
}
