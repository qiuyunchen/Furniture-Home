import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';

const config = {
    apiKey: "AIzaSyBCoITURj9AMQZOP4YdApYi-SzDE5_M1-w",
    authDomain: "furniture-shop-front.firebaseapp.com",
    databaseURL: "https://furniture-shop-front.firebaseio.com",
    projectId: "furniture-shop-front",
    storageBucket: "furniture-shop-front.appspot.com",
    messagingSenderId: "421451867938"
}

app.initializeApp(config);

export default app;