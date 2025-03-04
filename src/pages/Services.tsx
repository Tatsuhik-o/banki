import { makeStyles } from "@mui/styles";
import { mobileContext } from "../utils/context";
import { useContext } from "react";
import QuickStats from "../layouts/services/quick_stats/QuickStats";
import TitleCard from "../components/TitleCard";
import BankService from "../layouts/services/bank_service/BankService";

const useStyles = makeStyles({
  services: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "1rem 0rem" : "3rem 1rem 1rem 1rem",
    gap: (props: { mobileView: boolean }) =>
      !props.mobileView ? "10px" : "15px",
  },
  other_services: {
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "1rem 0.5rem" : "1rem 0rem",
  },
});

export default function Services() {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  return (
    <div className={classes.services}>
      <div>
        <QuickStats />
      </div>
      <div className={classes.other_services}>
        <TitleCard titleMessage="Bank Services List" />
        <BankService />
      </div>
    </div>
  );
}
