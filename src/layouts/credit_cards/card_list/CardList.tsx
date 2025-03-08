import { makeStyles } from "@mui/styles";
import FlatCard from "../../../components/FlatCard";
import { CreditCardType } from "../../../utils/types";

const primaryColors: string[] = ["#396AFF", "#FF82AC", "#FFBB38", "#16DBCC"];
const secondaryColors: string[] = ["#E7EDFF", "#FFE0EB", "#FFF5D9", "#DCFAF8"];

const useStyles = makeStyles({
  card_list: {
    width: "100%",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    gap: "8px",
  },
});

type TCardList = {
  activeCard: CreditCardType[];
};

export default function CardList({ activeCard }: TCardList) {
  const classes = useStyles();

  return (
    <div className={classes.card_list}>
      {activeCard &&
        activeCard.slice(0, 3).map((card, idx) => {
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
