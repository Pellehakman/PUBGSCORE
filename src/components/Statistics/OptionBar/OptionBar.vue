<script lang="ts" src="./OptionBar"></script>

<template>
  <form class="option-bar-container">
    <select @change="onGameMode" class="option-bar">
      <option v-for="f in data.gamemode" :key="f.id" :value="f.id">
        {{ f.gamemode }}
      </option>
    </select>

    <select @change="onGamemodeType" class="option-bar">
      <option v-for="f in data.gamemodeType" :key="f.id" :value="f.id">
        {{ f.gamemodeType }}
      </option>
    </select>

    <select @change="onAlltimeType" class="option-bar">
      <option v-for="f in data.alltimeTypes" :key="f.alltimeType" :value="f.id">
        {{ f.alltimeType }}
      </option>
    </select>

    <select @change="onGametype" class="option-bar">
      <option v-for="f in data.gametype" :key="f.gametype" :value="f.id">
        {{ f.gametype }}
      </option>
    </select>

    <select @change="onSeason" class="option-bar">
      <option v-for="f in data.season" :key="f.id" :value="f.id">
        {{ f.name }}
      </option>
    </select>

    <button
      @click.prevent="handleOptionForm"
      class="btn btn-default btn--success"
    >
      UPDATE
    </button>
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
  @apply w-full flex justify-center;
}
.option-bar-container {
  @apply /* --------------------- */
  /* full */ 
  /* tablet */ 
  /* mobile */ sm-max:gap-0 sm-max:my-0 
  /* design */ flex sm-max:flex-col my-2 gap-2;
}
</style>
