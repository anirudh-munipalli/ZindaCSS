# ZindaCSS
A utility class based CSS framework
ZindaCSS is an open source CSS framework that generates CSS classes for your HTML documents. This eliminates the need for writing CSS, and reduces the effort needed to design websites.

## Get started

**Including as a link**

You can include the link in your HTML page, which loads the framework over the internet. This is a slower approach for production, but is fine for testing, and small projects. Read the limitations of including as a link below

`<script src="https://anirudh-munipalli.github.io/zindacss-documentation/include/index.js"></script>`

Just copy and paste the above link in your file, and you are good to get started, you can start styling immedietely.

**Setting up ZindaCSS with npm and Node.js**

ZindaCSS works with the help of npm. To start styling, type the following command:

`npx zindacss build "*Path to your file*"`

**You should include the double quotes**

It will generate a CSS stylesheet with the name *Path to your file*.css.

You can specify the output CSS file name as another argument:

`npx zindacss build "*Path to your file*" "*Path to CSS file*"`


### Limitations of including as a link

If you include ZindaCSS as a link, you will not have access to the following features:
1. Pseudo selector based classes like `:hover` and `:focus`
2. Zindagroups, for grouping the classes together
3. Custom values

You will still have access to  more than a **thousand** classes.

## Features of ZindaCSS

It generates classes based on your requirements, which means you do not have to include hundreds of unused classes in your stylesheets.

It contains over **thousand** predefined classes, giving you control over various aspects of website design, including colors, backgrounds, borders, responsiveness. It also includes many animations.

If one of the thousand classes do not satisify your needs, then you can also generate custom classes. Eg. `color_#00ff00` gives the text a green color.

You can add classes like `:hover` and `:focus` to add pseudoselectors to CSS. Example `color-blue:hover` gives a blue color only when hovered.

Your file is monitored for changes as soon as you save your file, and a new stylesheet is generated immediately

You can group classes together. If many elements have the same style, you can simply use `<zindagroup>` for adding styles accross many elements.

## Documentation

The link to the documentation: https://anirudh-munipalli.github.io/zindacss-documentation/

### NPM
The npm package link: https://www.npmjs.com/package/zindacss
