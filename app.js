
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });



/* Customer*/
var number = document.getElementById("number")
var counter = 0
setInterval(() => {
    if(counter == 100){
        clearInterval
    }
    else{
        counter += 1
        number.innerHTML = counter + "%"
    }
   
}, 20)

/* Experience*/ 
var xp = document.getElementById("xp")
var count = 0
setInterval(() => {
    if(count == 8){
        clearInterval
    }
    else{
        count += 1
        xp.innerHTML = `${count} +`
    }
   
}, 20)

window.onscroll = () => {
  let navbar = document.getElementById('navs')
  if (window.scrollY > 460) {
      navbar.classList.add('nav-active');
  } else {
      navbar.classList.remove('nav-active');
  }
};