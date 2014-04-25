# `gulpt` @ [![Jaguard OSS 100%](http://img.shields.io/badge/Jaguard_OSS-100%-red.svg)](http://oss.jaguard.com)

> [gulp.js](http://gulpjs.com/) CLI wrapper that use [time-require](https://github.com/jaguard/time-require) to measure & report all the `require()` calls from your gulpfile.js. Simply use it instead of `gulp` CLI to measure & speed up your `gulpfile.js` build `require()` calls.

## Project status
- NPM version: [![NPM version](https://badge.fury.io/js/gulpt.svg)](https://www.npmjs.org/package/gulpt)
- NPM downloads: [![NPM downloads](http://img.shields.io/npm/dm/gulpt.svg)](https://www.npmjs.org/package/gulpt)
- GitHub release: [![GitHub Release](http://img.shields.io/github/release/jaguard/gulpt.svg)](https://github.com/jaguard/gulpt)
- Dependencies: [![Dependencies status](https://david-dm.org/jaguard/gulpt/status.svg?theme=shields.io)](https://david-dm.org/jaguard/time-require#info=dependencies)

## Install

Globally install with [npm](https://npmjs.org/package/gulpt)
```
npm install -g gulpt
```

## Usage

Now that `gulpt` is available on PATH, invoke it as you're using `gulp`. Additional parameters could be passed to [time-require](https://github.com/jaguard/time-require) (ex: `--sorted`, `--verbose`)
```
gulpt build --sorted
```

1. Default usage (non-verbose) showing required modules in loaded order, above 1% treshold
```
gulpt -T
```
![default](doc/gulpt_default.png)

2. Verbose (all) & sorted usage showing all required modules in sorted order
```
gulpt -T --verbose --sorted
```
![verbose-sorted](doc/gulpt_verbose_sorted.png)

## License

[MIT](https://github.com/jaguard/gulpt/raw/master/LICENSE) &copy; [Jaguard OSS](http://oss.jaguard.com)

## Changelog

- v0.1.2 (2014.04.25)
	+ Fix https://github.com/jaguard/gulpt/issues/1
- v0.1.1 (2014.04.25)
	+ Add screenshoots
- v0.1.0 (2014.04.20)
	+ Published `gulpt` module to [npm](https://www.npmjs.org/package/gulpt)
	+ Initial release
