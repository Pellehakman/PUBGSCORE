import { getAuth, signInAnonymously } from 'firebase/auth'
import type { playerModel } from '@/models/models'
import { setDoc, doc, getFirestore, updateDoc, getDoc } from 'firebase/firestore'

const db = getFirestore()
const auth: any = getAuth()
const firestore = getFirestore()

class FireAccount {
  error: string | undefined
  user: any | undefined

  get User() {
    return this.user
  }
  get Error() {
    return this.error
  }

  //this function is triggered by GetPlayer from getPlayer.ts
  async LoginGuest(fetchPlayer: playerModel) {
    signInAnonymously(auth)
      .then(() => {
        if (sessionStorage.getItem(auth.currentUser.uid)) {
          this.UpdateGuest(fetchPlayer)
        } else {
          this.Guest(fetchPlayer)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  //this function is triggered above
  async Guest(fetchPlayer: playerModel) {
    console.log('SET firebase')
    await setDoc(doc(db, 'users', auth.currentUser.uid), {
      uid: auth.currentUser.uid,
      pubgid: fetchPlayer.id,
      pubgname: fetchPlayer.attributes.name
    })
    const user = {
      uid: auth.currentUser.uid,
      pubgid: fetchPlayer.id,
      pubgname: fetchPlayer.attributes.name
    }
    sessionStorage.setItem(auth.currentUser.uid, JSON.stringify(user))
  }

  async UpdateGuest(fetchPlayer: playerModel) {
    console.log('UPDATE firebase')
    const updatePlayerNameRef = doc(firestore, 'users', auth.currentUser.uid)
    await updateDoc(updatePlayerNameRef, {
      uid: auth.currentUser.uid,
      pubgid: fetchPlayer.id,
      pubgname: fetchPlayer.attributes.name
    })
    const user = {
      uid: auth.currentUser.uid,
      pubgid: fetchPlayer.id,
      pubgname: fetchPlayer.attributes.name
    }
    sessionStorage.setItem(auth.currentUser.uid, JSON.stringify(user))
  }

  async getUser() {
    console.log('hora')
    const firestore = getFirestore()
    const docRef = doc(firestore, 'users', `${auth?.currentUser?.uid}`)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      this.user = docSnap.data()
      console.log(docSnap)
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!')
    }
  }
}

const $fireAccount = new FireAccount()
export default $fireAccount
