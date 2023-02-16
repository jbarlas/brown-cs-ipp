import { firebase_app } from "./config";
import { getDatabase, ref, set, get, child } from "firebase/database";
import {
  getAuth,
  signInAnonymously,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebase_db = getDatabase(firebase_app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

/**
 * anonymous sign in
 * @returns null
 */
export const anonSignIn = () =>
  signInAnonymously(auth)
    .then((data) => {
      console.log("signed in anonymously", data);
    })
    .catch((error) => {
      console.log(error);
    });

/**
 * sign in with google
 * @returns null
 */
export const googleSignIn = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      console.log("error signing in with google", error);
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

/**
 * sign in with email and password -- these accounts should only exist for IPP members and will be used for verification into internal tooling
 * @param {string} email
 * @param {string} password
 * @returns
 */
export const emailSignIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("sign in success", user);
    })
    .catch((error) => {
      console.log("error signing in");
      // const errorCode = error.code;
      // const errorMessage = error.message;
    });

/**
 * logs out current user
 * @returns
 */
export const logOut = () =>
  signOut(auth)
    .then(() => {
      console.log("sign out success", auth);
    })
    .catch((error) => {
      console.log("error signing out", auth);
    });

/**
 * submits app to application database
 * @param {string} id id to verify company credentials -- this id will be generated by IPP members and sent to company representative before they apply
 * @param {object} info company information object which should contain all relevant information from the partner application
 * @returns
 */
export const submitCompanyApplication = async (id, info) => {
  console.log(id, info);
  return set(ref(firebase_db, `partner-application/${id}`), {
    ...info,
    pending: true, // temporary field -- want some way to filter reviewed applications in internal tool
  });
};

/**
 * gathers list of all approved partners from /partners database
 * @returns
 */
export const getCurrentPartners = async () => {
  return get(child(ref(firebase_db), "partners"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        console.log("snapshot does not exist");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const validateApplicationCode = async (id) => {
  if (id) {
    return get(child(ref(firebase_db), `partner-application/${id}`))
      .then((snapshot) => {
        return snapshot.exists();
      })
      .catch((error) =>
        console.log("error validating application code", error)
      );
  } else {
    return false;
  }
};

/**
 * creates a user object in the /user database (this is likely not going to be useful at all)
 * @param {string} id
 */
export const createUser = (id) => {
  set(ref(firebase_db, "users/" + id), {
    id: id,
  });
};
