import Darkmode from "darkmode-js";

export default {
  setDarkmode: (state) => {
    if (!state.darkmode) {
      state.darkmode = new Darkmode();
    }
  },
  toggleDarkmode: (state) => state.darkmode?.toggle(),
  setLanguage: (state, language) => {
    localStorage.setItem("language", JSON.stringify(language));
    state.language = language;
  },
};
