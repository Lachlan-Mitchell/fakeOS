const displayTime = () => {
  let dateTime = new Date();
  let hrs = dateTime.getHours()
  let mins = dateTime.getMinutes()
  let session = document.getElementById('session')

  if(hrs >=12) {
    session.innerHTML = 'PM';
    
  } else {
    session.innerHTML = 'AM';
  }

  if(hrs > 12){
    hrs -= 12;
  }
  
  if(hrs === 0){
    hrs += 12;
  }

  if(hrs < 10){
   hrs = '0' + hrs;
  }

  if(mins < 10) {
    mins = '0' + mins;
  }
  
  document.querySelector("#hours").innerHTML = hrs;
  document.querySelector("#minutes").innerHTML = mins;
}
window.onload = displayTime;
setInterval(displayTime, 1000);