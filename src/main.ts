import { signUp, signIn, deleteUserAccount, logout } from './modules/auth';
import { createProfile, addStatusUpdate, getProfile, getAllProfiles } from './modules/profile';

const appDiv = document.getElementById('app') as HTMLDivElement;

let currentUsername: string | null = null;

//detta gör så att den första sidan som kommer upp alternativ mellan log in och sign up.
function renderInitialScreen() {
  if (!appDiv) return;

  appDiv.innerHTML = `
    <h1>Welcome to the Social Media App</h1>
    <button id="showLoginButton">Login</button>
    <button id="showSignUpButton">Sign Up</button>
  `;

  const showLoginButton = document.getElementById('showLoginButton') as HTMLButtonElement;
  const showSignUpButton = document.getElementById('showSignUpButton') as HTMLButtonElement;

  showLoginButton.onclick = () => {
    renderLogin();
  };

  showSignUpButton.onclick = () => {
    renderSignUp();
  };
}

function renderLogin() {
  if (!appDiv) return;

  //sätter upp en HTML för inloggnings sidan
  appDiv.innerHTML = `
    <h1>Login</h1>
    <input type="text" id="username" placeholder="Username">
    <input type="password" id="password" placeholder="Password">
    <button id="loginButton">Login</button>
    <button id="backButton">Back</button>
  `;

  const loginButton = document.getElementById('loginButton') as HTMLButtonElement;
  const backButton = document.getElementById('backButton') as HTMLButtonElement;

  loginButton.onclick = async () => {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
    await signIn(username, password);
    currentUsername = username;
    renderProfile(username);
  };

  backButton.onclick = () => {
    renderInitialScreen();
  };
}

function renderSignUp() {
  if (!appDiv) return;
//här sätts det upp för sign up
  appDiv.innerHTML = `
    <h1>Sign Up</h1>
    <h3>Select a character</h3>
    <div class="character-selection">
      <input type="radio" id="cat" name="character" value="https://img.icons8.com/emoji/96/cat-emoji.png" checked>
      <label for="cat"><img src="https://img.icons8.com/emoji/96/cat-emoji.png" alt="cat-emoji"></label>
      <input type="radio" id="dog" name="character" value="https://img.icons8.com/emoji/96/dog-emoji.png">
      <label for="dog"><img src="https://img.icons8.com/emoji/96/dog-emoji.png" alt="dog-emoji"></label>
      <input type="radio" id="goat" name="character" value="https://img.icons8.com/emoji/96/goat-emoji.png">
      <label for="goat"><img src="https://img.icons8.com/emoji/96/goat-emoji.png" alt="goat-emoji"></label>
    </div>
    <input type="text" id="username" placeholder="Username">
    <input type="password" id="password" placeholder="Password">
    <button id="createAccountButton">Create Account</button>
    <button id="backButton">Back</button>
  `;

  const createAccountButton = document.getElementById('createAccountButton') as HTMLButtonElement;
  const backButton = document.getElementById('backButton') as HTMLButtonElement;

  createAccountButton.onclick = async () => {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const character = (document.querySelector('input[name="character"]:checked') as HTMLInputElement).value;
    if (password.length < 6) {
      alert("Password must be at least 6 characters long");
      return;
    }
    await signUp(username, password);
    await createProfile(username, character);
    currentUsername = username;
    renderProfile(username);
  };

  backButton.onclick = () => {
    renderInitialScreen();
  };
}

async function renderProfile(username: string) {
  if (!appDiv) return;

  const profile = await getProfile(username);
  if (!profile) {
    alert("Profile not found");
    renderLogin();
    return;
  }

  const isOwner = currentUsername === username;
  const statusUpdates = profile.statusUpdates || [];

  appDiv.innerHTML = `
    <h1>${profile.username}'s Profile</h1>
    <img src="${profile.image}" alt="Profile Image" width="100">
    <div>
      <h2>Status Updates</h2>
      <ul id="statusUpdates">
        ${statusUpdates.map((status: string) => `<li>${status}</li>`).join('')}
      </ul>
      ${isOwner ? `
      <input type="text" id="newStatus" placeholder="New Status">
      <button id="addStatusButton">Add Status</button>
      <button id="deleteAccountButton">Delete Account</button>
      <button id="logoutButton">Logout</button>
      ` : ''}
    </div>
    <button id="backToUserListButton">Back to User List</button>
  `;

  if (isOwner) {
    const addStatusButton = document.getElementById('addStatusButton') as HTMLButtonElement;
    const deleteAccountButton = document.getElementById('deleteAccountButton') as HTMLButtonElement;
    const logoutButton = document.getElementById('logoutButton') as HTMLButtonElement;

    addStatusButton.onclick = async () => {
      const newStatus = (document.getElementById('newStatus') as HTMLInputElement).value;
      await addStatusUpdate(username, newStatus);
      renderProfile(username);
    };

    deleteAccountButton.onclick = async () => {
      const password = prompt("Please enter your password to confirm deletion:");
      if (password) {
        await deleteUserAccount(username, password);
        currentUsername = null;
        renderLogin();
      }
    };

    logoutButton.onclick = async () => {
      await logout();
      currentUsername = null;
      renderLogin();
    };
  }

  const backToUserListButton = document.getElementById('backToUserListButton') as HTMLButtonElement;
  backToUserListButton.onclick = () => {
    renderUserList();
  };
}

async function renderUserList() {
  if (!appDiv) return;

  const profiles = await getAllProfiles();
  const profileEntries = Object.entries(profiles);

  appDiv.innerHTML = `
    <h1>User List</h1>
    <ul id="userList">
      ${profileEntries.map(([username, profile]) => `
        <li>
          <a href="#" data-username="${username}">${username}</a>
        </li>
      `).join('')}
    </ul>
  `;

  document.querySelectorAll('#userList a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const username = (event.target as HTMLElement).getAttribute('data-username');
      if (username) {
        renderProfile(username);
      }
    });
  });
}

renderInitialScreen();
