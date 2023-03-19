import type { userModel } from '@/models/models'
import { getAuth } from 'firebase/auth'
import { collection, doc, getDoc, getDocs, getFirestore, query } from 'firebase/firestore'

class FireUser {
  user: any | undefined

  get User() {
    return this.user
  }

  async getUser() {
    const auth = getAuth()

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

const $fireUser = new FireUser()
export default $fireUser
