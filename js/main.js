
// Script to change background color header

$(window).on("scroll", function() {
  if($(window).scrollTop() > 50) {
      $("#cabecalho").addClass("bgON");
  } else {
      //remove the background property so it comes transparent again (defined in your css)
     $("#cabecalho").removeClass("bgON");
  }
});

// AOS Animate 

AOS.init({
  duration : 1000, // duration of the animation
  once: true       // execute only once
});

// Menu Mobile

const btn_mobile = document.querySelectorAll('.btn-mobile');
const nav = document.querySelector('#nav')

btn_mobile.forEach(btn => {
    btn.addEventListener('click', function() {
        nav.classList.toggle('active')
    })
})