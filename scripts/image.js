let slides = document.getElementsByClassName('mySlides'); 
let thumbnail = document.querySelectorAll(".thumbnail-image");
let captionText = document.querySelector("#caption");
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')


const showSlides = (n) => {
  if(n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for(let i = 0; i <slides.length; i++){
    slides[i].style.display ="none"
  }
  for(let i =0; i < thumbnail.length; i++){
    thumbnail[i].className = thumbnail[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  thumbnail[slideIndex-1].className += " active";
  captionText.innerHTML = thumbnail[slideIndex -1].alt;
}
let slideIndex = 1;
showSlides(slideIndex);

//next/rpev control
const plusSlides = (n) => {
  showSlides(slideIndex +=n)
};

//thumbnail image controls

const currentSlide =(n) => {
  showSlides(slideIndex = n)
};

// need to re write like all of the functions lol
prev.addEventListener('click', plusSlides)
next.addEventListener('click', plusSlides)

thumbnail.forEach((small) => small.addEventListener('click', currentSlide));