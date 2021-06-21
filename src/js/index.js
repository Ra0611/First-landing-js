
// $(document).ready(function () {
// 	$('.slider').slick({
// 		slidesToShow: 1,
// 		slidesToScroll: 1,
// 		prevArrow: "<div class='slider__arrow'>Пред.</div>",
// 		nextArrow: "<div class='slider__arrow slider__arrow--right'>След.</div>"
// 	});
// });

const posterFront = document.querySelector('.slider__item--front')
const posterBack = document.querySelector('.slider__item--back')
const slideChange = document.querySelector('.slider__item')
function posterClick(slideFront, slide) {
	slideFront.style.zIndex = 5
	slideFront.style.top = 0
	slideFront.style.left = 0
	slide.style.zIndex = 1
	slide.style.top = '20px'
	slide.style.left = '20px'
	slideFront.style.transform = 'rotateZ(360deg)'
	slide.style.transform = 'rotateZ(-360deg)'
	// slide.style.transition = 'all 1s linear'
}
const toggle = document.getElementById('simbolToggle')
const untoggle = document.getElementById('simbolUntoggle')
function toggleSimbol(tog, untog) {
	tog.style.display = 'block'
	untog.style.display = 'none'
	console.log('????????????')

}
toggleSimbol(untoggle, toggle)
toggleSimbol(toggle, untoggle)