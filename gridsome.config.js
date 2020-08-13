// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Open Web Doc",
  port: 3000,
  outputDir: "docs",
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
  ],
  transformers: {
    remark: {
      plugins: ["gridsome-plugin-remark-prismjs-all"],
    },
  },
};
