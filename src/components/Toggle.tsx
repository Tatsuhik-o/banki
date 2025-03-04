import { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  toggle: {
    padding: "5px 15px",
    borderRadius: "50px",
    width: "fit-content",
    border: "none",
    cursor: "pointer",
    backgroundColor: (props: { isOn: boolean }) =>
      props.isOn ? "#4CAF50" : "#ccc",
    color: "#fff",
    transition: "background-color 0.3s ease",
  },
});

type TToggle = {
  isItOn: boolean;
};

export default function Toggle({ isItOn }: TToggle) {
  const [isOn, setIsOn] = useState<boolean>(isItOn);
  const classes = useStyles({ isOn });
  return (
    <button onClick={() => setIsOn(!isOn)} className={classes.toggle}>
      {isOn ? "On" : "Off"}
    </button>
  );
}
