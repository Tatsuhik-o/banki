import { makeStyles } from "@mui/styles";
import { upcoming_bills } from "../../../utils/constants";
import Bill from "../../../components/Bill";
import { mobileContext } from "../../../utils/context";
import { useContext } from "react";

const useStyles = makeStyles({
  upcoming_bills: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "1rem 0.5rem" : "1rem 1rem",
    borderRadius: "18px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
});

export default function Upcoming() {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  return (
    <div className={classes.upcoming_bills}>
      {upcoming_bills.map((bill, idx) => {
        return <Bill boxInfo={bill} key={idx} />;
      })}
    </div>
  );
}
