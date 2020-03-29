module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "keyword-spacing": [
      "error"
    ],
    "space-before-function-paren": [
      "error",
      "always"
    ],
    "space-before-blocks": [
      "error",
      "always"
    ],
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "no-console": [
      "error"
    ],
    "no-var": [
      "error"
    ],
    "prefer-const": [
      "error"
    ],
    "eol-last": [
      "error"
    ],
    "comma-dangle": [
      "error", {
        "arrays": "never",
        "objects": "always",
        "imports": "never",
        "exports": "never",
        "functions": "never"
      }
    ],
    "camelcase": [
      "error", {ignoreDestructuring: true, properties: "never"}
    ]
  }
}
