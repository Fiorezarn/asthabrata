import { createSlice } from "@reduxjs/toolkit";
import idLanguage from "../i18n/id";
import enLanguage from "../i18n/en";

const initialState = {
  locale: "id",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.locale = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const languageLocaleState = (state) => state.language.locale;

export const selectLanguageData = (state) => {
  const locale = state.language.locale;
  if (locale === "id") {
    return idLanguage;
  }
  return enLanguage;
};

export default languageSlice.reducer;
