import TitleCard from "../../components/TitleCard";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  expense_statistics: { padding: "0.5rem" },
});

export default function ExpenseStatistics() {
  const classes = useStyles();
  return (
    <div className={classes.expense_statistics}>
      <TitleCard titleMessage="Expense Statistics" />
    </div>
  );
}
