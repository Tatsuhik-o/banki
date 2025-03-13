import { makeStyles } from "@mui/styles";
import { FriendType } from "../utils/types";
import { MouseEventHandler, useEffect, useState } from "react";
const useStyles = makeStyles({
  friend: {
    width: "30%",
    height: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "8px",
    alignItems: "center",
  },
  friend_pic: {
    width: "65%",
    aspectRatio: "1",
    overflow: "hidden",
    cursor: "pointer",
    borderRadius: "50%",

    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  friend_name: {
    fontFamily: "Segoe UI",
    overflow: "hidden",
    whiteSpace: "nowrap",
    fontStyle: "italic",
  },
  friend_tag: {
    fontFamily: "Segoe UI",
    overflow: "hidden",
    whiteSpace: "nowrap",
    color: "#7A95C3",
  },
});

type TFriend = {
  friend: FriendType;
  active: boolean;
  setActive: MouseEventHandler;
};

export default function Friend({ friend, active, setActive }: TFriend) {
  const classes = useStyles();
  const [profilePic, setProfilePic] = useState<string | undefined>(undefined);

  useEffect(() => {
    const timePromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("placeholder_image.png");
      }, 500);
    });
    const fetchPromise = async (URL: string) => {
      try {
        const response = await fetch(URL);
        const data = await response.text();
        if (data) {
          return URL;
        }
      } catch (err) {
        return "placeholder_image.png";
      }
    };

    Promise.any([
      fetchPromise(
        `https://avatar.iran.liara.run/public/${Math.floor(Math.random() * 45)}`
      ),
      timePromise,
    ]).then((res) => {
      setProfilePic(res as string);
    });
  }, []);

  return (
    <div className={classes.friend}>
      <div className={classes.friend_pic} onClick={setActive}>
        <img src={profilePic} alt={friend.name} />
      </div>
      <div
        className={classes.friend_name}
        style={{
          fontWeight: active ? "600" : "400",
          color: active ? "#7A95C3" : "",
        }}
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
