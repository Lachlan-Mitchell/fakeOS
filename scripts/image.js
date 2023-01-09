const thumbnailText = document.querySelectorAll('.thumbnail-image')
const thumbnails = document.querySelectorAll('.column');
const fullImage = document.querySelectorAll('.mySlides');
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');
const caption = document.querySelector('#caption')



fullImage[0].style.display = "block";
thumbnails[0].classList.add('active');
caption.innerHTML = thumbnailText[0].alt;

let currentIndex = 0;

thumbnails.forEach((thumbnail) => thumbnail.addEventListener('click' ,(event)=> {
  const targetImage = event.target.closest('img');

  if(!targetImage) return;
  fullImage[currentIndex].style.display = "none";
  thumbnails[currentIndex].classList.remove('active');

   currentIndex = parseInt(targetImage.id);
   fullImage[currentIndex].style.display = "block";
   thumbnails[currentIndex].classList.add('active');
   caption.innerHTML = thumbnailText[currentIndex].alt;
}));


prevButton.addEventListener("click", (event)=> {
  fullImage[currentIndex].style.display = "none";
  thumbnails[currentIndex].classList.remove('active');
  currentIndex = currentIndex > 0 ? currentIndex -1 : fullImage.length - 1;
  fullImage[currentIndex].style.display = "block";
  thumbnails[currentIndex].classList.add('active');
  caption.innerHTML = thumbnailText[currentIndex].alt;
});

nextButton.addEventListener("click", (event)=> {

  fullImage[currentIndex].style.display = "none";
  thumbnails[currentIndex].classList.remove('active');
  currentIndex = currentIndex < fullImage.length -1 ? currentIndex + 1 : 0;
  fullImage[currentIndex].style.display = "block";
  thumbnails[currentIndex].classList.add('active');
  caption.innerHTML = thumbnailText[currentIndex].alt;
});