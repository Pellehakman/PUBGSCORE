import { getAuth } from 'firebase/auth'
import { defineComponent, ref } from 'vue'
import logo from '../../assets/logo-light.svg'

export default defineComponent({
  name: 'menu-component',
  components: {},

  setup() {
    const auth = getAuth()

    const toggleMenu = ref(false)
    const handleMenu = () => {
      toggleMenu.value = !toggleMenu.value
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth > 640) {
        toggleMenu.value = false
      }
    })

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

      logo,
      toggleMenu,
      handleMenu
    }
  }
})
