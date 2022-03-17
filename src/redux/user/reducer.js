import { initializeApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  query,
  where,
  collection,
  getDocs,
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
const SEND_MONEY = 'user/SEND_MONEY';

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
      // window.location = '/dashboard';
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
      history: [],
      friends: [],
      uid: resp.user.uid,
    };

    await setDoc(doc(db, 'users', resp.user.uid), data);

    dispatch({ type: ADD_USER, payload: data });
  } catch (error) {
    dispatch({ type: ADD_ERROR, payload: error.message });
  }
};

export const sendMoney = (payload) => async (dispatch) => {
  // update current user
  const data = {
    amount: payload.amount,
    history: payload.history,
    friends: payload.friends,
  };

  await setDoc(doc(db, 'users', payload.uid), data, { merge: true });

  dispatch({ type: SEND_MONEY, payload: data });

  // update the receiver
  let receiver;
  const docRef = collection(db, 'users');
  const q = query(docRef, where('email', '==', payload.receiver));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    receiver = doc.data();
  });

  console.log(receiver);

  if (receiver.uid) {
    receiver.amount += +payload.sentAmount;

    if (!receiver.friends.includes(payload.email)) {
      receiver.friends.push(payload.email);
    }

    receiver.history.unshift({
      amount: payload.sentAmount,
      description: payload.history[0].description,
      received: true,
      title: `Sent from (${payload.email})`,
    });

    console.log(receiver);

    await setDoc(doc(db, 'users', receiver.uid), receiver, { merge: true });
  }
};

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_ERROR:
      return { ...state, error: payload };

    case ADD_USER:
      return { user: payload };

    case SEND_MONEY:
      return { user: { ...state.user, ...payload } };

    default:
      return state;
  }
};
