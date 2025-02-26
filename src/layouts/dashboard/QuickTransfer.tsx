import TitleCard from "../../components/TitleCard";
import { makeStyles } from "@mui/styles";
import Friend from "../../components/Friend";
import { friends } from "../../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { mobileContext } from "../../utils/context";
import { useState, useContext } from "react";

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
  },
  friends: {
    height: "65%",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  transfer_transaction: {
    height: "35%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
  },
});

export default function QuickTransfer() {
  const classes = useStyles();
  const { mobileView } = useContext(mobileContext) || {};
  const [activeFriend, setActiveFriend] = useState<number>(0);
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
          <input type="text" />
          <button>
            Send <FontAwesomeIcon icon={faPaperPlane} />
          </button>
        </div>
      </div>
    </div>
  );
}
