import {setMask, starRange, fromSouth} from '../../_common/js/common.js'

function start(){
	TweenLite.defaultEase = Power3.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})

	
	starRange(1, 13)
	TweenLite.to( ".star", 1, {opacity:1, delay:3} )

	tl.from(".ball", .9, {y:"-=470", rotation:2, ease:Back.easeOut})
	
	tl.to(".ball", .5, {rotation:-1, ease:Linear.easeNone})
	tl.to(".ball", .5, {rotation:1, ease:Linear.easeNone})
	

	tl.add("ball-up")
	tl.to(".ball", .5, {y:"-=500", ease:Power1.easeOut}, "ball-up")
	

	tl.from([".red-bar"], .5, {y:"+=300", ease:Power1.easeOut}, "ball-up")
	tl.from(".coke", .3, {opacity:0, y:"+=150", ease:Power2.easeOut}, "ball-up")
	

	
	tl.add( fromSouth("#t1a"), "+=.5" )
	
	
	tl.add( fromSouth("#t1b"), "+=.2" )
	tl.add( fromSouth("#t2a"), "+=.9" )


	tl.add("logo", "+=.5")
	
	tl.add( fromSouth("#cta"), "logo" )
	tl.from("#cta .chev", .3, {opacity:0, x:"-=8", ease:Back.easeOut}, "+=.1")
	
	

}




start()


module.exports = {};

