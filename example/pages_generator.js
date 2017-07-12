/*
 * This docs generator for GitHub Pages
 */
const fs = require('fs')
const path = require('path')
const pug = require('pug')

const TARGET_FILE = path.join(__dirname, '..', 'docs', 'index.html')

// compile template
const compiledFunction = pug.compileFile(path.join(__dirname, 'views', 'index.pug'))
const fileContent = compiledFunction()

fs.writeFile(TARGET_FILE, fileContent, (err) => {
  if(err){
    console.log('Error on html file save')
    console.log(err)
  }
})
