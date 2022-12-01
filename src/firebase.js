// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from '@firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBI9LL8-g69lQrsivdF2f5sPH0_VJXWOEM',
  authDomain: 'secret-santa-vandellens.firebaseapp.com',
  projectId: 'secret-santa-vandellens',
  storageBucket: 'secret-santa-vandellens.appspot.com',
  messagingSenderId: '312803481031',
  appId: '1:312803481031:web:b220f9c462e10f033335e2',
  measurementId: 'G-FPNLKP53VX',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
