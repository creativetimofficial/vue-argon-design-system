# Build Tools

Learn how to use Bootstrap’s included npm scripts to build our documentation, compile source code, run tests, and more.

<hr>

#### Tooling setup

Our package.json includes convenient methods for working with the framework, including compiling code and building it
for production. The template is based on Vue CLI 3 which is a modern tool to build Vue apps. It has numerous plugins and even
a user interface. `vue ui`

#### Vue CLI

We used Vue CLI 3 for Argon. Vue CLI is a very easy and convenient way to develop Vue.js applications. It has great built ins, yet is very
customizable based on your own needs. For more info, check out [their docs](https://cli.vuejs.org/)

#### Autoprefixer

Argon uses Autoprefixer (included in our build process) to automatically add vendor prefixes to some CSS properties at build time.
Doing so saves us time and code by allowing us to write key parts of our CSS a single time while eliminating the need for vendor mixins like those found in v3.

#### Webpack

Vue CLI 3 is powered by Webpack and it's great ecosystem. Under the hood, Vue CLI compiles `.vue` files into javascript and transforms them
into something that is understood by the browser with the help of webpack. You can customize the webpack config quite easily with Vue CLI.
For more info check [their docs](https://cli.vuejs.org/config/#configurewebpack);

#### Babel

Vue CLI uses Babel to convert new Javascript features to features that are understood by the browser.
Note that there is `.browserlistrc` file in the project where you can specify what target browser you aim for.
This way, babel knows what features to convert and what features to not convert. Having a modern browser support (e.g excluding Internet Explorer)
will most likely result in a small javascript bundle.

#### Eslint

Vue CLI comes along with eslint. You can configure it in the `.eslintrc.js` file. Eslint will provide warnings and errors and try to enforce best
practices for the Javascript code. An important note is that you can fix warnings with `npm run lint --fix` command.

