import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// import { getAnalytics } from "firebase/analytics"; // можно убрать, если не используешь аналитику

const firebaseConfig = {
  apiKey: "AIzaSyC-vZhOV-N4i1aTdWuaPIQHv_YvZafcG5g",
  authDomain: "dagoffice-4692b.firebaseapp.com",
  databaseURL: "https://dagoffice-4692b-default-rtdb.firebaseio.com",
  projectId: "dagoffice-4692b",
  storageBucket: "dagoffice-4692b.appspot.com",
  messagingSenderId: "1014662561875",
  appId: "1:1014662561875:web:0ee177372a8882b06b86a6",
  measurementId: "G-9JEZH613CF"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const rtdb = getDatabase(app);
// export const analytics = getAnalytics(app); // включай только если нужен
export default app;