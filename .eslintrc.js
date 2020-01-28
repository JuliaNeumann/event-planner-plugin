module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended"
  ],
  rules: {
    "vue/html-indent": [1, 4],
    "vue/html-closing-bracket-newline": [1, {
      "singleline": "never",
      "multiline": "never"
    }],
    "vue/max-attributes-per-line": [1, {
      "singleline": 1,
      "multiline": {
        "max": 1,
        "allowFirstLine": true
      }
    }],
    "comma-dangle": [1, "never"],
    "comma-spacing": [1, { "before": false, "after": true }],
    "key-spacing": [1, { "beforeColon": false, "afterColon": true }],
    "max-len": [1, { "code": 120 }],
    "no-trailing-spaces": 1,
    "quotes": [1, "double"],
    "semi": [1, "always"],
    "space-before-function-paren": [1, "never"],
    "space-in-parens": [1, "never"],
    "no-var": 1,
    "indent": [1, 4]
  },
  globals: {
    "fixture": "readonly",
    "test": "readonly",
    "wp": "readonly",
    "jQuery": "readonly"
  }
}