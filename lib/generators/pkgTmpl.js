var endent = require('endent')

module.exports = endent`
  {
    "name": "boowa-blog",
    "version": "1.0.0",
    "main": "index.js",
    "scripts": {
      "start": "bankai start index.js",
      "inspect": "bankai inspect index.js",
      "build": "bankai build index.js"
    },
    "browserify": {
      "transform": [
        [
          "brfs"
        ],
        [
          "sheetify"
        ]
      ]
    },
    "sheetify": {
      "transform": [
        [
          "sheetify-sass"
        ]
      ]
    }
  }
`
