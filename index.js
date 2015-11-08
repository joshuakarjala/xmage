#!/usr/bin/env node

var cp = require('child_process')
var fs = require('fs')
var path = require('path')

console.log('should run ', __dirname)
if (!fs.existsSync(path.join(__dirname, 'bin/launcher.jar'))) {
  console.log('It appears that the xmage installer file was not downloaded correctly. Please reinstall.')
  process.exit(1)
}


var isOSX = process.platform.indexOf('darwin') > -1

if (!isOSX) {
  console.log('At the moment this installer only works on osx')
  console.log('If you think you can contribute, go to https://github.com/freeall/xmage')
  process.exit(1)
}
cp.exec('open "/System/Library/CoreServices/Jar Launcher.app" "' + __dirname + '/bin/launcher.jar"')