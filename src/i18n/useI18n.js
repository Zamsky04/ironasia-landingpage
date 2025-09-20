import { useContext } from "react";
import { I18nCtx } from "./I18nContext.js";
export const useI18n = () => useContext(I18nCtx);