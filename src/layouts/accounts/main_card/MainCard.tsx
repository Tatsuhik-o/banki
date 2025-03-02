import { makeStyles } from "@mui/styles";
import { mobileContext } from "../../../utils/context";
import { useContext } from "react";
import Box from "../../../components/Box";
import { box_info } from "../../../utils/constants";

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

export default function MainCard() {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  return (
    <div className={classes.main_cards}>
      {mobileView &&
        box_info.slice(0, 2).map((box, idx) => {
          return <Box key={idx} boxInfo={box} />;
        })}
      {!mobileView &&
        box_info.map((box, idx) => {
          return <Box key={idx} boxInfo={box} />;
        })}
    </div>
  );
}
