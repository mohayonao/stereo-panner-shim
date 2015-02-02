"use strict";

var assert = require("assert");

require("../");

describe("AudioContext", function() {
  describe("createStereoPanner", function() {
    it("(): AudioNode", function() {
      var audioContext = new global.AudioContext();
      var node = audioContext.createStereoPanner();

      assert(node instanceof global.AudioNode);
      assert(node.pan instanceof global.AudioParam);
    });
  });
});

describe("OfflineAudioContext", function() {
  describe("createStereoPanner", function() {
    it("(): AudioNode", function() {
      var audioContext = new global.OfflineAudioContext(2, 44100, 44100);
      var node = audioContext.createStereoPanner();

      assert(node instanceof global.AudioNode);
      assert(node.pan instanceof global.AudioParam);
    });
  });
});
