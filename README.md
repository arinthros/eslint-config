# @arinthros/eslint-config

A set of common configurations for JavaScript projects.

## ESLint

**.eslintrc.js**

```js
module.exports = {
  extends: ['@arinthros'],
}
```

## Prettier

**.prettierrc.js**

```js
module.exports = require('@arinthros/eslint-config/prettier')

// To add your own custom rules:
module.exports = {
  ...require('@arinthros/eslint-config/prettier'),
  // Put your own rule preferences here.
}

```
