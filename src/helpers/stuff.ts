import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Online',

  setup() {
    const auth = getAuth()
    console.log('ONLINE')
    function GoOnline() {
      console.log('online function')
    }

    onAuthStateChanged(auth, async (user) => {
      console.log(user)
    })

    return {}
  }
})
