  // firebase.ts
  import { initializeApp } from 'firebase/app';
  import { getAuth } from 'firebase/auth';
  import { getFirestore } from 'firebase/firestore';
  import { getStorage } from 'firebase/storage'

  const firebaseConfig = {
    apiKey: 'AIzaSyCst58Ni6eyUseLPQtZoCA6oSvUO0s4lPM',
    authDomain: 'sara-ai-1413.firebaseapp.com',
    projectId: 'sara-ai-1413',
    storageBucket: 'sara-ai-1413.firebasestorage.com',
    messagingSenderId: '882303803189',
    appId: '1:882303803189:web:8a4fca16dcbfc8fe78b67c',
    measurementId: "G-RFWR90W0MZ"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  export { auth ,db, storage };
