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
storyClose.addEventListener("click", handleCloseStory);

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
  formData.adjectiveTwo = document.querySelector('#adjective-two').value;
  formData.number = document.querySelector('#number').value;
  formData.location = document.querySelector('#location').value;
  formData.movie = document.querySelector('#movie').value;
  formData.noun = document.querySelector('#noun').value;

  let storySelection = Math.floor((Math.random() * 3) + 1);
  let storyArray = [1, 2, 3]
  if(storyArray.length === 0){
    storyArray = [1,2,3];
  }
 // close but doesnt quite work -- infinite loop? // need to check if this fixes it // works, need to check if it actually works when u play it
  while (!storyArray.includes(storySelection)) {
     storySelection = Math.floor((Math.random() * 3) + 1);
     console.log('it didnt work yet')
  }
 console.log('we found a matach');

  if(storySelection === 1 && storyArray.includes(1)) {
    let storyContent = `<strong>${formData.firstName}</strong> <strong>${formData.lastName}</strong> was walking through the <storng>${formData.location}</strong> when they saw a wild <strong>${formData.animal}</strong> chasing a <strong>${formData.adjective}</strong> <strong>${formData.noun}</strong>. Without hesitation, <strong>${formData.firstName}</strong> grabbed their <strong>${formData.transport}</strong> and chased after the <strong>${formData.animal}</strong>.

  As they rode through the <storng>${formData.location}</strong>, <strong>${formData.firstName}</strong> remembered the <strong>${formData.movie}</strong> movie they had seen the night before and knew exactly what to do. They rode <strong>${formData.adverb}</strong> towards the <strong>${formData.adjectiveTwo}</strong> <strong>${formData.animal}</strong> and yelled out a <strong>${formData.exclamation}</strong> just as they had seen in <strong>${formData.movie}</strong>.
  
  To their surprise, the <strong>${formData.animal}</strong> stopped in its tracks and ran off into the distance. <strong>${formData.firstName}</strong> breathed a sigh of relief and drove their <strong>${formData.transport}</strong> back home, feeling like a hero. They couldn't wait to tell their friends about their adventure and the <strong>${formData.number}</strong> points they earned on their hero ranking.`;
  document.querySelector('#story-container').innerHTML = storyContent;    
  handleOpenStory();
  handleCloseForm();
  storyArray.shift();

  } else if (storySelection === 2 && storyArray.includes(2)) {
    let storyContent = `<strong>${formData.firstName}</strong> <strong>${formData.lastName}</strong> had always been a hopeless romantic, always searching for the perfect partner. But one day, while <strong>${formData.adverb}</strong> walking through the <strong>${formData.location}</strong>, they stumbled upon a <strong>${formData.adjective}</strong> <strong>${formData.noun}</strong> and fell head over heels in love.

    The <strong>${formData.noun}</strong> was unlike anyone <strong>${formData.firstName}</strong> had ever met before - they were kind, <strong>${formData.number}</strong>, and had a great sense of humor. <strong>${formData.firstName}</strong> couldn't believe their luck and knew they had to find a way to win the <strong>${formData.noun}'s</strong> heart.
    
    They took every opportunity to be near the <strong>${formData.noun}</strong> and show them how much they cared. They even wrote them a <strong>${formData.adjectiveTwo}</strong> love letter and asked them to be their partner.
    
    To <strong>${formData.firstName}'s</strong> surprise, the <strong>${formData.noun}</strong> said yes and they lived happily ever after. But there was just one problem - the <strong>${formData.noun}</strong> was actually <strong>${formData.firstName}'s</strong> own reflection in the <strong>${formData.transport}</strong> they had been using to get around the <strong>${formData.location}</strong>.
    
    Despite the strange circumstances, <strong>${formData.firstName}</strong> knew that they had finally found their true love and couldn't wait to spend the rest of their lives with their <strong>${formData.exclamation}</strong>-worthy reflection.  `
    document.querySelector('#story-container').innerHTML = storyContent;    
    handleOpenStory();
    handleCloseForm();
    if(storyArray.length === 3){
      storyArray.splice(1, 1);
    } else if (!storyArray.includes(3)){
      storyArray.pop()
    }else {
      storyArray.shift()
    }

  } else if(storySelection === 3 && storyArray.includes(3)) {
    let storyContent = `<strong>${formData.firstName}</strong> <strong>${formData.lastName}</strong> had always dreamed of attending the high-stakes poker tournament in <strong>${formData.location}</strong>, and they were finally going to make their dream a reality. As they boarded their <strong>${formData.transport}</strong> and headed towards the tournament, they couldn't help but feel like they were in a <strong>${formData.movie}</strong> movie.

    Upon arrival, they were greeted by a <strong>${formData.adjective}</strong> <strong>${formData.animal}</strong> who led them to the tournament room. The room was filled with <strong>${formData.adjectiveTwo}</strong> players, all eager to win the <strong>${formData.number}</strong> dollar prize.
    
    As the game began, <strong>${formData.firstName}</strong> could feel their heart racing. They played their cards <strong>${formData.adverb}</strong> and managed to hold their own against their opponents, but as the night wore on, the stakes only got higher.
    
    Eventually, <strong>${formData.firstName}</strong> found themselves down to their last <strong>${formData.noun}</strong>. They knew they had to make a bold move if they wanted to win. With a deep breath, they placed all their <strong>${formData.noun}'s</strong> on the table and revealed their <strong>${formData.adjective}</strong> hand.
    
    To their surprise, their gamble paid off and they emerged victorious, winning the <strong>${formData.number}</strong> dollar prize and cementing their place in poker history as the winner of the most tense game in the world.`
    document.querySelector('#story-container').innerHTML = storyContent;    
    handleOpenStory();
    handleCloseForm();
    storyArray.pop();
  }
  
  document.querySelector('#story-container').innerHTML = storyContent;
  handleOpenStory();
  handleCloseForm();
});


