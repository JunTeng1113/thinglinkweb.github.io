// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { useMergeState } from 'react-hooks-lib'
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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();
export default function Database(props) {
    
    var ref = db.ref('/flower/control');
    ref.on('value', (snapshot) => {
        const data = snapshot.val();
        const { LED1, LED2, FAN1, FAN2, FAN3 } = data;
        return Object.entries({'LED1': LED1, 'LED2': LED2, 'FAN1': FAN1, 'FAN2': FAN2, 'FAN3': FAN3});
    });
}