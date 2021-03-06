// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: "Open Web Doc",
    port: 3000,
    outputDir: "docs",
    siteUrl: "https://open-web-doc.github.io",
    pathPrefix: "/website",
    plugins: [
        {
            use: "@gridsome/source-filesystem",
            options: {
                path: "documentation/**/*.md",
                typeName: "Documentation",
                remark: {
                    // remark options
                },
            },
        },
        {
            use: "gridsome-plugin-pug",
        },
        {
            use: "@gridsome/plugin-sitemap",
        },
        {
            use: "gridsome-plugin-robots-txt",
            options: {
                sitemap: "https://open-web-doc.github.io/website/sitemap.xml",
                policy: [
                    {
                        userAgent: "*",
                        allow: "/",
                    },
                ],
            },
        },
        {
            use: "gridsome-plugin-service-worker",
            options: {
                networkFirst: {
                    cacheName: "nf-v1",
                    fileTypes: ["document", "script", "style"],
                },
            },
        },
    ],
    transformers: {
        remark: {
            plugins: ["gridsome-plugin-remark-prismjs-all"],
        },
    },
};
