import { mobileContext } from "../../../utils/context";
import { useContext } from "react";
import { makeStyles } from "@mui/styles";
import Box from "../../../components/Box";
import { loans_info } from "../../../utils/constants";

const useStyles = makeStyles({
  main_cards: {
    width: "100%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "space-between",
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
    <div className={classes.main_cards}>
      {mobileView &&
        loans_info.slice(0, 2).map((loan, idx) => {
          return <Box key={idx} boxInfo={loan} />;
        })}
      {!mobileView &&
        loans_info.map((loan, idx) => {
          return <Box key={idx} boxInfo={loan} />;
        })}
    </div>
  );
}
