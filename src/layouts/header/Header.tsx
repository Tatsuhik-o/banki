import { useLocation } from "react-router-dom";
import { mobileContext } from "../../utils/context";
import { useContext, useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faMagnifyingGlass,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { routes } from "../../utils/constants";

const useStyles = makeStyles({
  header: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: (props: { mobileView: boolean }) =>
      !props.mobileView ? "space-between" : "center",
    alignItems: "center",
    gap: "10px",
    padding: "0rem 2rem",
    "& > *": {
      height: "100%",
      display: "flex",
      alignItems: "center",
    },
  },
  left_side: {
    maxWidth: "250px",
    textTransform: "uppercase",
    textDecoration: "none",
    fontSize: "1.5rem",
    color: "#343C6A",
    fontWeight: "bold",
    fontFamily: "Poppins",
  },
  right_side: {
    flex: "1",
    display: "flex",
    justifyContent: "flex-end",
    gap: "25px",
  },
  full_header_parts: {
    display: "flex",
    gap: "25px",
  },
  icon_wrapper: {
    width: "40px",
    height: "40px",
    backgroundColor: "#F5F7FA",
    borderRadius: "50%",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0.65rem",
    cursor: "pointer",
  },
  profile_snippet: {
    height: "calc(100% - 25px)",
    aspectRatio: "1",
    borderRadius: "50%",
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  input: {
    position: "relative",
    width: "225px",
    "& input": {
      height: "100%",
      width: "100%",
      borderRadius: "50px",
      border: "none",
      backgroundColor: "#F5F7FA",
      paddingLeft: "35px",
      color: "black",
      fontSize: "0.8rem",
      fontFamily: "Segoe UI",
    },
    "& input::placeholder": {
      color: "#B3C3DC",
    },
  },
  absolute: {
    position: "absolute",
    top: "50%",
    left: "10px",
    transform: "translateY(-50%)",
    color: "#B3C3DC",
  },
});

function extractPath(untrimmedPath: string): string {
  const pathSegment = untrimmedPath.split("/")[0];
  return routes.find((route) => route === pathSegment) ? pathSegment : "404";
}

export default function Header() {
  const { mobileView } = useContext(mobileContext) || {};
  const [profileImage, setProfileImage] = useState<string | undefined>(
    undefined
  );
  const location = useLocation();
  const currentPath =
    location.pathname.substring(1) === ""
      ? "Dashboard"
      : extractPath(location.pathname.substring(1));
  const classes = useStyles({ mobileView: mobileView || false });

  useEffect(() => {
    const controller = new AbortController();
    const fast = new Promise((resolve) => {
      setTimeout(() => {
        resolve("/placeholder_image.png");
        controller.abort();
      }, 250);
    });

    const fetchNewImage = async (): Promise<string> => {
      const URL = `https://avatar.iran.liara.run/public`;
      const response = await fetch(URL, {
        signal: controller.signal,
      });
      if (response.ok) {
        return URL;
      }
      return "/placeholder_image.png";
    };

    Promise.any([fast, fetchNewImage()]).then((res) => {
      setProfileImage(res as string);
    });
  }, []);

  return (
    <div className={classes.header}>
      <div className={classes.left_side}>{currentPath}</div>
      {!mobileView && (
        <div className={classes.right_side}>
          <div className={classes.full_header_parts}>
            <div className={classes.input}>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={classes.absolute}
              />
              <input type="text" placeholder="Search for something ..." />
            </div>
            <div className={classes.icon_wrapper}>
              <FontAwesomeIcon icon={faGear} color="#92A8CE" fontSize={19} />
            </div>
            <div className={classes.icon_wrapper}>
              <FontAwesomeIcon icon={faBell} color="#FD657C" fontSize={19} />
            </div>
          </div>
          <div className={classes.profile_snippet}>
            <img src={profileImage} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}
