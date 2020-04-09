var menu = document.querySelector('.menu')
var mq_medium = window.matchMedia('(max-width: 860px)')
var mq_small = window.matchMedia('(max-width: 600px)')

window.addEventListener("resize", adaptLayout)

function adaptLayout(){
  if (mq_small.matches) {
    adaptSmallLayout();
  } else if (mq_medium.matches) {
    adaptMediumLayout();
  }
}

// add function to the hamburger button
// display hidden filter star Ideas
// 1. add addEventListener to querySelector for 'menu'
// 2. click event on hamburger btn should display the filter star idea section
// 3. it should also display x icon and hide hamburger button
// 4. the main body contents should fade/contrast or become opaque (pg.254 in css book)
// 5. when we click on the x the filter star idea section should hide
// 6. after the idea section is hidden the hamburger btn should come back to the display
