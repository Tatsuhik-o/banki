import TitleCard from "../../components/TitleCard";
import { makeStyles } from "@mui/styles";
import Friend from "../../components/Friend";
import { friends } from "../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { mobileContext } from "../../utils/context";
import { useState, useContext, useEffect } from "react";

const useStyles = makeStyles({
  quick_transfer: {
    height: "100%",
    width: "100%",
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  the_quick_transfer: {
    width: "100%",
    flex: "1",
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    borderRadius: "25px",
    display: "flex",
    flexDirection: "column",
    padding: (props: { mobileView: boolean; ipadView: boolean }) =>
      props.mobileView ? "1rem" : "0.5rem",
  },
  friends: {
    height: "65%",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
  },
  transfer_transaction: {
    height: "35%",
    width: "100%",
    display: "flex",
    flexDirection: (props: { mobileView: boolean; ipadView: boolean }) =>
      props.ipadView ? "column" : "row",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
    "& label": {
      color: "#718EBF",
      fontFamily: "Segoe UI",
    },
  },
  transfer_amount: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    height: "100%",
    "& input": {
      height: "50%",
      minHeight: "40px",
      borderRadius: "50px",
      backgroundColor: "#EDF1F7",
      border: "none",
      color: "#90A6CD",
      paddingLeft: "1rem",
      transform: (props: { mobileView: boolean; ipadView: boolean }) =>
        props.mobileView ? "translateX(-15%)" : "",
    },
    "& button": {
      position: "absolute",
      top: "50%",
      left: "100%",
      transform: "translate3d(-100%, -50%, 0)",
      backgroundColor: "#1814F3",
      color: "#FFFFFF",
      border: "none",
      borderRadius: "50px",
      height: "50%",
      minHeight: "40px",
      padding: "0.5rem 1rem",
      display: "flex",
      gap: "10px",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
  },
});

export default function QuickTransfer() {
  const { mobileView } = useContext(mobileContext) || {};
  const [ipadView, setIpadView] = useState<boolean>(window.innerWidth < 1400);
  const [activeFriend, setActiveFriend] = useState<number>(
    Math.floor(Math.random() * 3)
  );

  useEffect(() => {
    const setIpadViewAfterResize = () => {
      setIpadView(window.innerWidth < 1400);
    };
    window.addEventListener("resize", setIpadViewAfterResize);
    return () => {
      window.removeEventListener("resize", setIpadViewAfterResize);
    };
  }, []);

  const classes = useStyles({
    mobileView: mobileView || false,
    ipadView: ipadView || false,
  });
  return (
    <div className={classes.quick_transfer}>
      <TitleCard titleMessage="Quick Transfer" />
      <div className={classes.the_quick_transfer}>
        <div className={classes.friends}>
          {friends
            .filter((_, idx) => idx < (mobileView ? 2 : 3))
            .map((friend, idx) => {
              return (
                <Friend
                  friend={friend}
                  active={activeFriend === idx ? true : false}
                  setActive={() => setActiveFriend(idx)}
                  key={idx}
                />
              );
            })}
        </div>
        <div className={classes.transfer_transaction}>
          <label htmlFor="">Write Amount</label>
          <div className={classes.transfer_amount}>
            <input type="text" placeholder="525.50" />
            <button>
              Send <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
