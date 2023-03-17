import { initializeApp } from "firebase/app"; // no compat for new SDK
import { getDatabase } from "firebase/database";

export const firebaseConfig = {
  apiKey: "AIzaSyDbiGzhf4YcUimrNGBZ23c_jE-cCKWHxKk",
  authDomain: "pbgscore-1-vue.firebaseapp.com",
  projectId: "pbgscore-1-vue",
  storageBucket: "pbgscore-1-vue.appspot.com",
  messagingSenderId: "710233780144",
  appId: "1:710233780144:web:8b0d5953ef5354d303f075",
  measurementId: "G-TFQ08ZX9QP",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
