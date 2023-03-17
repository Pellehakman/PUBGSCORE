<script src="./PlayerName" lang="ts"></script>

<template>
  <div class="flex">
    <div class="input-container w-full">
      <div class="input-icon-container">
        <!-- <font-awesome-icon
          v-if="loading"
          class="peer animate-spin icon-sm"
          icon="fa-solid fa-spinner"
        />
        <font-awesome-icon
          v-if="loadingGood"
          class="peer icon-sm text-white"
          icon="fa-solid fa-check-circle"
        />
        <font-awesome-icon
          v-if="loadingBad"
          class="peer icon-sm text-white"
          icon="fa-solid fa-exclamation-circle"
        /> -->
      </div>
      <input
        :disabled="edit"
        v-model="playerName"
        type="playerName"
        id="playerName"
        class="input-field peer"
        :class="{
          '': props.editStyle === true,
        }"
        placeholder=" "
      />
      <label for="playerName" class="input-label">PUBG Playername</label>
      <button
        @click.prevent="handlePlayerName()"
        class="input-icon bg-success-500 rounded-r-sm"
      >
        <font-awesome-icon
          v-if="loading"
          class="peer animate-spin text-white icon-md"
          icon="fa-solid fa-spinner"
        />
        <font-awesome-icon
          v-if="!loading"
          class="peer text-white icon-md"
          icon="fa-solid fa-magnifying-glass"
        />
        <!-- <font-awesome-icon
          v-if="loadingGood"
          class="peer icon-sm text-white"
          icon="fa-solid fa-check-circle"
        /> -->
      </button>
    </div>
  </div>
</template>
<style></style>
