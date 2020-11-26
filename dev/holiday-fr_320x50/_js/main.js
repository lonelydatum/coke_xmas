import {setMask, starRange, fromSouth} from '../../_common/js/common.js'

function start(){
	TweenLite.defaultEase = Power3.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})

	setMask("#logo")
	
	
	starRange(1, 7, .1)
	TweenLite.to( ".star", 1, {opacity:1, delay:1} )
	

	
	

	
	

	
	tl.add( fromSouth("#t1a"), "+=.4" )
	
	
	tl.add( fromSouth("#t1b"), "+=0" )
	tl.add( fromSouth("#t2a"), "+=.7" )

	tl.add("slide-red")
	tl.from([".red-bar"], .6, {x:"-=160", ease:Power3.easeOut}, "slide-red")
	tl.from(["#logo"], .6, {x:"-=160", ease:Power3.easeOut}, "slide-red")
	


	
	tl.to("#logo img", .3, {y:"-=20", ease:Power2.easeOut}, "+=.3")
	tl.add( fromSouth("#cta"), "+=.1" )
	tl.from("#cta .chev", .3, {opacity:0, x:"-=8", ease:Back.easeOut}, "+=.1")
	
	

}




start()


module.exports = {};

