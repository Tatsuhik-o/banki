import { makeStyles } from "@mui/styles";
import { CreditCardType } from "../utils/types";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mobileContext } from "../utils/context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  flat_card: {
    flex: "1",
    display: "flex",
    backgroundColor: "#FFFFFF",
    padding: "0.5rem",
    borderRadius: "18px",
    gap: (props: { mobileView: boolean }) =>
      props.mobileView ? "15px" : "50px",
    "& > *": {
      height: "100%",
    },
  },
  icon: {
    aspectRatio: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.5rem",
    borderRadius: "12px",
  },
  type: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  bank: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    textTransform: "capitalize",
  },
  card_number: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    textTransform: "capitalize",
  },
  name_on_card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    textTransform: "capitalize",
  },
  upper: {
    color: "#313131",
    fontSize: "0.85rem",
    fontFamily: "Source Code Pro",
  },
  lower: {
    textTransform: "capitalize",
    color: "#95AACF",
    fontSize: "0.7rem",
    fontFamily: "Source Code Pro",
  },
  more_details: {
    color: "#524FF6",
    fontFamily: "Source Code Pro",
    fontSize: "0.85rem",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
    },
  },
});

type TCreditCard = {
  cardDetails: CreditCardType;
  primaryColor: string;
  secondaryColor: string;
};

export default function FlatCard({
  cardDetails,
  primaryColor,
  secondaryColor,
}: TCreditCard) {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });

  return (
    <div className={classes.flat_card}>
      <div className={classes.icon} style={{ backgroundColor: secondaryColor }}>
        <FontAwesomeIcon icon={faCreditCard} color={primaryColor} />
      </div>
      {!mobileView && (
        <div className={classes.type}>
          <p className={classes.upper}>Card Type</p>
          <p className={classes.lower}>{cardDetails.type}</p>
        </div>
      )}
      <div className={classes.bank}>
        <p className={classes.upper}>Bank</p>
        <p className={classes.lower}>{cardDetails.bank}</p>
      </div>
      <div className={classes.card_number}>
        <p className={classes.upper}>{mobileView ? "Number" : "Card Number"}</p>
        <p className={classes.lower}>
          {mobileView
            ? `**** ${cardDetails.card_number.slice(0, 4)}`
            : `**** **** **** ${cardDetails.card_number.slice(0, 4)}`}
        </p>
      </div>
      <div className={classes.name_on_card}>
        <p className={classes.upper}>Cardholder</p>
        <p className={classes.lower}>{cardDetails.card_holder.split(" ")[0]}</p>
      </div>
      {!mobileView && (
        <div className={classes.more_details}>
          <Link to={"/cards"}>View Details</Link>
        </div>
      )}
    </div>
  );
}
