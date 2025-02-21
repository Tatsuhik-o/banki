import { createContext } from "react";
import { TSideBar } from "./types";

export const mobileContext = createContext<TSideBar | null>(null);
