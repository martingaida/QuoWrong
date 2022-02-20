window.addEventListener('DOMContentLoaded', async (e) => {

  const res = await fetch('/api/userName/query');
  const userNames = await res.json();

  const answers = document.querySelectorAll('.username-box');

  answers.forEach(usr => {

    console.log(userNames)

    const username = userNames.data.find( ({ id }) => id == `${usr.id.split('-')[1]}`)
    
    usr.innerHTML = `${username.userName}:`;
    
  });

});