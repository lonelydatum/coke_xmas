(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power2.easeInOut;

function fromSouth(dom) {
	var domImg = dom + ' img';

	var _setMask = setMask(dom);

	var w = _setMask.w;
	var h = _setMask.h;

	var tl = new TimelineMax();
	tl.from(domImg, .3, { y: (h + 5) * 1.05, ease: Power3.easeInOut });
	return tl;
}

function starRange(from, to) {
	var scale = arguments.length <= 2 || arguments[2] === undefined ? .3 : arguments[2];

	var tl = new TimelineMax();
	for (var i = from; i <= to; i++) {
		var delay = Math.random() * .6;
		tl.add(star(i, scale), 0);
	}
	return tl;
}

function star(index) {
	var scale = arguments.length <= 1 || arguments[1] === undefined ? .2 : arguments[1];

	console.log(scale);
	var tl = new TimelineMax({ repeat: 17, yoyo: true });
	tl.to('#star' + index, .5, { scale: '-=' + scale, ease: Power1.easeIn });
	return tl;
}

function setMask(dom) {
	console.log(dom);
	var domImg = dom + ' img';
	var w = document.querySelector(domImg).offsetWidth / 2;
	var h = document.querySelector(domImg).offsetHeight / 2;
	TweenLite.set(dom, { width: w + 20, height: h + 3 });
	return { w: w, h: h };
}

exports.size = size;
exports.setMask = setMask;
exports.starRange = starRange;
exports.fromSouth = fromSouth;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

function start() {
	TweenLite.defaultEase = Power3.easeOut;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	(0, _commonJsCommonJs.setMask)("#logo_trim");
	(0, _commonJsCommonJs.starRange)(1, 12, .1);
	TweenLite.to(".star", 1, { opacity: 1, delay: 3 });

	tl.from(".ball", .6, { y: "-=250", rotation: 4, ease: Back.easeOut });

	tl.to(".ball", .5, { rotation: -2, ease: Linear.easeNone });
	tl.to(".ball", .5, { rotation: 1, ease: Linear.easeNone });

	tl.add("ball-up");
	tl.to(".ball", .5, { y: "-=250", ease: Power1.easeOut }, "ball-up");

	tl.from([".red-bar", ".logo", "#logo_trim"], .5, { y: "+=130", ease: Power1.easeOut }, "ball-up");
	tl.from(".coke", .3, { opacity: 0, y: "+=150", ease: Power2.easeOut }, "ball-up");

	tl.add((0, _commonJsCommonJs.fromSouth)("#t1a"), "+=.5");

	tl.add((0, _commonJsCommonJs.fromSouth)("#t1b"), "+=.2");
	tl.add((0, _commonJsCommonJs.fromSouth)("#t2a"), "+=.9");

	tl.add("logo", "+=.5");
	tl.to("#logo_trim img", .4, { y: "-=40" }, "logo");
	tl.add((0, _commonJsCommonJs.fromSouth)("#cta"), "logo");
	tl.from("#cta .chev", .3, { opacity: 0, x: "-=8", ease: Back.easeOut }, "+=.1");
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
