<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord-hyper/develop/assets/nord-hyper-banner.svg"/></p>

<p align="center"><img src="https://assets-cdn.github.com/favicon.ico" width=24 height=24/> <a href="https://github.com/arcticicestudio/nord-hyper/releases/latest"><img src="https://img.shields.io/github/release/arcticicestudio/nord-hyper.svg?style=flat-square"/></a> <a href="https://github.com/arcticicestudio/nord/releases/tag/v0.2.0"><img src="https://img.shields.io/badge/Nord-v0.2.0-88C0D0.svg?style=flat-square"/></a> <img src="https://www.npmjs.com/static/images/touch-icons/favicon-32x32.png" width=24 height=24/> <a href="https://www.npmjs.com/package/nord-hyper"><img src="https://img.shields.io/npm/v/nord-hyper.svg?style=flat-square"/></a> <a href="https://www.npmjs.com/package/nord-hyper"><img src="https://img.shields.io/npm/dt/nord-hyper.svg?style=flat-square"/></a> <a href="https://www.npmjs.com/package/nord-hyper"><img src="https://img.shields.io/npm/dm/nord-hyper.svg?style=flat-square"/></a></p>

---

# 0.4.0

![Release Date: 2017-03-14](https://img.shields.io/badge/Release_Date-2017--03--14-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.4.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-hyper/projects/6) [![Milestone](https://img.shields.io/badge/Milestone-0.4.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-hyper/milestone/5)

## Improvements

❯ The `cursorColor` configuration is now respected to use the user defined color before the theme color. (@berkin, PR #8, bc73116f)

# 0.3.0

![Release Date: 2017-03-09](https://img.shields.io/badge/Release_Date-2017--03--09-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.3.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-hyper/projects/5) [![Milestone](https://img.shields.io/badge/Milestone-0.3.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-hyper/milestone/4)

## Features

### Configurations

❯ Added a configuration to set the [cursor blinking][gh-readme-config-cursor-blinking]. The default value is `true` to enable the non-obtrusive cursor blinking feature. (#7, @zovt, 27820cf8)

```js
module.exports = {
  config: {
    //...
    nordHyper: {
      cursorBlink: true
    }
    //...
  }
}
```

<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/nord-hyper/develop/assets/scrcast-feature-cursor-blink.gif"/></p>

# 0.2.0

![Release Date: 2017-03-08](https://img.shields.io/badge/Release_Date-2017--03--08-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.2.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-hyper/projects/4) [![Milestone](https://img.shields.io/badge/Milestone-0.2.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-hyper/milestone/3)

## Features

### Plugin Support

❯ Added optimized style integration for the [hyper-statusline][npm-hyper-statusline] plugin. (#6, 8ec6ad5d)

<p align="center"><img src="https://cloud.githubusercontent.com/assets/7836623/23712413/2a10b672-0423-11e7-854d-cb68e3e2a04c.png"/></p>

<p align="center"><strong>Hovered</strong><br><img src="https://cloud.githubusercontent.com/assets/7836623/23712434/3705d98e-0423-11e7-941a-7d0abc1b859d.png"/></p>

<p align="center"><strong>Hover transition</strong><img src="https://cloud.githubusercontent.com/assets/7836623/23712581/a40366f0-0423-11e7-80bd-e680808227aa.gif"/></p>

# 0.1.1

![Release Date: 2017-02-21](https://img.shields.io/badge/Release_Date-2017--02--21-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.1.1-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-hyper/projects/3) [![Milestone](https://img.shields.io/badge/Milestone-0.1.1-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-hyper/milestone/2)

## Improvements

### Continuous Integration Builds

❯ [Circle CI][ci-circle] builds are running against the latest supported [Node.js][nodejs] versions

❯ [Travis-CI][ci-travisci] builds are running against the latest supported [Node.js][nodejs] versions

## Bug Fixes

❯ Fixed the order of the `cursorShape`, `fontSize` and `fontFamily` configuration attributes to prevent overriding of the defined `~/.hyper.js` user configs with the theme defaults. (#2 and #3, @kepbod, 45e8e9c3)

### Documentation

❯ Fixed the keymaps to open- and reload the `~/.hyper.js` config file. (#2, @kepbod, d1604716)

# 0.1.0

![Release Date: 2017-02-19](https://img.shields.io/badge/Release_Date-2017--02--19-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.1.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-hyper/projects/2) [![Milestone](https://img.shields.io/badge/Milestone-0.1.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-hyper/milestone/1)

<img src="https://www.npmjs.com/static/images/touch-icons/apple-touch-icon-60x60.png" width=16 height=16/> **Initial npm module release version!**

## Features

A complete list of all implemented features can be found in the [README][gh-readme-features] section.

❯ Implemented the main `index.js` script theme file [`index.js`][gh-index.js]. (#1, b1fde294)

<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/nord-hyper/develop/assets/scrot-top.png"/></p>

<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/nord-hyper/develop/assets/scrot-feature-tabs.png"/></p>

Detailed information about features and install instructions can be found in the [README][gh-readme-installation] and in the [project wiki][gh-wiki].

# Project Initialization

![Release Date: 2017-02-19](https://img.shields.io/badge/Release_Date-2017--02--19-88C0D0.svg?style=flat-square)

[ci-circleci]: https://circleci.com/gh/arcticicestudio/nord-hyper
[ci-travisci]: https://travis-ci.org/arcticicestudio/nord-hyper
[gh-readme-config-cursor-blinking]: https://github.com/arcticicestudio/nord-hyper#cursor-blinking
[gh-readme-features]: https://github.com/arcticicestudio/nord-hyper/blob/develop/README.md#features
[gh-readme-installation]: https://github.com/arcticicestudio/nord-hyper/blob/develop/README.md#installation
[gh-index.js]: https://github.com/arcticicestudio/nord-hyper/blob/develop/index.js
[gh-wiki]: https://github.com/arcticicestudio/nord-hyper/wiki
[nodejs]: https://nodejs.org
[npm-hyper-statusline]: https://www.npmjs.com/package/hyper-statusline
