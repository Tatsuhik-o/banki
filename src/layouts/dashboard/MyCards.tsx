import TitleCard from "../../components/TitleCard";
import CreditCard from "../../components/CreditCard";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  my_cards: {
    height: "100%",
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
});
export default function MyCards() {
  const classes = useStyles();
  return (
    <div className={classes.my_cards}>
      <TitleCard titleMessage="My Cards" />
      <CreditCard />
    </div>
  );
}
