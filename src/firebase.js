import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBOqcuK8J36JAJkyeb9ak56YLwfWMxeRkU",
  authDomain: "dropmart-21e08.firebaseapp.com",
  projectId: "dropmart-21e08",
  storageBucket: "dropmart-21e08.appspot.com",
  messagingSenderId: "852965090320",
  appId: "1:852965090320:web:3ff02230273fc3bc8e5695",
  measurementId: "G-MT1SWKZ906"
};

const app = initializeApp(firebaseConfig);

const firebaseDb = getFirestore(app)
const analytics = getAnalytics(app);

export default firebaseDb;