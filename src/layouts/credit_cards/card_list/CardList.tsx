import { makeStyles } from "@mui/styles";
import { my_credit_cards } from "../../../utils/constants";
import FlatCard from "../../../components/FlatCard";

const primaryColors: string[] = ["#396AFF", "#FF82AC", "#FFBB38", "#16DBCC"];
const secondaryColors: string[] = ["#E7EDFF", "#FFE0EB", "#FFF5D9", "#DCFAF8"];

const useStyles = makeStyles({
  card_list: {
    width: "100%",
    padding: "0.5rem",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    gap: "10px",
  },
});
export default function CardList() {
  const classes = useStyles();
  return (
    <div className={classes.card_list}>
      {my_credit_cards.slice(0, 3).map((card, idx) => {
        return (
          <FlatCard
            cardDetails={card}
            primaryColor={primaryColors[idx]}
            secondaryColor={secondaryColors[idx]}
            key={idx}
          />
        );
      })}
    </div>
  );
}
