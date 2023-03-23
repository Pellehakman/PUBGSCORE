<script lang="ts" src="./PlayerStats"></script>

<template>
  <div class="stats-container">
    <Player />
    <!-- <Player />
    <Player />
    <Player /> -->
  </div>
</template>

<style>
.playerTransition-leave-to,
.playerTransition-enter-from {
  transform: translateY(-100%);

  opacity: 0;
}

.playerTransition-enter-active,
.playerTransition-leave-active {
  transition: all 0.1s ease-in-out;
}
.stats-container {
  @apply /* --------------------- */
  /* full */ 
  /* tablet */ 
  /* mobile */ sm-max:gap-0 sm-max:my-0 
  /* general design */ flex h-full gap-2;
}
.open-type-container {
  @apply w-full bg-emerald-700 flex flex-col sm:hidden;
}
.type {
  @apply sm-max:hidden;
}

.amount {
  @apply font-bold;
}
.card-container {
  @apply w-full bg-white flex flex-col;
}
</style>
