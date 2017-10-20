module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "root": true,
    "extends": "standard",
    "parser": "babel-eslint",
    "plugins": [
        "html",
        "vue"
    ],
    "globals": {
        "wx": true,
        "_hmt": true
    },
    "rules": {
        "arrow-parens": 0,
        "indent": ["error", 4, {
            "SwitchCase": 1
        }],
        "eol-last": 0,
        "semi": ["error", "always"],
        "space-before-function-paren": 0,
        "no-useless-escape": 0,
        "prefer-promise-reject-errors": 0,
        "no-multiple-empty-lines": [0, {
            "max": 100
        }],
    }
}
