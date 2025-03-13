import { makeStyles } from "@mui/styles";
import { mobileContext } from "../utils/context";
import { useContext } from "react";

const useStyles = makeStyles({
  not_found: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image_wrapper: {
    maxWidth: (props: { mobileView: boolean }) =>
      props.mobileView ? "75%" : "45%",
    aspectRatio: "1",
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
});

export default function Unfound() {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  return (
    <div className={classes.not_found}>
      <div className={classes.image_wrapper}>
        <img src="/404.webp" alt="" />
      </div>
    </div>
  );
}
