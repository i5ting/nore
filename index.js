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


for(var i in argv){
  var _argv = argv[i];
  if(_argv == 'ls'  || _argv == 'list'){
    return list();
  }
  
  if(_argv == '-h'  || _argv == '--help'){
    return help();
  }
}

var lang_path = path.join(__dirname, "/data/gitignore/"+ lang + ".gitignore");

fs.readFile(lang_path, {encoding:'utf8',flag:'r'}, function (err, data) {
  if (err) throw err;
  console.log(data);
});


function list(){
  var ignores_dir = __dirname + "/data/gitignore/";

  fs.readdir(ignores_dir, function (err, resolvedPath) {
    if (err) throw err;
    
    var all = "";
    resolvedPath.forEach(function(p){
      var item = one(p);
      if(item){
        all += item + ',';
      }
      
    })
    
    console.log(all);
  });
}

function one(p){
  path = p.split('.gitignore')
  if(path.length == 1){
    return ;
  }
  return path[0];
}

function help(){
  var name = require('./package.json').name
  var desc = require('./package.json').description
  console.log(name + ": " +desc);
  console.log();
  console.log("Usages:");
  [ 
    "nore java or nore java > .gitignore"
    ,"nore ls or nore list"
    ,"nore -h or nore --help"
  ].forEach(function(i){
    console.log('    ' + i + '');
  })
}