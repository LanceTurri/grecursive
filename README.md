# grecursive

> Run Git commands recursively!

## Install

```
$ npm install --global grecursive
```

## Usage

```
$ grecursive --help

  Usage
    $ grecursive [input]

  Options
    --with-output  Lorem ipsum  [Default: false]

  Examples
    $ grecursive pull origin main
    => 17 git directories found
    => Running `git pull origin main`...

    $ grecursive pull origin main --with-output
    => 17 git directories found
    => Running `git pull origin main`...
    => `${directoryName} output:`
```
