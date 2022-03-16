import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  getFirestore, doc, setDoc, getDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCP2ZGZQd0il6EyLA-vdTG4Y-gLHV4Pz9c',
  authDomain: 'quicktrans-1b800.firebaseapp.com',
  projectId: 'quicktrans-1b800',
  storageBucket: 'quicktrans-1b800.appspot.com',
  messagingSenderId: '1009287031432',
  appId: '1:1009287031432:web:348e5c5240d9270ec5cd3d',
};

initializeApp(firebaseConfig);

const ADD_ERROR = 'user/ADD_ERROR';
const ADD_USER = 'user/ADD_USER';

const auth = getAuth();
const db = getFirestore();

export const login = (payload) => async (dispatch) => {
  try {
    const resp = await signInWithEmailAndPassword(
      auth,
      payload.email,
      payload.pass,
    );

    const docRef = doc(db, 'users', resp.user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      dispatch({ type: ADD_USER, payload: docSnap.data() });
      window.location = '/dashboard';
    } else {
      dispatch({ type: ADD_ERROR, payload: 'No data for this user' });
    }
  } catch (error) {
    dispatch({ type: ADD_ERROR, payload: error.message });
  }
};

export const register = (payload) => async (dispatch) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      auth,
      payload.email,
      payload.pass,
    );

    const data = {
      email: payload.email,
      name: payload.name,
      amount: 10000,
    };

    await setDoc(doc(db, 'users', resp.user.uid), data);

    dispatch({ type: ADD_USER, payload: data });

    window.location = '/dashboard';
  } catch (error) {
    dispatch({ type: ADD_ERROR, payload: error.message });
  }
};

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ERROR:
      return { ...state, error: payload };

    case ADD_USER:
      return { user: payload };

    default:
      return state;
  }
};
