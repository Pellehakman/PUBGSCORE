<script src="./Search" lang="ts"></script>

<template>
  <div>
    <h1 class="heading-bebas-xl">
      IS YOUR SQUAD <br />
      READY TO GO PRO?
    </h1>
    <button @click="reset">RESET</button>

    <p class="text-m font-open">
      In this applicatiodn you can build your team and compare it against the top teams.<br />
      Is your squad ready to go pro? You can also see detailed general statistics of every season
      you played.
    </p>
    <div class="flex mt-6">
      <PlayerName @onError="handleError" class="flex w-full rounded-r-none" />
    </div>
    <div class="form-warning">
      <span class="text-white">{{ pubgError }}</span>
    </div>

    <!-- <button class="flex justify-end text-white pt-8" @click="handleGuest">
      continue without signing in
    </button> -->
  </div>
</template>
<style></style>
