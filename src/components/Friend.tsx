import { makeStyles } from "@mui/styles";
import { FriendType } from "../utils/types";
import { MouseEventHandler } from "react";
const useStyles = makeStyles({
  friend: {
    width: "30%",
    aspectRatio: "1",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    alignItems: "center",
  },
  friend_pic: {
    width: "65%",
    aspectRatio: "1",
    overflow: "hidden",
    cursor: "pointer",
    borderRadius: "50px",
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  friend_name: {
    fontFamily: "poppins",
    overflow: "hidden",
    whiteSpace: "nowrap",
    fontStyle: "italic",
  },
  friend_tag: {
    fontFamily: "poppins",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
});

type TFriend = {
  friend: FriendType;
  active: boolean;
  setActive: MouseEventHandler;
};

export default function Friend({ friend, active, setActive }: TFriend) {
  const classes = useStyles();
  return (
    <div className={classes.friend}>
      <div className={classes.friend_pic} onClick={setActive}>
        <img src="https://avatar.iran.liara.run/public" alt={friend.name} />
      </div>
      <div
        className={classes.friend_name}
        style={{ fontWeight: active ? "600" : "400" }}
      >
        {friend.name}
      </div>
      <div
        className={classes.friend_tag}
        style={{ fontWeight: active ? "600" : "400" }}
      >
        {friend.tag}
      </div>
    </div>
  );
}
