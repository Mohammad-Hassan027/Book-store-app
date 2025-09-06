import { useContext } from "react";
import { StoreContext } from "../context/create-context";

export const useAuth = () => {
  return useContext(StoreContext);
};
