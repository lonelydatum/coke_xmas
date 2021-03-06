import {setMask, starRange, fromSouth} from '../../_common/js/common.js'

function start(){
	TweenLite.defaultEase = Power3.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})


	setMask("#logo_trim")

	
	
	starRange(1, 8, .1)
	TweenLite.to( ".star", 1, {opacity:1, delay:3} )
	

	tl.from(".ball", .4, {y:"-=90", rotation:2, ease:Back.easeOut})
	
	tl.to(".ball", .3, {rotation:-1, ease:Linear.easeNone})
	tl.to(".ball", .3, {rotation:1, ease:Linear.easeNone})
	tl.add("ball-up", "+=.5")
	tl.to(".ball", .3, {y:"-=90", ease:Power1.easeOut}, "ball-up")
	

	
	tl.from(".coke", .3, {opacity:0, y:"+=80", ease:Power2.easeOut}, "ball-up")
	

	
	tl.add( fromSouth("#t1a"), "+=.7" )
	
	
	tl.add( fromSouth("#t1b"), "+=0" )
	tl.add( fromSouth("#t2a"), "+=.9" )

	tl.add("redbar", "+=.2")
	tl.from([".red-bar"], .6, {x:"-=50%", ease:Power3.easeOut}, "redbar")
	tl.from(["#logo_trim"], .6, {x:"-=50%", ease:Power3.easeOut}, "redbar")
	
	tl.to("#logo_trim img", .3, {y:"-=30"}, "+=1")

	
	
	tl.add( fromSouth("#cta") )
	tl.from("#cta .chev", .3, {opacity:0, x:"-=8", ease:Back.easeOut}, "+=0")
	
	

}




start()


module.exports = {};

