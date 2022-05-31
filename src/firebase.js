
import firebase from 'firebase/compat/app';
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: "AIzaSyC7RZYbKhCIdh7uctrXQSZgdohfGcLnm9I",
    authDomain: "iotplant-bd728.firebaseapp.com",
    databaseURL: "https://iotplant-bd728-default-rtdb.firebaseio.com",
    projectId: "iotplant-bd728",
    storageBucket: "iotplant-bd728.appspot.com",
    messagingSenderId: "723848289162",
    appId: "1:723848289162:web:c1db762358fb7318e40673",
    measurementId: "G-WNQHTZPS9K"
};

firebase.initializeApp(firebaseConfig);

export default firebase.database();