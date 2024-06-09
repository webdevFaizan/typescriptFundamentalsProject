import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootReducerTypes } from "../store/reducer";

export const useAppSelector: TypedUseSelectorHook<RootReducerTypes> = useSelector;