import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaId77DRIesyDY4f8z9lbGfwzl0YAiOl8",
  authDomain: "user--auth-97ea5.firebaseapp.com",
  projectId: "user--auth-97ea5",
  storageBucket: "user--auth-97ea5.appspot.com",  // ✅ fixed
  messagingSenderId: "403224490050",
  appId: "1:403224490050:web:c0a4cd9826cf201d013ddb",
  measurementId: "G-7MWBKF0RZG"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});
