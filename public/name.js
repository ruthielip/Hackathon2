const welcomeDiv = document.getElementById('welcome-user');
console.log(welcomeDiv)

const params = new URLSearchParams(window.location.search);
for (const [key, value] of params.entries()) {
  let username = document.createElement('h2');
  username.innerText = `Hi ${value}!`;
  username.classList.add('username-display')
  welcomeDiv.appendChild(username);
}
