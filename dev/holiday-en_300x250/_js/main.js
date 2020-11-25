function start(){
	TweenLite.defaultEase = Power3.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})

	setMask("#logo_trim")
	starRange(1, 12)
	TweenLite.to( ".star", 1, {opacity:1, delay:3} )

	tl.from(".ball", .7, {y:"-=250", rotation:3, ease:Back.easeOut})
	
	tl.to(".ball", .4, {rotation:-3, ease:Linear.easeNone})
	tl.to(".ball", .4, {rotation:2, ease:Linear.easeNone})
	// tl.to(".ball", .4, {rotation:-1, ease:Linear.easeNone})

	tl.add("ball-up")
	tl.to(".ball", .6, {y:"-=250", ease:Power2.easeOut}, "ball-up")
	

	tl.from([".red-bar", ".logo", "#logo_trim"], .6, {y:"+=130", ease:Power2.easeOut}, "ball-up")
	tl.from(".coke", .3, {opacity:0, y:"+=150", ease:Power2.easeOut}, "ball-up")
	

	
	tl.add( fromSouth("#t1a"), "+=.5" )
	
	
	tl.add( fromSouth("#t1b"), "+=.2" )
	tl.add( fromSouth("#t2a"), "+=.9" )


	tl.add("logo", "+=.5")
	tl.to( "#logo_trim img", .4, {y:"-=40"}, "logo" )
	tl.add( fromSouth("#cta"), "logo" )
	tl.from("#cta .cta", .3, {opacity:0, x:"-=8"}, "logo")
	
	

}

function starRange(from, to){
	const tl = new TimelineMax()
	for(let i=from; i<=to; i++){
		const delay = Math.random()*.6
		tl.add( star(i), 0 );
	}
	return tl
}

function star(index){
	
	const tl = new TimelineMax({repeat:21, yoyo:true})
	tl.to(`#star${index}`, .5, {scale:"-=.15", ease:Power2.easeIn})
	return tl
}

function setMask(dom){
	const domImg = `${dom} img`
	const w = document.querySelector(domImg).offsetWidth / 2
	const h = document.querySelector(domImg).offsetHeight / 2
	// console.log(w, h);
	
	TweenLite.set(dom, {width:w+20, height:h+3})
	
	return {w, h}


}

function fromSouth(dom){
	const domImg = `${dom} img`
	const {w, h} = setMask(dom)
	const tl = new TimelineMax()
	tl.from(domImg, .3, {y:(h+5) * 1.05, ease:Power3.easeInOut})
	return tl
}

function fromWest(dom){
	const domImg = `${dom} img`
	const {w, h} = setMask(dom)
	const tl = new TimelineMax()
	tl.from(domImg, .5, {x:-w * 1.05})
	return tl
}

start()


module.exports = {};

