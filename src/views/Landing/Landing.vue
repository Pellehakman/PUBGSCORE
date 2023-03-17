<script lang="ts" src="./Landing.ts"></script>

<template>
  <div class="landing-container">
    <header class="landing-header">
      <div class="flex items-center justify-center">
        <img class="landing-logo fill-blue-500" :src="logo" alt="logo" />
      </div>
      <div class="header-btn-container">
        <button
          @click="handleLogin"
          :class="{ 'btn--success': loginModal === true }"
          class="btn btn-default"
        >
          <span>LOGIN</span>
        </button>
        <button
          @click="handleSignup"
          :class="[
            signupModal
              ? 'btn--primary border-2 border-transparent'
              : 'border-2 rounded-sm border-white',
          ]"
          class="btn btn-default"
        >
          <span class="break">SIGN UP</span>
        </button>
      </div>
    </header>

    <main class="modal-container">
      <div class="landing-main-container">
        <Transition class="modal" name="default-modal">
          <div v-if="firstModal">
            <GoPro />
          </div>
        </Transition>
      </div>

      <Transition class="modal" name="login-modal">
        <div v-if="loginModal">
          <Login @onCancelLogin="handleModal" />
        </div>
      </Transition>

      <Transition class="modal" name="signup-modal">
        <div v-if="signupModal">
          <Signup @onCancelSignup="handleModal" />
        </div>
      </Transition>
    </main>
  </div>
</template>

<style>
.landing-container {
  @apply flex flex-col;
}
.landing-header {
  @apply /* --------------------- */
  /* full */ p-16
  /* tablet */ lg-max:p-8 
  /* mobile */ sm-max:p-4 
  /* design */ flex justify-between;
}
.header-btn-container {
  @apply flex gap-4 justify-between items-center;
}
.landing-logo {
  @apply h-16 sm-max:h-8;
}

.modal {
  @apply /* --------------------- */
  /* full */ px-16
  /* tablet */ lg-max:px-8 
  /* mobile */ sm-max:px-4 
  /* design */ absolute;
}
.modal-container {
  /* @apply  --------------------- */
  /* full  pt-16 lg:pl-32*/
  /* tablet */
  /* mobile */
  /* design w-full justify-center flex; */
}
.landing-main-container {
  @apply /* --------------------- */
  /* full */  
  /* tablet */ 
  /* mobile */
  /* design */ max-w-7xl w-full relative transition-all;
}
.landing-hero-text {
  @apply /* --------------------- */
  /* full */ text-8xl
  /* tablet */ lg-max:text-6xl
  /* mobile */ sm-max:text-4xl 
  /* design */ font-bebas text-white transition-all cursor-pointer;
}
.landing-hero-small {
  @apply /* --------------------- */
  /* full */ text-8xl
  /* tablet */ lg-max:text-4xl
  /* mobile */ sm-max:text-3xl 
  /* design */ font-bebas text-white transition-all cursor-pointer;
}

.big-input-field {
  @apply /* full */ pt-6 pb-2 pl-2
  /* tablet */
  /* mobile */
  /* design */ flex text-sm w-full rounded-l-sm appearance-none text-white focus:outline-none focus:ring-0;
}
.big-input-label {
  @apply absolute text-base duration-150 transform -translate-y-0 peer-focus:-translate-y-0 scale-75 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:scale-75  left-2 top-0 peer-focus:top-0;
}

.default-modal-enter-from,
.default-modal-leave-to {
  transform: translate(-100%);

  opacity: 0;
}
.signup-modal-leave-to,
.signup-modal-enter-from {
  transform: translateY(-100%);
  transform: translateX(-50%);
  opacity: 0;
}
.login-modal-leave-to,
.login-modal-enter-from {
  transform: translateY(-100%);
  transform: translateX(-50%);
  opacity: 0;
}

.signup-modal-enter-active,
.signup-modal-leave-active,
.login-modal-enter-active,
.login-modal-leave-active,
.default-modal-enter-active,
.default-modal-leave-active {
  transition: all 0.1s ease-in-out;
  filter: blur(5px);
}

.landing-login {
  @apply mx-32 mt-32 flex-col justify-between gap-8 max-w-3xl;
}
.big-btn {
  @apply px-16 py-4 rounded-sm hover:scale-105 hover:backdrop-brightness-90 transition ease-in-out duration-300 hover:-translate-y-1;
}

.landing-sign {
  @apply big-btn text-white font-open font-semibold text-lg;
}

.landing-search-block {
  @apply flex;
}

.landing-search {
  @apply bg-success-500 font-bebas text-3xl px-6 text-white flex-1 flex flex-col flex-grow;
}
</style>
