import firebase from "firebase";
export default () => {
  firebase.initializeApp({
    apiKey: "AIzaSyDjaSWTf7KJjdHPbc1S0p7bjfCLObUXjN8",
    //authDomain: '### FIREBASE AUTH DOMAIN ###',
    projectId: "test-f7a33"
  });
  const db = firebase.firestore();
  return db;
};
