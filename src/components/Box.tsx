import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  box: {
    border: "1px solid black",
    flex: "1",
    minWidth: "50px",
    maxWidth: "100px",
  },
});

export default function Box() {
  const classes = useStyles();
  return <div className={classes.box}>Box</div>;
}
