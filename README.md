<h1 align="center">
boowa
</h1>
<p align="center"><strong> <img src="https://avatars2.githubusercontent.com/u/34954489?s=200&v=4" width="25px"/> = a fun blog generator </strong></p>

<br />

<div align="center">
  <!-- Stability -->
  <a href="https://nodejs.org/api/documentation.html#documentation_stability_index">
    <img src="https://img.shields.io/badge/stability-stable-green.svg?style=flat-square"
      alt="API stability" />
  </a>

  <!-- travis ci -->
  <a href="https://travis-ci.org/boowajs/boowa">
    <img src="https://img.shields.io/travis/boowajs/boowa.svg?style=flat-square"
      alt="test status" />
  </a>

  <!-- npm version -->
  <a href="https://npmjs.org/package/boowa">
    <img src="https://img.shields.io/npm/v/boowa.svg?style=flat-square"
      alt="npm version" />
  </a>

  <!-- code style -->
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-blue.svg?style=flat-square"
      alt="code style: standard" />
  </a>
</div>
<br />

**Table of Contents**
- [Themes](#themes)
- [Features](#features)
- [Quick Start](#quick-start)
- [Why my name is boowa](#why-my-name-is-boowa)
- [API](#api)

## Themes
Let's see some boowa blogs first, will add more themes later:
- [austere_theme](https://boowajs.github.io/austere_theme/)
- [classic_theme](https://boowajs.github.io/classic_theme/)
- [code_theme](https://boowajs.github.io/code_theme/)

## Features
- __colorful:__  provide kinds of styles to take your fancy
- __simple:__ few tips to play your blog
- __support offline:__ keep reading even if there's no wifi
- __very modern:__ works very well with async functions (node 7.6+)
- __fast as lightning:__ it takes almost no time to generate a blog!

## Quick Start

1. Install boowa globally
```sh
npm install boowa -g
```

2. Make a directory to generate your blog
```sh
mkdir myBlog && cd myBlog
boowa
```

3. Select one style from the inquiring list


4. Start a development server
```sh
npm run start
```

## Why my name is boowa
boowa is built with:
- [bankai](https://github.com/choojs/bankai) - 🚉 - friendly web compiler
- [choo](https://choo.io/) - 🚂 4kb framework for creating sturdy frontend applications
- [awoo](https://github.com/awoojs/awoo) - 🔸 declarative small site generator

so, boowa

## API

### `boowa`
Generate a new blog app in a empty directory

### app structure
<img src="https://github.com/boowajs/boowa/blob/master/pics/structure.png" width="150px">

Actually a choo app yeah~, but you only need to handle markdown files and `_config.json`

### `boowa create`
<img src="https://github.com/boowajs/boowa/blob/master/pics/create.png" width="350px">

Run this command to generate a new markdown file contains the necessary structure, and it will build the html file automatically:

<img src="https://github.com/boowajs/boowa/blob/master/pics/sub_stru.png" width="150px">

⚠️ Put content in `markdown-body`:

<img src="https://github.com/boowajs/boowa/blob/master/pics/md.png" width="250px">

### `_config.json`
This file contains metadatas like name, email etc.

### `boowa build`
After edit `_config.json` or modify markdown files, run this command to generate new templates.

### `npm run start`
Start a development server

### `npm run build`
Compile all files to dist/

### `boowa serve <port | 8080>`
Boowa has a simple built-in server , after `npm run build && cd dist`, run this command to serve the production code.

### update the newest code
After install the newest boowa, run `boowa` in the boowa-existed directory, this update would not rewrite the markdown files and `_config.json`.

### support offline locally
Service-worker works under https in production mode, so if you want to test the offline function locally, for chrome, run this command first:
```sh
/Applications/Google\ Chrome.app/Conts/MacOS/Google\ Chrome --user-data-dir=/tmp/foo --ignore-certificate-errors --unsafely-treat-insecure-origin-as-secure=http://localhost:port
```

You will see `ServiceWorker registration successful with scope:  http://localhost:port/` in the developer tool, if service-worker register successfully.

## License
[MIT](https://tldrlegal.com/license/mit-license)
