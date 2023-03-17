<script lang="ts" src="./MenuBar.ts"></script>

<template>
  <header class="header-container">
    <div class="header-logo-container">
      <img id="logo" class="header-logo" :src="logo" alt="brand logo" />
      <button @click="handleMenu" class="header-burger-icon">
        <font-awesome-icon width="16px" icon="fa-bars" style="color: white" />
      </button>
    </div>

    <div class="menu-container">
      <nav class="menu-nav">
        <div
          ref="menuContainer"
          :class="{ activeMenu: toggleMenu }"
          class="menu-nav-container"
        >
          <div class="menu-item-container">
            <div class="menu-logo-container">
              <img id="logo" class="menu-logo" :src="logo" alt="" />
            </div>

            <Router-link to="/home" class="menu-item menu-item-size">
              <span class="menu-heading">HOME</span>
            </Router-link>

            <Router-link to="/statistics" class="menu-item menu-item-size">
              <span class="menu-heading">STATISTICS</span>
            </Router-link>

            <Router-link to="/teams" class="menu-item menu-item-size">
              <span class="menu-heading">TEAMS</span>
            </Router-link>
          </div>

          <div id="account-popup" class="menu-dropdown-container">
            <button
              @click="handleDropdownParent"
              class="menu-item menu-item-size justify-center sm-max:justify-start overflow-hidden z-50"
            >
              <span class="menu-heading">ACCOUNT</span>
              <figure
                v-if="dropdownParent === false"
                class="absolute bottom-0.5 right-0.5 w-2 h-2 triangle"
              ></figure>
            </button>
            <Transition name="dropdownTransition">
              <div class="menu-dropdown-content" v-if="dropdownParent">
                <div class="flex flex-col w-full">
                  <button
                    @click="handlePopup"
                    class="menu-dropdown-item justify-between"
                    to="#"
                  >
                    <div>
                      <font-awesome-icon
                        class="pr-4"
                        icon="fa-solid fa-right-from-bracket"
                      />
                      <span class="font-bold">LOGIN</span>
                    </div>
                  </button>
                </div>

                <Router-link class="menu-dropdown-item" to="/account">
                  <font-awesome-icon
                    class="pr-4 icon-sm text-white"
                    icon="fa-solid fa-user-gear"
                  />
                  <span class="font-bold">ACCOUNT</span>
                </Router-link>
                <button
                  @click="handleLogout"
                  class="menu-dropdown-item btn--danger font-bold"
                >
                  <font-awesome-icon
                    class="pl-4 rotate-180 icon-sm text-white"
                    icon="fa-solid fa-right-from-bracket"
                  />
                  LOGOUT
                </button>
              </div>
            </Transition>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <Transition id="modal-popup" name="login-modal">
    <div class="fixed bg-background modal-design" v-if="popup">
      <Login
        v-if="signin"
        @onEnterSignup="handleEnterSignup"
        @onCancelLogin="handleModal"
      />
      <Signup v-if="signup" @onCancelSignup="handleModal" />
    </div>
  </Transition>
</template>

<style>
/* HEADER START */
.dropdownTransition-leave-to,
.dropdownTransition-enter-from {
  transform: translateY(-100%);

  opacity: 0;
}

.dropdownTransition-enter-active,
.dropdownTransition-leave-active {
  transition: all 0.1s ease-in-out;
}
.header-container {
  @apply /* --------------------- */
  /* full */ px-4 mb-10 w-full shadow-sm
  /* mobile */ sm-max:px-0 sm-max:mb-0 sm-max:sticky sm-max:top-0 sm-max:z-50
  /* design */ bg-menuPrimary;
}
.header-logo-container {
  @apply /* --------------------- */
  /* mobile */ sm-max:justify-between
  /* design */ flex justify-center items-center mx-auto relative;
}
.header-logo {
  @apply /* --------------------- */
   /* mobile */ w-24 p-4 flex items-center sm:hidden;
}
.header-burger-icon {
  @apply p-4 sm:hidden;
}
/* HEADER END */
.menu-container {
  @apply /* --------------------- */
  /* mobile */ sm-max:relative;
}
.menu-nav {
  @apply /* --------------------- */
  /* full */ max-w-7xl w-full mx-auto
  /* mobile */ sm-max:absolute sm-max:bg-menuPrimary;
}
.menu-nav-container {
  @apply /* --------------------- */
  /* mobile */ sm-max:hidden sm-max:flex-col sm-max:gap-0 sm-max:items-start
  /* design */ flex justify-between items-center gap-4 relative;
}
.menu-item-container {
  @apply flex w-full sm-max:flex-col sm-max:gap-0;
}
.menu-logo-container {
  @apply flex items-center justify-center w-24 sm-max:hidden;
}
.menu-logo {
  @apply h-8;
}
.menu-item-size {
  @apply /* --------------------- */
  /* full */px-16 py-4
  /* laptop */ lg-max:px-8
  /* tablet */ md-max:px-2
  /* mobile */ sm-max:w-full;
}
.menu-item {
  @apply /* --------------------- */
  /* mobile */  sm-max:my-0
  /* design */  flex items-center bg-menuPrimary hover:bg-menuSecondary relative font-bebas text-3xl transition-all cursor-pointer;
}
.menu-heading {
  @apply /* --------------------- */
  /* full */  text-white
  /* laptop */ lg-max:text-2xl
  /* design */ text-3xl;
}
.menu-dropdown-container {
  @apply relative sm-max:w-full;
}
.menu-dropdown-content {
  @apply flex flex-col text-white items-start absolute transition-all  bg-menuPrimary w-full drop-shadow-xl;
}
.menu-dropdown-item {
  @apply /* --------------------- */
  /* full */ py-3 px-4 w-full
  /* design */ flex items-center relative bg-menuPrimary hover:bg-menuSecondary cursor-pointer transition-all;
}

.modal-shadow {
  box-shadow: 0px 0px 0px 100vw rgba(0, 0, 0, 0.486);
}

.width-pop {
  @apply max-w-4xl w-full mx-auto;
}
.modal-design {
  @apply overflow-hidden width-pop modal-shadow fixed bg-background p-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50;
}

.logo-container {
  @apply /* --------------------- */
  /* tablet */ lg-max:w-24
  /* mobile */ md-max:hidden sm-max:hidden
  /* design */ relative w-32;
}

.logo {
  @apply /* --------------------- */
  /* full */ h-40 p-4
  /* mobile */ sm-max:hidden
  /* design */ absolute -top-1 z-20 left-0 text-white;
}

.activeMenu {
  @apply flex absolute w-full;
}

.modal-design {
  @apply overflow-hidden max-w-4xl w-full mx-auto modal-shadow fixed bg-background p-8 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50;
}
.modal-container {
  @apply fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50;
}
.modal-shadow {
  box-shadow: 0px 0px 0px 100vw rgba(0, 0, 0, 0.486);
}
.signin-enter-from,
.signup-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.signin-enter-active {
  transition: all 0.1s ease-in-out;
}

.dropdownParent-animation {
  animation: dropdownParent-animation ease-in-out 150ms;
}
@keyframes dropdownParent-animation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100;
  }
}
.dropdownChild-animation {
  animation: dropdownChild-animation ease-in-out 150ms;
}
@keyframes dropdownChild-animation {
  from {
    opacity: 0%;
    height: 0rem;
  }
  70% {
    opacity: 0%;
  }
  to {
    opacity: 100%;
    height: 16rem;
  }
}
</style>
