const userForm = document.querySelector('#user-form');
const formStory = document.querySelector('#form-story');
const formPopup = document.querySelector('#form-story-popup')
const closeFormPopup = document.querySelector('#form-close')
const story = document.querySelector('#story');
const storyClose = document.querySelector('#story-close')

const handleOpenStory = () => {
  story.classList.add("open-popup");
} 
const handleCloseStory = () => {
  story.classList.remove("open-popup");
}

const handleOpenForm = () => {
  userForm.classList.add("open-popup");
}
const handleCloseForm = () => {
  userForm.classList.remove("open-popup");
}
formPopup.addEventListener("click", handleOpenForm);
closeFormPopup.addEventListener("click", handleCloseForm);


formStory.addEventListener('submit', event => {
  event.preventDefault()
  const formData = {};
  formData.firstName = document.querySelector('#firstName').value;
  formData.lastName = document.querySelector('#lastName').value;
  formData.animal = document.querySelector('#animal').value;
  formData.exclamation = document.querySelector('#exclamation').value;
  formData.adverb = document.querySelector('#adverb').value;
  formData.transport = document.querySelector('#transport').value;
  formData.adjective = document.querySelector('#adjective').value;
  formData.number = document.querySelector('#number').value;
  formData.firstName = document.querySelector('#firstName').value;
  formData.firstName = document.querySelector('#firstName').value;
  const story = `Hello my story go here`;
  document.querySelector('#story-container').innerHTML = story;
  handleOpenStory();
});

storyClose.addEventListener('clcik', handleCloseStory());
