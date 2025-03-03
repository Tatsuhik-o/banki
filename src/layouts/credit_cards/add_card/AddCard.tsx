import { makeStyles } from "@mui/styles";
import { mobileContext } from "../../../utils/context";
import { useContext, useReducer } from "react";

const useStyles = makeStyles({
  add_card: {
    width: "100%",
    padding: "1rem",
    flex: "1",
    backgroundColor: "#ffffff",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    alignItems: "center",
  },
  paragraph: {
    color: "#7A95C3",
    fontFamily: "Source Code Pro",
    width: (props: { mobileView: boolean }) =>
      props.mobileView ? "100%" : "80%",
    letterSpacing: "1.1px",
    lineHeight: (props: { mobileView: boolean }) =>
      props.mobileView ? "1rem" : "1.7rem",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: (props: { mobileView: boolean }) =>
      props.mobileView ? "20px" : "40px",
  },
  form_wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: (props: { mobileView: boolean }) =>
      props.mobileView ? "column" : "row",
    justifyContent: "space-around",
    gap: "10px",
  },
  first_row: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Source Code Pro",
    width: (props: { mobileView: boolean }) =>
      props.mobileView ? "90%" : "40%",
    gap: "10px",
  },
  second_row: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Source Code Pro",
    width: (props: { mobileView: boolean }) =>
      props.mobileView ? "90%" : "40%",
    gap: "10px",
  },
  input_var: {
    display: "flex",
    flexDirection: "column",
    gap: (props: { mobileView: boolean }) =>
      props.mobileView ? "0px" : "10px",
  },
  input: {
    border: "1px solid #EFF5F9",
    padding: "0.5rem",
    borderRadius: "8px",
    fontFamily: "Source Code Pro",
  },
  select: {
    border: "1px solid #EFF5F9",
    padding: "0.5rem",
    borderRadius: "8px",
    fontFamily: "Source Code Pro",
  },
  nums: {
    display: "flex",
    gap: "10px",
  },
  submit_button: {
    width: "50%",
    maxWidth: "150px",
    alignSelf: "center",
    padding: "0.5rem",
    borderRadius: "8px",
    backgroundColor: "#1814F3",
    color: "#FFFFFF",
    fontFamily: "Source Code Pro",
    border: "none",
    cursor: "pointer",
    "& active": {
      transform: "scale(1.1)",
    },
  },
});

type TState = {
  name: string;
  card: string;
  expiaryMonth: string;
  expiaryYear: string;
  type: "VISA" | "Mastercard" | "American Express";
};

type TAction = {
  type: "name" | "card" | "month" | "year" | "type";
  payload: any;
};

function reducer(state: TState, action: TAction) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "card":
      return { ...state, card: action.payload };
    case "month":
      return { ...state, expiaryMonth: action.payload };
    case "year":
      return { ...state, expiaryYear: action.payload };
    case "type":
      return { ...state, type: action.payload };
  }
}
const initialState: TState = {
  name: "",
  card: "",
  expiaryMonth:
    new Date().getMonth() + 1 < 10
      ? "0" + new Date().getMonth() + 1
      : (new Date().getMonth() + 1).toFixed(),
  expiaryYear: new Date().getFullYear().toFixed(),
  type: "VISA",
};

export default function AddCard() {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });

  const [formElements, dispatch] = useReducer(reducer, initialState);

  function submitCard(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formElements);
  }
  return (
    <div className={classes.add_card}>
      <p className={classes.paragraph}>
        Securely add a new credit card to your account. Please ensure all
        details are accurate before submitting.
      </p>
      <form onSubmit={submitCard} className={classes.form}>
        <div className={classes.form_wrapper}>
          <div className={classes.first_row}>
            <div className={classes.input_var}>
              <label htmlFor="card_type">Card Type</label>
              <select
                name="card_type"
                id="card_type"
                className={classes.select}
                value={formElements.type}
                onChange={(e) =>
                  dispatch({ type: "type", payload: e.target.value })
                }
              >
                <option value="VISA">VISA</option>
                <option value="Mastercard">Mastercard</option>
                <option value="American Express">American Express</option>
              </select>
            </div>
            <div className={classes.input_var}>
              <label htmlFor="card_name">Name on Card</label>
              <input
                id="card_name"
                type="text"
                className={classes.input}
                value={formElements.name}
                placeholder="Your Name ..."
                onChange={(e) =>
                  dispatch({ type: "name", payload: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div className={classes.second_row}>
            <div className={classes.input_var}>
              <label htmlFor="card_number">Card Number</label>
              <input
                type="text"
                id="card_number"
                placeholder="5348 1478 6547 9425"
                className={classes.input}
                pattern="^\d{4} \d{4} \d{4} \d{4}$"
                value={formElements.card}
                onChange={(e) =>
                  dispatch({ type: "card", payload: e.target.value })
                }
                required
              />
            </div>
            <div className={classes.input_var}>
              <label htmlFor="expiration_date">Expiration Date</label>
              <div className={classes.nums}>
                <select
                  name="expiration_date"
                  id="expiration_date"
                  className={classes.select}
                  value={formElements.expiaryMonth}
                  onChange={(e) =>
                    dispatch({ type: "month", payload: e.target.value })
                  }
                >
                  {Array.from({ length: 12 }, (_, idx) => idx + 1).map(
                    (elem, idx) => {
                      return (
                        <option
                          value={elem < 10 ? "0" + elem : elem}
                          key={idx}
                        >{`${elem < 10 ? "0" + elem : elem}`}</option>
                      );
                    }
                  )}
                </select>
                <select
                  name="expiration_year"
                  id="expiration_year"
                  className={classes.select}
                  value={formElements.expiaryYear}
                  onChange={(e) =>
                    dispatch({ type: "year", payload: e.target.value })
                  }
                >
                  {Array.from({ length: 12 }, (_, idx) => idx + 1).map(
                    (elem, idx) => {
                      return (
                        <option
                          value={elem + new Date().getFullYear() - 1}
                          key={idx}
                        >
                          {elem + new Date().getFullYear() - 1}
                        </option>
                      );
                    }
                  )}
                </select>
              </div>
            </div>
          </div>
        </div>
        <button className={classes.submit_button}>Add Card</button>
      </form>
    </div>
  );
}
