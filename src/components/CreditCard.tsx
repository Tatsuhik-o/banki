import { makeStyles } from "@mui/styles";
import { CreditCardType } from "../utils/types";
import { hideCreditCard } from "../utils/constants";
import { mobileContext } from "../utils/context";
import { useContext } from "react";

type TCreditCardProps = {
  cardDetails: CreditCardType;
};

const useStyles = makeStyles({
  credit_details: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    borderRadius: "25px",
    gap: "0px",
    fontFamily: "Source Code Pro",
    color: (props: { cardType: string; mobileView: boolean }) =>
      props.cardType === "primary" ? "#fff" : "#343C6A",
    border: (props: { cardType: string; mobileView: boolean }) =>
      props.cardType === "primary" ? "none" : "1px solid #DFEAF2",
  },
  upper_card: {
    padding: "0rem 1rem",
    height: "75%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    background: (props: { cardType: string; mobileView: boolean }) =>
      props.cardType === "primary"
        ? "linear-gradient(#3835EF, #3532F1)"
        : props.cardType === "secondary"
        ? "#ffffff"
        : "linear-gradient(to right, #FCC08D, #E65FFF)",
  },
  upper_layer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balance: {
    "& label": {
      fontSize: "0.7rem",
      fontFamily: "IBM Plex Sans",
      fontWeight: "400",
    },
    "& p": {
      fontSize: "1.2rem",
    },
  },
  sim_tray: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bottom_layer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card_holder: {
    "& label": {
      fontSize: "0.7rem",
      fontFamily: "IBM Plex Sans",
      fontWeight: "400",
    },
    "& p": {
      fontSize: "1.2rem",
    },
  },
  expiry_date: {
    "& label": {
      fontSize: "0.7rem",
      fontFamily: "IBM Plex Sans",
      fontWeight: "400",
    },
    "& p": {
      fontSize: "1rem",
    },
  },
  bottom_card: {
    padding: "0rem 1rem",
    overflow: "hidden",
    height: "25%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: (props: { cardType: string; mobileView: boolean }) =>
      props.cardType === "primary"
        ? "linear-gradient(#4A47F4, #2724F1)"
        : props.cardType === "secondary"
        ? "#ffffff"
        : "linear-gradient(to right, #FCC08D, #E65FFF)",
    borderTop: (props: { cardType: string }) =>
      props.cardType === "primary"
        ? "none"
        : props.cardType === "secondary"
        ? "1px solid #F7FAFC"
        : "1px solid #F399BC",
  },

  card_number: {
    fontSize: (props) => (!props.mobileView ? "0.9rem" : "0.8rem"),
    fontWeight: "600",
    fontFamily: "Source Code Pro",
    letterSpacing: "1.2px",
  },
  card_provider: {
    height: "45%",
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
});

export default function CreditCard({ cardDetails }: TCreditCardProps) {
  const { mobileView } = useContext(mobileContext) || {};

  const classes = useStyles({
    cardType: cardDetails.type,
    mobileView: mobileView ?? false,
  });
  return (
    <div className={classes.credit_details}>
      <div className={classes.upper_card}>
        <div className={classes.upper_layer}>
          <div className={classes.balance}>
            <label htmlFor="">Balance</label>
            <p>{cardDetails.balance}$</p>
          </div>
          <div className={classes.sim_tray}>
            <img
              src={
                cardDetails.type === "primary" || "other"
                  ? "sim_tray_primary.png"
                  : "sim_tray_secondary.png"
              }
              alt=""
            />
          </div>
        </div>
        <div className={classes.bottom_layer}>
          <div className={classes.card_holder}>
            <label htmlFor="">Card Holder</label>
            <p>{cardDetails.card_holder}</p>
          </div>
          <div className={classes.expiry_date}>
            <label htmlFor="">Valid Thru</label>
            <p>{cardDetails.expiry_date}</p>
          </div>
        </div>
      </div>
      <div className={classes.bottom_card}>
        <div className={classes.card_number}>
          {hideCreditCard(cardDetails.card_number)}
        </div>
        <div className={classes.card_provider}>
          <img src={`${cardDetails.provider}.png`} alt="" />
        </div>
      </div>
    </div>
  );
}
