# package-check-version
A package for a npm package checks version, comparing with local package.json's version.

## Usage

install package-check-version:
```
$ npm install -S package-check-version
```

```
const packageCheckVersion = require('package-check-version')

packageCheckVersion('plus-cli', require('package.json')).then(function(versionCompare){
  console.log(versionCompare)
})

```