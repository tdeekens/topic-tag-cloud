# Topic Tag Cloud

[![Build Status](https://travis-ci.org/tdeekens/topic-tag-cloud.svg?branch=master)](https://travis-ci.org/tdeekens/topic-tag-cloud) ♦️
[![Dependency Status](https://david-dm.org/tdeekens/topic-tag-cloud.svg?style=flat)](https://david-dm.org/tdeekens/topic-tag-cloud) ♦️
[![devDependency Status](https://david-dm.org/tdeekens/topic-tag-cloud/dev-status.svg)](https://david-dm.org/tdeekens/topic-tag-cloud#info=devDependencies) ♦

> A demo application rendering a tag cloud from an fixture.

## Prerequisites

1. Node.js in v4.x.x
- npm@3 (should also work with npm@2)
- Grunt-cli (`$ npm i grunt-cli`)

## TL;DR

```bash
npm install
grunt serve
open http://localhost:8080
```

## Tooling & Architecture

1. The project uses `react@0.14.0`
  - ...no assumptions are made regarding e.g. flux, redux as too little goes on and the project's focus is elsewhere (see below)
  - ...also no routing at this stage
- Building is done using `webpack` development using a `webpack-dev-server`
- The provided `topics.json` is served over a mock backend with HapiJS
  - Running on `localhost:3000` with routes `/topics` and `/topic/{id}`
- CSS is build using `postcss` within a Grunt build chain
- Code styling is enforced using `eslint` which also runs on TravisCI

## Intensions & Ideals

- Modular and unit tested JavaScript
  - ...up to a function level (e.g. `utils.js`, `sentiments.js` and `ranges.js`)
  - ...component based UI with dump/smart parts (e.g. `ui/components/tag.js`)
- Documented code using JSDoc
- CI integration via TravisCI
  - Running tests on multiple browsers see `test/karma.conf.js`
- Componentized CSS using BEM (SuitCSS)
  - ...no css-modules for now :smile:
- Split up Grunt build chain
  - ...one task per file with global configuration (`grunt/options`)
- Play around with semantic commit messages to maybe get to like 'em

## Installation

`npm i` will install all needed dependencies.

## Testing

Local tests can be run via `grunt karma:local` whenever in development mode run
`grunt karma:dev` to keep karma running and watching.

To run tests against BrowserStack from your local machine ensure having the env-vars
`BS_USERNAME` and `BS_ACCESSKEY` and then run `grunt karma:bs_desktop_ci`.
TravisCI will run the same set of tests.

## Development

Running `grunt serve` will launch two servers one `Hapi.js` server on `localhost:3000`
serving `/topics` and `/topic/id`. The second server will run on `localhost:8080`
and is a `webpack-dev-server` in hot-module mode.

Navigating your browser to `localhost:8080` will show the tag cloud.

Watch tasks are on changing any part of the mock backend and stylesheets the webpack-dev-server
takes care of the rest where possible.
