(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function start() {
	TweenLite.defaultEase = Power3.easeOut;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	setMask("#logo_trim");
	starRange(1, 12);
	TweenLite.to(".star", 1, { opacity: 1, delay: 3 });

	tl.from(".ball", .7, { y: "-=250", rotation: 3, ease: Back.easeOut });

	tl.to(".ball", .4, { rotation: -3, ease: Linear.easeNone });
	tl.to(".ball", .4, { rotation: 2, ease: Linear.easeNone });
	// tl.to(".ball", .4, {rotation:-1, ease:Linear.easeNone})

	tl.add("ball-up");
	tl.to(".ball", .6, { y: "-=250", ease: Power2.easeOut }, "ball-up");

	tl.from([".red-bar", ".logo", "#logo_trim"], .6, { y: "+=130", ease: Power2.easeOut }, "ball-up");
	tl.from(".coke", .3, { opacity: 0, y: "+=150", ease: Power2.easeOut }, "ball-up");

	tl.add(fromSouth("#t1a"), "+=.5");

	tl.add(fromSouth("#t1b"), "+=.2");
	tl.add(fromSouth("#t2a"), "+=.9");

	tl.add("logo", "+=.5");
	tl.to("#logo_trim img", .4, { y: "-=40" }, "logo");
	tl.add(fromSouth("#cta"), "logo");
	tl.from("#cta .cta", .3, { opacity: 0, x: "-=8" }, "logo");
}

function starRange(from, to) {
	var tl = new TimelineMax();
	for (var i = from; i <= to; i++) {
		var delay = Math.random() * .6;
		tl.add(star(i), 0);
	}
	return tl;
}

function star(index) {

	var tl = new TimelineMax({ repeat: 21, yoyo: true });
	tl.to("#star" + index, .5, { scale: "-=.15", ease: Power2.easeIn });
	return tl;
}

function setMask(dom) {
	var domImg = dom + " img";
	var w = document.querySelector(domImg).offsetWidth / 2;
	var h = document.querySelector(domImg).offsetHeight / 2;
	// console.log(w, h);

	TweenLite.set(dom, { width: w + 20, height: h + 3 });

	return { w: w, h: h };
}

function fromSouth(dom) {
	var domImg = dom + " img";

	var _setMask = setMask(dom);

	var w = _setMask.w;
	var h = _setMask.h;

	var tl = new TimelineMax();
	tl.from(domImg, .3, { y: (h + 5) * 1.05, ease: Power3.easeInOut });
	return tl;
}

function fromWest(dom) {
	var domImg = dom + " img";

	var _setMask2 = setMask(dom);

	var w = _setMask2.w;
	var h = _setMask2.h;

	var tl = new TimelineMax();
	tl.from(domImg, .5, { x: -w * 1.05 });
	return tl;
}

start();

module.exports = {};

},{}]},{},[1])


//# sourceMappingURL=main.js.map