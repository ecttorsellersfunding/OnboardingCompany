const fs = require('fs')
const prefixer = require('postcss-prefix-selector')
const postcss = require('postcss')

const css = fs.readFileSync('./dist/style.css', 'utf8')

const out = postcss().use(prefixer({
  prefix: '#single-spa-application\\:\\@sf\\/boilerplate',
})).process(css).css

fs.writeFileSync('./dist/style.css', out)
