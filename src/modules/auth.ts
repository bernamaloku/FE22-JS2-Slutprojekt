import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, deleteUser, signOut, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";
import { getDatabase, ref, remove } from "firebase/database";
import { firebaseConfig } from "../firebaseConfig";
import { FirebaseError } from "firebase/app";

//här initizlize:as firebase appen 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

//för att kunna registrera ny användare
export async function signUp(username: string, password: string) {
  try {
    const email = `${username}@example.com`;
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("User signed up:");
  } catch (error) {
    handleAuthError(error, "signing up");
  }
}

//funktion för att logga in en användare
export async function signIn(username: string, password: string) {
  try {
    const email = `${username}@example.com`;
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User signed in:");
  } catch (error) {
    handleAuthError(error, "signing in");
  }
}

//för att ta bort en användare
export async function deleteUserAccount(username: string, password: string) {
  const user = auth.currentUser;
  if (user) {
    try {
      const credential = EmailAuthProvider.credential(`${username}@example.com`, password);
      await reauthenticateWithCredential(user, credential);
      await deleteUser(user);
      await remove(ref(db, `users/${username}`)); // Remove user data from Realtime Database
      console.log("User and user data deleted");
    } catch (error) {
      handleAuthError(error, "deleting user");
    }
  } else {
    console.error("No user is currently signed in.");
    alert("No user is currently signed in.");
  }
}

//för att logga ut
export async function logout() {
  try {
    await signOut(auth);
    console.log("User logged out");
  } catch (error) {
    handleAuthError(error, "logging out");
  }
}

//för att kunna hantera autentiseringfel
function handleAuthError(error: unknown, action: string) {
  if (error instanceof FirebaseError) {
  } else {
    console.error(`Unexpected error ${action}:`, (error as Error).message, error);
    alert(`Unexpected error ${action}: ${(error as Error).message}`);
  }
}
