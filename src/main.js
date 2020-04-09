var doubleWidth = document.documentElement.clientWidth;
var doubleHeight = document.documentElement.clientHeight;
var filterStarred = document.querySelector('.filter-starred');

//
window.addEventListener('resize', reportWindowSize());
// doubleHeight.addEventListener('resize', reportWindowSize);
console.log(doubleWidth);
console.log(doubleHeight);
// filterStarred.addEventListener('click', hideFilterStarred);
//
function reportWindowSize() {
  if (doubleWidth <= 600) {
    filterStarred.classList.add('hidden');
  }
  if (doubleWidth > 600) {
    filterStarred.classList.remove('hidden');
  }
}
//
// function hideFilterStarred(event) {
//   event.target.filterStarred;
//
// }

window.onresize = reportWindowSize;
