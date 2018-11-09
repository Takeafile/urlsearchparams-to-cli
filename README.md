# URLSearchParams to CLI

[![Greenkeeper badge](https://badges.greenkeeper.io/Takeafile/urlsearchparams-to-cli.svg)](https://greenkeeper.io/)

Convert URL query params to a command line arguments array

This is useful for example to process URL query params using `minimist` or `unify-config`, or any other command line arguments parser.

# Install

```sh
npm install urlsearchparams-to-cli
```

# API

- *searchParams*: `URLSearchParams` instance. If it's a string, it gets parsed
  first. By default it uses the value located at `window.location.search`.
