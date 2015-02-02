"use strict";

var AudioContext = global.AudioContext || global.webkitAudioContext;
var StereoPannerNode = require("stereo-panner-node");

if (AudioContext && !AudioContext.prototype.createStereoPanner) {
  AudioContext.prototype.createStereoPanner = function() {
    return new StereoPannerNode(this);
  };
}
