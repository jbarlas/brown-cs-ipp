import { firebase_app } from "./config";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, signInAnonymously, signOut } from "firebase/auth";

export const firebase_db = getDatabase(firebase_app);

const auth = getAuth();

// await signOut(auth)
//   .then(() => {
//     console.log("sign out success");
//   })
//   .catch((error) => {
//     // An error happened.
//     console.log(error);
//   });

export const signInAnon = async () => {
  return signInAnonymously(auth)
    .then((data) => {
      return data.user;
    })
    .catch((error) => {
      console.log(error);
      return null;
    });
};

export const createCompany = (id, name, email) => {
  set(ref(firebase_db, "companies/" + id), {
    id: id,
    name: name,
    email: email,
  });
};

export const createUser = (id, createdAt) => {
  set(ref(firebase_db, "users/" + id), {
    id: id,
    createdAt: createdAt,
  });
};
