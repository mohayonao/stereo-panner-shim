# StereoPannerShim
[![Build Status](http://img.shields.io/travis/mohayonao/stereo-panner-shim.svg?style=flat-square)](https://travis-ci.org/mohayonao/stereo-panner-shim)
[![NPM Version](http://img.shields.io/npm/v/stereo-panner-shim.svg?style=flat-square)](https://www.npmjs.org/package/node-pico)
[![Bower](https://img.shields.io/bower/v/stereo-panner-shim.svg?style=flat-square)](https://github.com/mohayonao/stereo-panner-shim)
[![License](http://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](http://mohayonao.mit-license.org/)

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

## Example

```html
<script src="/path/to/stereo-panner-shim.js"></script>

```
```javascript
var audioContext = new AudioContext();

var media = audioContext.createMediaElementSource(audioElement);
var position = audioContext.createOscillator();
var panner = audioContext.createStereoPanner(); // <-- NEW!!

position.frequency.value = 0.05;

media.connect(panner);
position.connect(panner.pan);

panner.connect(audioContext.destination);
```

## License
MIT
