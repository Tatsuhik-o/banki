import { makeStyles } from "@mui/styles";
import { mobileContext } from "../../../utils/context";
import { useContext } from "react";
import Box from "../../../components/Box";
import { bank_service } from "../../../utils/constants";

const useStyles = makeStyles({
  quick_stats: {
    width: "100%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "space-around",
    gap: "1.5rem",
    flexDirection: (props: { mobileView: boolean }) =>
      !props.mobileView ? "row" : "column",
    alignItems: "center",
  },
});

export default function QuickStats() {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  return (
    <div className={classes.quick_stats}>
      {bank_service.slice(0, 3).map((bankService, idx) => {
        return <Box key={idx} boxInfo={bankService} />;
      })}
    </div>
  );
}
