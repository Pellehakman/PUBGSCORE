<script lang="ts" src="./SeasonStats"></script>

<template>
  <section class="bg-red-400">
    <header class="heading-styling">
      <button @click="toPinia">PIUNIAAA</button>
      <h2 class="heading-bebas-sm w-full">{{ playerName }}</h2>
      {{ seasonStats }}
      <div class="flex items-center justify-center w-6">
        <font-awesome-icon
          @click="handleUpdate"
          :class="{
            'animate-spin': loading
          }"
          class="icon-sm text-white"
          icon="fa-solid fa-rotate-right"
        />
      </div>
    </header>
    <div class="p-2">
      <h3>SEASON 18</h3>
      <ul class="flex flex-col">
        <li class="flex justify-between">
          <span>Kills</span><span class="font-bold"> {{ seasonData?.kills }}</span>
        </li>
        <li class="flex justify-between">
          <span>Assists</span><span class="font-bold"> {{ seasonData?.assists }}</span>
        </li>
        <li class="flex justify-between">
          <span>Rouns played</span><span class="font-bold"> {{ seasonData?.roundsPlayed }}</span>
        </li>
        <li class="flex justify-between">
          <span>Wins</span><span class="font-bold"> {{ seasonData?.wins }}</span>
        </li>
        <li class="flex justify-between">
          <span>Losses</span><span class="font-bold"> {{ seasonData?.losses }}</span>
        </li>
        <li class="flex justify-between">
          <span>Damage</span><span class="font-bold"> {{ seasonData?.damageDealt }}</span>
        </li>
      </ul>
    </div>
  </section>
</template>
