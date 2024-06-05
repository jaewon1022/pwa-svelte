import { browser } from '$app/environment';
import { initializeApp, type FirebaseApp } from 'firebase/app';

export let app: FirebaseApp;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_VIREBASE_MEASUREMENT_ID
};

export const initializeFirebase = () => {
  if (!browser) {
    throw new Error('initializeFirebase must be called in the browser');
  }

  if (!app) {
    app = initializeApp(firebaseConfig);
  }
};
