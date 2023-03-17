import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  updateEmail,
  updatePassword,
  signInAnonymously,
} from "firebase/auth";
import router from "@/router";
import { nanoid } from "nanoid";
import { setDoc, doc, getFirestore, updateDoc } from "firebase/firestore";
const db = getFirestore();
const auth: any = getAuth();
class FireAccount {
  error: string | undefined;

  get Error() {
    return this.error;
  }

  async Guest(fetchPlayer: string) {
    await setDoc(doc(db, "users", auth.currentUser.uid), {
      uid: auth.currentUser.uid,
      pubgid: fetchPlayer,
      pubgname: fetchPlayer,
      teams: {},
      favourites: {},
    });
  }

  async RegisterSubmit(email: string, password: string, $apiAccount: any) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .then(async () => {
        await updateProfile(auth.currentUser, {
          displayName: $apiAccount.FetchPlayer.data[0].id,
          photoURL: $apiAccount.FetchPlayer.data[0].attributes.name,
        });
        await setDoc(doc(db, "users", auth.currentUser.uid), {
          uid: auth.currentUser.uid,
          pubgid: $apiAccount.FetchPlayer.data[0].id,
          pubgname: $apiAccount.FetchPlayer.data[0].attributes.name,
          teams: {},
          favourites: {},
        });
        router.push("/statistics");
        this.error = "";
        console.log(auth.currentUser);
        window.location.reload();
      })

      .catch((error) => {
        console.log(error);
        this.error = error;
      });
  }
  async LoginGuest() {
    const auth = getAuth();
    signInAnonymously(auth)
      .then(() => {
        router.push("/statistics");
      })
      .catch((error) => {});
  }

  async LoginSubmit(password: string, email: string) {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          this.error = "";
          router.push("/statistics");
          window.location.reload();
        }
        // return user;
      })

      .catch((error) => {
        this.error = error;
      });
  }

  async UpdateEmail(email: string) {
    if (email === auth.currentUser.email) {
      console.log("EMAIL: Nothing to update!");
    } else {
      console.log("EMAIL: Email updated!");
      await updateEmail(auth.currentUser, email)
        .then(() => {})
        .catch(async (error) => {
          this.error = await error;
        });
    }
  }

  async UpdatePlayerName($apiAccount: any) {
    if ($apiAccount.FetchPlayer === undefined) {
      console.log("PLAYERNAME: Nothing to update!");
    } else {
      console.log("PLAYERNAME: Playername updated!");
      await updateProfile(auth.currentUser, {
        displayName: await $apiAccount.FetchPlayer.data[0].id,
        photoURL: await $apiAccount.FetchPlayer.data[0].attributes.name,
      })
        .then(async () => {
          const firestore = getFirestore();
          const updatePlayerNameRef = doc(
            firestore,
            "users",
            auth.currentUser.uid
          );
          await updateDoc(updatePlayerNameRef, {
            pubgname: $apiAccount.FetchPlayer.data[0].attributes.name,
          });
        })
        .catch((error) => {});
    }
  }

  async UpdatePassword(password: string) {
    if (password.length > 0) {
      updatePassword(auth.currentUser, password)
        .then(() => {
          console.log("PASSWORD: Password updated!");
        })
        .catch((error) => {});
    } else {
      console.log("PASSWORD: Nothing to update!");
    }
  }
}

const $fireAccount = new FireAccount();
export default $fireAccount;
