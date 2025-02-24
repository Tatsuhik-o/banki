import TitleCard from "../../components/TitleCard";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  weekly_activity: { padding: "0.5rem" },
});

export default function WeeklyActivity() {
  const classes = useStyles();
  return (
    <div className={classes.weekly_activity}>
      <TitleCard titleMessage="Weekly Activity" />
    </div>
  );
}
