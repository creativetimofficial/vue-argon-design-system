## Quick Start

To start using this design system you will need to to install some dependencies or copy some files to your
project.

<hr>

#### Steps to install

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Navigate to the main directory (from terminal) where `package.json` is located.
3. Run `npm install` or `yarn install`
4. Run `npm run serve` or `yarn serve` to start the local development server and start prototyping.


#### Argon Kit

Argon Kit is built as Vue plugin so you can simply import it and use it.

```js
import Vue from 'vue';
import Argon from '@/plugins/argon-kit'
Vue.use(Argon);
```

#### Global Components

Argon comes with an extensive set of custom Vue components. Some of them are globally instantiated so
it's easier to use them across the app without importing them each time.

Here's the list of global components:

- **Badge**
- **BaseAlert**
- **BaseButton**
- **BaseCheckbox**
- **BaseInput**
- **BasePagination**
- **BaseProgress**
- **BaseRadio**
- **BaseSlider**
- **BaseSwitch**
- **Card**
- **Icon**

#### Local components

Besides the components mentioned above, we have some extra components/plugins that are usually less used
and bigger. In order to not affect the overall bundle size of the Argon Kit, they should be imported locally.

Here's the list of local components:

- **BaseNav**
- **CloseButton**
- **Modal**
- **NavbarToogleButton**
- **Tabs**
- **TabPane**

#### Starter template

To get started faster, we provide a starter template inside the project. It's a bare bones
layout with nav, footer and a hello world. To enable it go to **main.js** and change line 3

```js{3}
import Vue from "vue";
import App from "./App.vue";
import router from "./starterRouter";
```
