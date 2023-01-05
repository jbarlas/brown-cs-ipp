import { firebase_app } from "./config";
import { getDatabase, ref, set } from "firebase/database";
import { getAuth, signInAnonymously } from "firebase/auth";

export const firebase_db = getDatabase(firebase_app);

export const auth = getAuth();

signInAnonymously(auth)
  .then((data) => {
    console.log("signed in anonymously", data);
  })
  .catch((error) => {
    console.log(error);
  });

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

export const submitCompanyApplication = (id, info) => {
    console.log(id, info)
  return set(ref(firebase_db, "companies/" + id), {
    id: id,
    approved: false,
    ...info,
  })
};

export const createUser = (id, createdAt) => {
  set(ref(firebase_db, "users/" + id), {
    id: id,
    createdAt: createdAt,
  });
};
