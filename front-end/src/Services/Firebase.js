import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import user from "../Providers/AuthProvider";
require("dotenv").config();

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };

const firebaseConfig = {
	apiKey: "AIzaSyB6SAU-czJ1F_ChWqENXiHpIjKycwEaZcs",
	authDomain: "chef-finder-f2c1f.firebaseapp.com",
	projectId: "chef-finder-f2c1f",
	storageBucket: "chef-finder-f2c1f.appspot.com",
	messagingSenderId: "549257926747",
	appId: "1:549257926747:web:b132feedc2c98f9b37877e",
	measurementId: "G-T9RMFFGKNN",
};

// const history = useHistory();

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = async () => {
	try {
		await auth.signInWithPopup(googleProvider);
	} catch (error) {
		return error;
	}
};

export const signOut = async () => {
	try {
		await auth.signOut();
	} catch (error) {
		return error;
	}
};
