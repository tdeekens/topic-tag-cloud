# Topic Tag Cloud

[![Build Status](https://travis-ci.org/tdeekens/topic-tag-cloud.svg?branch=master)](https://travis-ci.org/tdeekens/topic-tag-cloud) ♦️
[![Dependency Status](https://david-dm.org/tdeekens/topic-tag-cloud.svg?style=flat)](https://david-dm.org/tdeekens/topic-tag-cloud) ♦️
[![devDependency Status](https://david-dm.org/tdeekens/topic-tag-cloud/dev-status.svg)](https://david-dm.org/tdeekens/topic-tag-cloud#info=devDependencies) ♦

> A demo application rendering a tag cloud from an fixture.

## Prerequisites

1. Node.js in v4.x.x
- npm@3 (should also work with npm@2)

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
