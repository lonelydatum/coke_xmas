const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power2.easeInOut


function fromSouth(dom){
	const domImg = `${dom} img`
	const {w, h} = setMask(dom)
	const tl = new TimelineMax()
	tl.from(domImg, .3, {y:(h+5) * 1.05, ease:Power3.easeInOut})
	return tl
}

function starRange(from, to, scale=.3){
	const tl = new TimelineMax()
	for(let i=from; i<=to; i++){
		const delay = Math.random()*.6
		tl.add( star(i, scale), 0 );
	}
	return tl
}

function star(index, scale=.2){	
	console.log(scale);
	const tl = new TimelineMax({repeat:17, yoyo:true})
	tl.to(`#star${index}`, .5, {scale:`-=${scale}`, ease:Power1.easeIn})
	return tl
}

function setMask(dom){
	console.log(dom);
	const domImg = `${dom} img`
	const w = document.querySelector(domImg).offsetWidth / 2
	const h = document.querySelector(domImg).offsetHeight / 2
	TweenLite.set(dom, {width:w+20, height:h+3})	
	return {w, h}

}



export {size, setMask, starRange, fromSouth}