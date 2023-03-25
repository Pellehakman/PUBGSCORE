<script lang="ts" src="./OptionBar"></script>

<template>
  <form class="option-bar-container">
    <!-- <select @change="needSave" v-model="optionForm.gamemode" class="option-bar">
      <option v-for="f in data.gamemode" :key="f.id" :value="f.id">
        {{ f.gamemode }}
      </option>
    </select> -->

    <select @change="updateGamemodeOptions" v-model="gamemode" class="option-bar">
      <option :disabled="gametype === 'ranked'" value="solo-fpp">SOLO</option>
      <option :disabled="gametype === 'ranked'" value="duo-fpp">DUO</option>
      <option value="squad-fpp">SQUAD</option>
      <option :disabled="gametype === 'ranked'" value="solo">SOLO TPP</option>
      <option :disabled="gametype === 'ranked'" value="duo">DUO TPP</option>
      <option :disabled="gametype === 'ranked'" value="squad">SQUAD TPP</option>
    </select>

    <select @change="updateGametypeOptions" v-model="gametype" class="option-bar">
      <option value="normal">Normal</option>
      <option value="ranked">Ranked</option>
    </select>

    <select @change="updateSeasonOptions" :disabled="isActive" v-model="seasons" class="option-bar">
      <option v-for="f in data.season" :key="f.id" :value="f.id">
        {{ f.name }}
      </option>
    </select>

    <select @change="updateAlltimeOptions" class="option-bar">
      <option value="season">SEASON</option>
      <option value="alltime">ALLTIME</option>
    </select>

    <button @click.prevent="handleOptionForm" class="btn btn-default">UPDATE</button>
  </form>
</template>
<!-- <div v-for="(date, index) in calenderData" :key="`dag_${index}`">
  <BookingDate
    :todaysDate="dateValue"
    :date="date.date"
    @onDateUpdate="BookingDayData"
    @onDateObj="DateObj"
  />
</div> -->

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
</style>
