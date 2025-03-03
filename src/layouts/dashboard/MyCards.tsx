import TitleCard from "../../components/TitleCard";
import CreditCard from "../../components/CreditCard";
import { my_credit_cards } from "../../utils/constants";
import { makeStyles } from "@mui/styles";
import { useState, useEffect } from "react";

const useStyles = makeStyles({
  my_cards: {
    height: "100%",
    width: "100%",
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  credit_cards: {
    width: "100%",
    flex: "1",
    display: "flex",
    gap: "10px",
    justifyContent: "space-between",
    overflow: "hidden",
  },
});

type TMyCards = {
  titleMessage: string;
};

export default function MyCards({ titleMessage }: TMyCards) {
  const classes = useStyles();
  const [primaryCards, setPrimaryCards] = useState<number>(
    window.innerWidth < 650 ? 1 : 2
  );

  useEffect(() => {
    const checkResize = () => {
      setPrimaryCards(window.innerWidth < 650 ? 1 : 2);
    };
    window.addEventListener("resize", checkResize);
    return () => {
      window.removeEventListener("resize", checkResize);
    };
  }, []);

  return (
    <div className={classes.my_cards}>
      <TitleCard titleMessage={titleMessage} />
      <div className={classes.credit_cards}>
        {my_credit_cards
          .filter((_, idx) => idx < primaryCards)
          .map((card) => {
            return <CreditCard cardDetails={card} key={card.card_number} />;
          })}
      </div>
    </div>
  );
}
