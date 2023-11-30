function User(email, password, avatarUrl = '') {
  this.email = email;
  this.password = password;
  this.avatarUrl = avatarUrl;
}

const userList = {
  listOfUsers: [],

  addUser(newUser) {
    const exists = this.listOfUsers.some(user => user.email === newUser.email);
    if (!exists) {
      this.listOfUsers.push(newUser);
      return true;
    }

    return false;
  },

  login(email, password) {
    return this.listOfUsers.some(user => user.password === password && user.email === email);
  }
};

const loginForm = document.querySelector('#loginForm');
const registerForm = document.querySelector('#registerForm');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.querySelector('#email_input').value;
  const password = document.querySelector('#pass_input').value;

  const canLogin = userList.login(email, password);
  loginForm.reset();

  if (canLogin) {
    alert('Twoje konto istnieje, pomyślnie się zalogowałeś');
  } else {
    alert('Takie konto nie istnieje, sprawdź dane');
  }
});

registerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const email = document.querySelector('#new_email_input').value;
  const password = document.querySelector('#new_pass_input').value;
  const urlAvatar = document.querySelector('#new_avatar_input').value;
  
  const newUser = new User(email, password, urlAvatar);
  
  if (userList.addUser(newUser)) {
    registerForm.reset();
    alert('Konto zostało stworzone');
  } else {
    alert('Taki email już istnieje');
  }
});
