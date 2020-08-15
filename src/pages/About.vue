<template lang="pug">
    Layout
        h1 {{ $t("About") }}
        p {{ $t("I am a web developer that largely used MDN to document myself for my web projects.") }}
        p {{ $t("After having heard the Mozilla layoffs, people were concerned about the future of this website. If you think about it, for the most part of our job, we rely on information coming from this website.") }}
        p {{ $t("Usually, having a single actor for such an important service is not a safe position for all of us, Mozilla included. This isn't driving for a constant improvement, nor push for innovative way to bring the information.") }}
        p {{ $t("This being a fact, I wanted to offer an alternative to MDN documentation, with new ideas to make searching information easier. I hope you will like the idea.") }}
        p {{ $t("Open Web Doc is driven by Github contributions. Like MDN, you can contribute to it since you are logged on Github. Just make a pull request, submit your change or your addition, and it will be reviewed before pushed to our Github hosted documentation website.") }}
</template>

<script>
export default {
    metaInfo: {
        title: "About",
        meta: [
            {
                name: "description",
                content: "Learn about the history and goals of Open Web Doc.",
            },
        ],
    },
};
</script>
