import { makeStyles } from "@mui/styles";
import { upcoming_bills } from "../../../utils/constants";
import Bill from "../../../components/Bill";

const useStyles = makeStyles({
  upcoming_bills: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    padding: "1rem",
    borderRadius: "18px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
});

export default function Upcoming() {
  const classes = useStyles();
  return (
    <div className={classes.upcoming_bills}>
      {upcoming_bills.map((bill, idx) => {
        return <Bill boxInfo={bill} key={idx} />;
      })}
    </div>
  );
}
