export default {
    setDarkmode: async ({ commit }) => await commit("setDarkmode"),
    toggleDarkmode: async ({ commit }) => await commit("toggleDarkmode"),
    setLanguage: async ({ commit }, language) =>
        await commit("setLanguage", language),
};
