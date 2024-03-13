import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useSearchSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAuthSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useFavoritesSelector: TypedUseSelectorHook<RootState> = useSelector;
