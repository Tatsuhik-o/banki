import TitleCard from "../../components/TitleCard";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  quick_transfer: { padding: "0.5rem" },
});

export default function QuickTransfer() {
  const classes = useStyles();
  return (
    <div className={classes.quick_transfer}>
      <TitleCard titleMessage="Quick Transfer" />
    </div>
  );
}
