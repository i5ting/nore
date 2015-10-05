# Nore

a node copy with https://github.com/karan/joe

:running: A .gitignore magician in your command line 

![](http://i.imgur.com/y8g506n.png?1)

## Nore


A `.gitignore` magician in your command line. Nore generates `.gitignore` files from the command line for you.

![](http://i.imgur.com/ghmJLUP.gif)

## Features

- Written in nodejs
- Easy to [install](https://github.com/i5ting/nore#installation)
- Stupidly [easy to use](https://github.com/i5ting/nore#usage)
- Supports all Github-supported [`.gitignore` files](https://github.com/karan/joe#list-all-available-files)
- Works on Mac, Linux and Windows
- Supports other version control systems (`.hgignore`)


## Install

    [sudo]npm install -g nore

## Usages

### Basic usage

```
$ nore java
```

### Overwrite existing .gitignore file

```
$ nore java > .gitignore  
```

### Append to existing .gitignore file

```
$ nore java >> .gitignore  
```

### Multiple languages

```
$ nore java node osx > .gitignore    # saves a new .gitignore file for multiple languages
```

### List all available files

```
$ nore ls    # OR `nore list`
```

with grep

```
$ nore ls|grep Swif
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## 版本历史

- v1.1.0 doc
- v1.0.0 初始化版本cli

## 欢迎fork和反馈

- write by `i5ting` shiren1118@126.com

如有建议或意见，请在issue提问或邮件

## License

this repo is released under the [MIT
License](http://www.opensource.org/licenses/MIT).
