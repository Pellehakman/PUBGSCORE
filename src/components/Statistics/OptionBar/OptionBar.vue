<script lang="ts" src="./OptionBar"></script>

<template>
  <form class="option-bar-container">
    <select @change="updateGamemodeOptions" v-model="gamemode" class="option-bar">
      <option value="solo-fpp">SOLO</option>
      <option value="duo-fpp">DUO</option>
      <option value="squad-fpp">SQUAD</option>
      <option value="solo">SOLO TPP</option>
      <option value="duo">DUO TPP</option>
      <option value="squad">SQUAD TPP</option>
    </select>

    <select @change="updateSeasonOptions" :disabled="isActive" v-model="seasons" class="option-bar">
      <option v-for="f in data.season" :key="f.id" :value="f.id">
        {{ f.name }}
      </option>
    </select>

    <select @change="updateAlltimeOptions" v-model="alltime" class="option-bar">
      <option value="season">SEASON</option>
      <option value="alltime">ALLTIME</option>
    </select>

    <input
      :disabled="!save"
      type="button"
      @click.prevent="handleOptionForm"
      :class="[
        save ? 'btn--success border-2 border-transparent ' : 'border-2 rounded-sm border-white'
      ]"
      class="btn btn-default w-1/2 sm-max:border-0 sm-max:w-full"
      value="UPDATE"
    />
  </form>
</template>

<style>
.option-bar {
  @apply w-full flex justify-center font-bold;
}
.option-bar-container {
  @apply /* --------------------- */
  /* full */ 
  /* tablet */ 
  /* mobile */ sm-max:gap-0 sm-max:my-0 
  /* design */ flex sm-max:flex-col my-2 gap-2;
}

.NAME {
  @apply /* --------------------- */
  /*  full  */ px-16 py-3
  /* laptop */ lg-max:px-8
  /* tablet */ md-max:px-2 
  /* mobile */ sm-max:w-full
  /* design */;
}
</style>
