import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../entities/product/productApi/store";

export const AppSelector: TypedUseSelectorHook<RootState> = useSelector;