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
        <div class="menu-nav-container">
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
        </div>
      </nav>
    </div>
  </header>
</template>

<style>
/* HEADER START */

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
</style>
