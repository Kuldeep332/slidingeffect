var t=gsap.timeline({
	scrollTrigger:{
		trigger:"#page2",
		scroller:"body",
		scrub:1,
		pin:true,

		markers:true,
		start:"top -1%",
		end:"top -100%"
	}
})
t.to("#page21",{
	bottom:"0"
})
t.to("#page22",{
	bottom:"-10%"
})
.to("#page23",{
	bottom:"-15%"
})