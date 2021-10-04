# @arinthros/eslint-config

A set of common configurations for JavaScript projects.

## ESLint

**.eslintrc.js**

```js
module.exports = {
  extends: ['@arinthros/common/eslint'],
}
```

## Prettier

**.prettierrc.js**

```js
module.exports = require('@arinthros/common/prettier')

// To add your own custom rules:
module.exports = {
  ...require('@arinthros/common/prettier'),
  // Put your own rule preferences here.
}

```