# package-check-version
A package for a npm package checks version, comparing with local package.json's version.

## Usage

**install package-check-version:**
```
$ npm install -S package-check-version
```

**usgae:**
```
const packageCheckVersion = require('package-check-version')

packageCheckVersion(packageName, packageConfig).then(function(compareValue){
  console.log(compareValue)
})
```

**params:**
- packageName: package'name, such as 'plus-cli';
- packageConfig: local package's config file, such as `require('package.json')`
- compareValue: 

| npm | local | compareValue |
|:----:|:----:|:----:|
| 1.1.0 | 1.2.0 | -1 |
| 1.1.0 | 1.1.0 | 0  |
| 1.2.0 | 1.1.0 | 1  |