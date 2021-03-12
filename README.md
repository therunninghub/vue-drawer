[![Codacy Badge](https://api.codacy.com/project/badge/Grade/49b0de032f6a4a9bb212a7ad07cf95d7)](https://app.codacy.com/app/@therunninghub/vue-drawer?utm_source=github.com&utm_medium=referral&utm_content=@therunninghub/vue-drawer&utm_campaign=Badge_Grade_Settings)
[![codecov](https://codecov.io/gh/@therunninghub/vue-drawer/branch/master/graph/badge.svg)](https://codecov.io/gh/@therunninghub/vue-drawer)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)
[![Build Status](https://travis-ci.org/@therunninghub/vue-drawer.svg?branch=master)](https://travis-ci.org/@therunninghub/vue-drawer) [![Greenkeeper badge](https://badges.greenkeeper.io/@therunninghub/vue-drawer.svg)](https://greenkeeper.io/)
[![Known Vulnerabilities](https://snyk.io/test/github/@therunninghub/vue-drawer/badge.svg?targetFile=package.json)](https://snyk.io/test/github/@therunninghub/vue-drawer?targetFile=package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![npm](https://img.shields.io/npm/dt/vue-drawer.svg?style=flat)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Ftherunninghub%2Fvue-drawer.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Ftherunninghub%2Fvue-drawer)

# @therunninghub/vue-drawer

Vue Drawer for Vue.JS.

This package is forked from the original package [vue-simple-drawer](https://github.com/dreambo8563/vue-simple-drawer/) by [Vincent Guo](https://github.com/dreambo8563).

## Install

```
npm install @therunninghub/vue-drawer --save
```
or
```
yarn add @therunninghub/vue-drawer
```

### Quick Start

```js
<template>
  <div id="app">
    <button @click="toggle">toggle</button>
    <Drawer @close="toggle" align="left" :closeable="true">
      <div v-if="open">content here</div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from "vue-drawer"
export default {
  name: "app",
  data() {
    return {
      open: true
    }
  },
  components: {
    Drawer
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
}
</script>
```

### Prop Types

| Property     | Type    | Required? | Description                                                                                              |
| :----------- | :------ | :-------- | :------------------------------------------------------------------------------------------------------- |
| position     | String  |           | One of "left", "up", "right", "down", default: `right`. The position of the drawer.                      |
| animation    | String  |           | One of "slide", "bounce", default: `slide`. The animation of the drawer.                                 |
| closeable    | Boolean |           | show the x - close button, default: `true`                                                               |
| mask         | Boolean |           | show the mask layer - close button, default: `true`                                                      |
| maskClosable | Boolean |           | emit 'close' event when click on mask layer, default: `false`                                            |
| zIndex       | Number  |           | z-index value for the drawer, the nest drawer's z-index will be increased automatically, default: `1000` |

### Events

| Event | Params | Required? | Description                                          |
| :---- | :----- | :-------- | :--------------------------------------------------- |
| close | None   |           | will be triggered when user click the x close button |

### Slot

| Slot Name | Description                                                            |
| :-------- | ---------------------------------------------------------------------- |
| default   | the content display in the drawer which can show/hide the draw by v-if |

### Advance Guide

#### Nest Drawer

```js
<template>
  ...
  <button @click="toggle">Open/Close</button>
  <Drawer @close="toggle" :align="align" :closeable="true">
    <div v-if="open">
      <span @click="innerOpen=true">
        content here
        content here
        content here
        content here
        content here
        content here
        content here
      </span>
      <Drawer @close="innerOpen=false" :align="align" :closeable="true">
        <div v-if="innerOpen">
          content here
          content here
          content here
        </div>
      </Drawer>
    </div>
  </Drawer>
  ...
</template>

<script>
export default {
  data() {
    return {
      open: false,
      innerOpen: false,
      align: "left"
    };
  }
}
</script>
```

#### Customized Theme

- In your customized scss file (demo.scss)

```scss
$drawerCloseButtonWidth: 50px;
@import "~vue-drawer/src/index";
```

- import the scss to override the default theme in main.js (entry file) **after** you import the Draw component

```js
import "./demo.scss";
```

##### SCSS variables

**close button style**

- \$drawerCloseButtonColor
- \$drawerCloseButtonHoverColor

**close button size**

- \$drawerCloseButtonWidth

**drawer background**

- \$drawerBackgroundColor

**drawer text color**

- \$drawerTextColor

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Ftherunninghub%2Fvue-drawer.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Ftherunninghub%2Fvue-drawer)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table><tr><td align="center"><a href="https://dreambo8563.github.io/"><img src="https://avatars2.githubusercontent.com/u/6948318?v=4" width="100px;" alt="Vincent Guo"/><br /><sub><b>Vincent Guo</b></sub></a><br /><a href="https://github.com/dreambo8563/vue-simple-drawer/commits?author=dreambo8563" title="Code">💻</a> <a href="https://github.com/dreambo8563/vue-simple-drawer/commits?author=dreambo8563" title="Documentation">📖</a> <a href="#infra-dreambo8563" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td><td align="center"><a href="https://ansidev.github.io/"><img src="https://avatars.githubusercontent.com/u/6688235?s=460&u=e728f0f36111ca45bc732002f5f3723a6820bb56&v=4" width="100px;" alt="Le Minh Tri"/><br /><sub><b>Le Minh Tri</b></sub></a><br /><a href="https://github.com/@therunninghub/vue-drawer/commits?author=ansidev" title="Code">💻</a> <a href="https://github.com/@therunninghub/vue-drawer/commits?author=ansidev" title="Documentation">📖</a> <a href="#infra-ansidev" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td></tr></table>
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
