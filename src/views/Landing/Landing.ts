import GoPro from '@/components/GoPro/GoPro.vue'
import { getAuth } from 'firebase/auth'
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

import logo from '../../assets/logo-dark.svg'

export default defineComponent({
  name: 'statistics-view',
  components: { GoPro },

  setup() {
    const auth = getAuth()
    const router = useRouter()

    if (auth) {
      router.push({ path: '/statistics' })
    }

    const firstModal = ref(true)
    const loginModal = ref(false)
    const signupModal = ref(false)

    const handleLogin = () => {
      if (firstModal.value === true) {
        loginModal.value = true
        firstModal.value = false
      }
      if (signupModal.value === true) {
        loginModal.value = true
        signupModal.value = false
      }
    }

    const handleSignup = () => {
      if (firstModal.value === true) {
        firstModal.value = false
        signupModal.value = true
      }
      if (loginModal.value === true) {
        signupModal.value = true
        loginModal.value = false
      }
    }
    const handleModal = () => {
      firstModal.value = true
      signupModal.value = false
      loginModal.value = false
    }

    return {
      logo,
      handleSignup,
      handleLogin,
      firstModal,
      loginModal,
      signupModal,
      handleModal
    }
  }
})
