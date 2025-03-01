import { makeStyles } from "@mui/styles";
import { mobileContext } from "../utils/context";
import { useContext } from "react";
import Box from "../components/Box";
import TitleCard from "../components/TitleCard";

const useStyles = makeStyles({
  accounts: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: (props: { mobileView: boolean }) =>
      !props.mobileView ? "10px" : "15px",

    "& > *": {
      display: "flex",
      flexDiretion: "column",
    },
  },
  boxes: {
    width: "100%",
    overflow: "hidden",
    display: "flex",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "0rem" : "0rem 0.5rem",
    flexDirection: (props: { mobileView: boolean }) =>
      !props.mobileView ? "row" : "column",
  },
  upcom_card: {
    width: "100%",
    overflow: "hidden",
    display: "flex",
    border: "1px solid black",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "0rem" : "0rem 0.5rem",
    flexDirection: (props: { mobileView: boolean }) =>
      !props.mobileView ? "row" : "column",
  },
  debcredove_invoi: {
    width: "100%",
    overflow: "hidden",
    display: "flex",
    border: "1px solid black",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "0rem" : "0rem 0.5rem",
    flexDirection: (props: { mobileView: boolean }) =>
      !props.mobileView ? "row" : "column",
  },
});

export default function Accounts() {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  return (
    <div className={classes.accounts}>
      <div className={classes.boxes}>
        <TitleCard titleMessage="test" />
        {Array.from({ length: 4 }).map((_, idx) => {
          return <Box key={idx} />;
        })}
      </div>
      <div className={classes.upcom_card}></div>
      <div className={classes.debcredove_invoi}></div>
    </div>
  );
}
