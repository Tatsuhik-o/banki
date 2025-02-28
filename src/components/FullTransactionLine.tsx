import { makeStyles } from "@mui/styles";
import { mobileContext } from "../utils/context";
import { useContext } from "react";

const useStyles = makeStyles({
  full_transaction_line: {},
});

export default function FullTransactionLine() {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  return (
    <div className={classes.full_transaction_line}>FullTransactionLine</div>
  );
}
