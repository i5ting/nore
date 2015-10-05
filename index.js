#!/usr/bin/env node
var fs = require('fs')
var path = require("path");
var Inflector = require('inflected');

var argv = process.argv;
argv.shift();

var file_path = __dirname;
var current_path = process.cwd();

var home_dir = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;


var lang = Inflector.camelize(argv[1])
// console.log(lang);

var lang_path = path.join(__dirname, "/data/gitignore/"+ lang + ".gitignore");

fs.readFile(lang_path, {encoding:'utf8',flag:'r'}, function (err, data) {
  if (err) throw err;
  console.log(data);
});
