import { makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";

const useStyles = makeStyles({
  credit_card: {
    width: "100%",
    border: "1px solid black",
    flex: "1",
  },
});

export default function CreditCard() {
  const [primaryCards, setPrimaryCards] = useState<number>(
    window.innerWidth < 600 ? 1 : 2
  );

  useEffect(() => {
    const checkResize = () => {
      setPrimaryCards(window.innerWidth < 600 ? 1 : 2);
    };
    window.addEventListener("resize", checkResize);
    return () => {
      window.removeEventListener("resize", checkResize);
    };
  }, []);
  const classes = useStyles();
  return <div className={classes.credit_card}>CreditCard</div>;
}
