import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  add_card: {
    width: "100%",
    padding: "0.5rem",
    flex: "1",
    border: "1px solid black",
  },
});

export default function AddCard() {
  const classes = useStyles();
  return <div className={classes.add_card}>AddCard</div>;
}
