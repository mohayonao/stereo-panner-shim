# StereoPannerShim
[![Build Status](http://img.shields.io/travis/mohayonao/stereo-panner-shim.svg?style=flat-square)](https://travis-ci.org/mohayonao/stereo-panner-shim)
[![NPM Version](http://img.shields.io/npm/v/stereo-panner-shim.svg?style=flat-square)](https://www.npmjs.org/package/stereo-panner-shim)
[![Bower](http://img.shields.io/bower/v/stereo-panner-shim.svg?style=flat-square)](http://bower.io/search/?q=stereo-panner-shim)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

> StereoPanner compatibility shim for legacy Web Audio API

http://webaudio.github.io/web-audio-api/#the-stereopannernode-interface

## Native API supports
|                      | Support |
| -------------------- |:-------:|
| Google Chrome 41     | :o:     |
| Firefox 36           | :x:     |
| Safari 8             | :x:     |
| Opera 28             | :o:     |
| iOS 8                | :x:     |

## Installation

npm:

```
npm install stereo-panner-shim
```

bower:

```
bower install stereo-panner-shim
```

downloads:

- [stereo-panner-shim.js](https://raw.githubusercontent.com/mohayonao/stereo-panner-shim/master/build/stereo-panner-shim.js)
- [stereo-panner-shim.min.js](https://raw.githubusercontent.com/mohayonao/stereo-panner-shim/master/build/stereo-panner-shim.min.js)

## API
### AudioContext
#### Instance Methods
- `createStereoPanner(): AudioNode as StereoPannerNode`

## Example
http://mohayonao.github.io/stereo-panner-shim/

## Dependencies
[![Dependency Status](http://img.shields.io/david/mohayonao/stereo-panner-shim.svg?style=flat-square)](https://david-dm.org/mohayonao/stereo-panner-shim)

- [mohayonao/stereo-panner-node](https://github.com/mohayonao/stereo-panner-node)
  - StereoPannerNode for legacy Web Audio API

## License
MIT
