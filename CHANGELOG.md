<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord-hyper/develop/assets/nord-hyper-banner.svg"/></p>

<p align="center"><img src="https://assets-cdn.github.com/favicon.ico" width=24 height=24/> <a href="https://github.com/arcticicestudio/nord-hyper/releases/latest"><img src="https://img.shields.io/github/release/arcticicestudio/nord-hyper.svg?style=flat-square"/></a> <a href="https://github.com/arcticicestudio/nord/releases/tag/v0.2.0"><img src="https://img.shields.io/badge/Nord-v0.2.0-88C0D0.svg?style=flat-square"/></a> <img src="https://www.npmjs.com/static/images/touch-icons/favicon-32x32.png" width=24 height=24/> <a href="https://www.npmjs.com/package/nord-hyper"><img src="https://img.shields.io/npm/v/nord-hyper.svg?style=flat-square"/></a> <a href="https://www.npmjs.com/package/nord-hyper"><img src="https://img.shields.io/npm/dt/nord-hyper.svg?style=flat-square"/></a> <a href="https://www.npmjs.com/package/nord-hyper"><img src="https://img.shields.io/npm/dm/nord-hyper.svg?style=flat-square"/></a></p>

---

# 0.5.0

![Release Date: 2018-01-07](https://img.shields.io/badge/Release_Date-2018--01--07-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.5.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-hyper/projects/7) [![Milestone](https://img.shields.io/badge/Milestone-0.5.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-hyper/milestone/6)

> Detailed information about features and the project can be found in the [project documentation][gh-docs].

## Improvements

### Documentation

❯ The new [project documentation][gh-docs] contains chapters to learn about the [installation][gh-docs-getting-started-installation] and development [requirements][gh-docs-getting-started-requirements], [learn how to build][gh-docs-dev-building] the project and [run the tests][gh-docs-dev-testing]. (#25 in PR #26, 4b0771b7)

❯ Next to the project documentation the new [GitHub Open Source community standards][github-blog-cm-tools] have been added to complete the project's [community profile][gh-cm-profile] and adapt to the [Open Source Guides][github-opensource-guide] consisting of the [Contributing Guidelines][github-help-coc] and the [Code of Conduct][github-blog-contrib-guidelines]. (#18 in PR #24, 775161e1)

❯ Added GitHub's new [code owners][github-blog-code-owners] feature to improve the code review process. (#16 in PR #22, a6217905)

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/34651429-7f4ace32-f3d0-11e7-8809-4b8cb9d69b18.png"/></p>

❯ Added GitHub's new [issue and pull request templates][github-blog-issue-pr-templates] to provide support for contributors to [create issues][issue-template] and [submitting pull requests][pr-template]. (#17 in PR #23, 251450ec)

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/34651473-e23290f2-f3d0-11e7-93bd-8244795e4117.png"/></p>

## Bug Fixes

❯ Removed the cursor blink (´cursorBlink) theme configuration implemented in #7 which caused the display to break when Hyper gets fully reloaded. Users can switch to the [builtin configuration feature][hyper-docs-config] provided by Hyper introduced in version [1.3.0][hyper-gh-release-1.3.0]. (#10 in PR #12, @Erazihel, fc161d13)

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/31133016-954868ce-a85e-11e7-8b04-a6427a335be8.png"/></p>

## Tasks

### Documentation

❯ Adapted the migration to the [MIT license][gh-license.md] based on the main task arcticicestudio/nord#/55. (#13 in PR #14, a7a0468d)

### Build Tools

❯ Updated the build configuration for [Circle CI][ci-circleci] to the new [API version 2.0][circle-ci-docs-api-2.0]. Both Circle CI and [Travis CI][ci-travisci] are changed to use [npm][npm] instead of [yarn][yarn]. (#20 in PR #21, 50a1c8ec)

❯ Replaced [gulp.js][gulp.js] with npm scripts. *gulp.js* is meant to be used as streaming build tool for larger projects with many tasks to combine them to a simple workflow while Nord Hyper is a small project with only one build / development task where *gulp.js* is more overhead / too heavy weight. (#27 in PR #28, f822e3d6)

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
[circle-ci-docs-api-2.0]: https://circleci.com/docs/2.0
[gh-cm-profile]: https://github.com/arcticicestudio/nord-hyper/community
[gh-docs]: https://arcticicestudio.github.io/nord-hyper
[gh-docs-dev-building]: https://arcticicestudio.github.io/nord-hyper/development/building.html
[gh-docs-dev-testing]: https://arcticicestudio.github.io/nord-hyper/development/testing.html
[gh-docs-get-started]: https://arcticicestudio.github.io/nord-hyper/getting-started
[gh-docs-getting-started-installation]: https://arcticicestudio.github.io/nord-hyper/getting-started/installation.html
[gh-docs-getting-started-requirements]: https://arcticicestudio.github.io/nord-hyper/getting-started/requirements.html
[gh-readme-config-cursor-blinking]: https://github.com/arcticicestudio/nord-hyper#cursor-blinking
[gh-readme-features]: https://github.com/arcticicestudio/nord-hyper/blob/develop/README.md#features
[gh-readme-installation]: https://github.com/arcticicestudio/nord-hyper/blob/develop/README.md#installation
[gh-index.js]: https://github.com/arcticicestudio/nord-hyper/blob/develop/index.js
[gh-license.md]: https://github.com/arcticicestudio/nord-hyper/blob/develop/LICENSE.md
[gh-styleguide-git]: https://github.com/arcticicestudio/styleguide-git
[gh-styleguide-js]: https://github.com/arcticicestudio/styleguide-javascript
[gh-wiki]: https://github.com/arcticicestudio/nord-hyper/wiki
[github-blog-code-owners]: https://github.com/blog/2392-introducing-code-owners
[github-blog-cm-tools]: https://github.com/blog/2380-new-community-tools
[github-blog-contrib-guidelines]: https://github.com/blog/1184-contributing-guidelines
[github-blog-issue-pr-templates]: https://github.com/blog/2111-issue-and-pull-request-templates
[github-help-coc]: https://help.github.com/articles/adding-a-code-of-conduct-to-your-project
[gulp.js]: https://gulpjs.com
[hyper-docs-config]: https://hyper.is/#cfg
[github-opensource-guide]: https://opensource.guide
[github-opensource-guide-coc]: https://opensource.guide/code-of-conduct
[github-opensource-guide-contrib]: https://opensource.guide/how-to-contribute
[hyper-gh-release-1.3.0]: https://github.com/zeit/hyper/releases/tag/1.3.0
[nodejs]: https://nodejs.org
[npm]: https://www.npmjs.com
[npm-hyper-statusline]: https://www.npmjs.com/package/hyper-statusline
[yarn]: https://yarnpkg.com
