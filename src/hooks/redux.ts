import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useSearchSelector: TypedUseSelectorHook<RootState> = useSelector;
// export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useArrayUsersSelector: TypedUseSelectorHook<RootState> = useSelector;
