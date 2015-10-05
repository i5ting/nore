#!/usr/bin/env node
var fs = require('fs')
  , path = require("path")
  , Inflector = require('inflected')
  , file_path = __dirname
  , current_path = process.cwd()
  , argv = process.argv;
  
argv.shift();

var lang = Inflector.camelize(argv[1])

// opt simple parser
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
      var item = get_name(p);
      if(item){
        all += item + ',';
      }
    })
    
    console.log(all);
  });
}

function get_name(p){
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