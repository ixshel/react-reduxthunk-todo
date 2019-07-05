import * as fb from 'firebase';

const config = {
    apiKey: "AIzaSyBZv65YYejzalqSzB7T-CMfdhVahc2FCis",
    authDomain: "tribute-8bd0c.firebaseapp.com",
    databaseURL: "https://tribute-8bd0c.firebaseio.com",
    projectId: "tribute-8bd0c",
    storageBucket: "tribute-8bd0c.appspot.com",
    messagingSenderId: "880743004760",
    appId: "1:880743004760:web:b081e8a01e0f76ba"
};

fb.initializeApp(config);
const dbRef = fb.database().ref();
export const todosRef = dbRef.child('todos');