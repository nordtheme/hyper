> Please make sure to complete the [requirement][requirements] steps first in order to build the project!

Run `npm install` from within the project root to bootstrap the project and install all dependencies.

Continuous integration builds are running at [Travis CI][travis-ci] and [Circle CI][circle-ci].

## Documentations

This documentation can be build by runnning

```sh
npm run docs:build
```

from within the project root to bootstrap the build toolchain and install all dependencies.

The output will be placed in the `build/docs` directory.

To start the local hot reload server with browser live reload, using the default port `4000`, run

```sh
npm run docs:dev
```

[requirements]: ../getting-started/requirements.md

[circle-ci]: https://circleci.com/gh/arcticicestudio/nord-hyper
[nodejs]: https://nodejs.org/en/download/current
[travis-ci]: https://travis-ci.org/arcticicestudio/nord-hyper
