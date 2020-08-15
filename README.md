# Open Web Doc

Community driven documentation for the developers around the world.

## Summary

- [Contributing](#contributing)
- [Downloading an offline version of the documentation](#downloading-an-offline-version-of-the-documentation)

## Contributing

This website lives thanks to **you**. There is always something to do, to improve, or to innovate on.

- [Translating existing documentation in new languages](#translating-existing-documentation-in-new-languages)
- [Translating non doc related texts](#translating-non-doc-related-texts)
- [Improving the maintainability of the code base](#improving-the-maintainability-of-the-code-base)
- [Improvement suggestions](#improvement-suggestions)

### Translating existing documentation in new languages

Contributor might add new documentation for existing language. Open Web Doc goal is to be available for a maximum of language.

**Requirements**

Node and Yarn installed

**Procedure**

After you cloned the project, install the dependencies:

```bash
yarn install
```

Start the web server:

```bash
yarn develop
```

You can view a local version of the Open Web Doc website by browsing `http://localhost:3000`.

All documentation are located in the folder `documentation` at the root of the project folder.

If you are translating an existing documentation in Spanish, the 2 letter code of this language is "es".

Let's say you are translation the documentation originally located at `documentation\en\javascript\for-of.md`

You will need to create the new translation at `documentation\es\javascript\for-of.md`.

Once you are satisfied with the translation, just go back to the local website. Your translation is now selectable in the top navbar.

### Translating non doc related texts

When contributors add new translations for documentation, the home page and about page texts might not be translated.

**Requirements**

Node and Yarn installed

**Procedure**

After you cloned the project, install the dependencies:

```bash
yarn install
```

You can start the web server:

```bash
yarn develop
```

You will be able to browse a local version of the web documentation at `http://localhost:3000`.

Translation for non related documentation texts are located in a JSON object on the folder `src/i18n/messages`. For example, English translations are located in `src/i18n/messages/en.js`.

You just have to copy the english counterpart translation for the key, and the value becomes your language translated text.

Make sure to keep the key as it is on the english version, and not change it.

After that, you need to import the new language like done in the file `src/i18n/messages/index.js`.

Then, you can just browse the local website to check the translated text is correctly displayed according to the current selected language (at the top navbar).

### Improving the maintainability of the code base

This website has been originally created by me. I may have used techniques that would not scale in the context of a mass contribution.

**requirements**

- Node and Yarn installed
- Knowledges with Vue.js
- Depending the task, knowledge with VueRouter, VueX, VueI18n
- Knowledge with Gridsome is not mandatory (but appreciated)

**procedure**

If you are willing to contribute on the codebase, I am sure you know what you are doing.

You can either:

- Relocate files to improve the code organization
- Add support for unit testing Vue components
- Add support for browser tests
- Add support for Typescript SFC files

Don't hesitate to check Gridsome plugins, there might be a plugin for what you are looking to improve.

### Improvement suggestions

I am personnaly excited about new cool ways to deliver information. This is the moment where you can propose your dream features.

**requirements**

None. Every ideas worth the discussions!

**procedure**

Go the the issue tab, and create a new issue. Don't hesitate to organize the description by adding:

- A brief description of what you are trying to solve
- An explaination of the current behavior (or what is missing)
- An explainationf of the expected behavior you want to see
- Some notes if there is some tricky things to take into account

## Downloading an offline version of the documentation

You can browse the `documentation` folder in the source code, and select your prefered language.

Then you can download a ziped version of the folder using the amazing [https://kinolien.github.io/gitzip/](https://kinolien.github.io/gitzip/) (make sure to copy the URL first).
