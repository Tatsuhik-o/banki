import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  card_settings: {
    width: "100%",
    padding: "0.5rem",
    flex: "1",
    border: "1px solid black",
  },
});

export default function CardSettings() {
  const classes = useStyles();
  return <div className={classes.card_settings}>CardSettings</div>;
}
