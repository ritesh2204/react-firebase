import firebase from "firebase";
export default () => {
  firebase.initializeApp({
    apiKey: "yourapikey",
    //authDomain: '### FIREBASE AUTH DOMAIN ###',
    projectId: "yourprojectid"
  });
  const db = firebase.firestore();
  return db;
};
