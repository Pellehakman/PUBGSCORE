import { getAuth } from 'firebase/auth'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'menu-component',

  setup() {
    const auth = getAuth()
    document.addEventListener('mousedown', function (event: any) {
      if (!event.target.closest('#modal-popup')) {
        popup.value = false
      }
    })

    document.addEventListener('mousedown', function (event: any) {
      if (!event.target.closest('#account-popup')) {
        dropdownParent.value = false
      }
    })

    const toggleMenu = ref(false)
    const handleMenu = () => {
      toggleMenu.value = !toggleMenu.value
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth > 640) {
        toggleMenu.value = false
      }
    })

    const signin = ref(false)
    const signup = ref(false)

    const handleModal = () => {
      popup.value = false
      signin.value = false
      signup.value = false
    }

    const popup = ref(false)
    const handlePopup = () => {
      popup.value = !popup.value
      dropdownParent.value = false
      signin.value = true
      signup.value = false
    }

    const handleEnterSignup = () => {
      signin.value = false
      signup.value = true
    }
    const dropdownParent = ref(false)
    const handleDropdownParent = () => {
      dropdownParent.value = !dropdownParent.value
    }
    const handleLogout = async () => {
      await auth.signOut()
      location.reload()
      window.sessionStorage.clear()
    }
    return {
      handleLogout,
      handleDropdownParent,
      dropdownParent,
      signin,
      signup,
      handlePopup,
      handleModal,
      popup,
      handleEnterSignup,
      logo,
      toggleMenu,
      handleMenu
    }
  }
})
