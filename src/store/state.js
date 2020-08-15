let language = "en";

if (process.isClient) {
    language = localStorage.getItem("language") ?? JSON.stringify("en");

    try {
        language = JSON.parse(language);
    } catch (exception) {
        language = "en";
    }
}

export default {
    darkmode: null,
    language,
};
