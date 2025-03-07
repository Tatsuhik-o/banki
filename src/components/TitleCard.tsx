import { TTitle } from "../utils/types";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  title_card: {
    fontFamily: "IBM Plex Sans",
    fontSize: "1.4rem",
    fontWeight: "bold",
    minHeight: "35px",
    height: "fit-content",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
});
export default function TitleCard({ titleMessage }: TTitle) {
  const classes = useStyles();
  return <div className={classes.title_card}>{titleMessage}</div>;
}
