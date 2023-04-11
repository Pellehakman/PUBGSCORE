<script lang="ts" src="./Player"></script>

<template>
  <article class="sm:hidden">
    <figure class="h-12 flex justify-center items-center bg-yellow-500 font-bold">
      <span class="text-white text-">STATISTICS</span>
    </figure>
    <div v-if="players.$state.player2" class="flex w-32 flex-col py-4">
      <span class="flex justify-between px-4">
        <p class="mobiletype">Wins</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="mobiletype">Losses</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="mobiletype">Kills</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="mobiletype">dBNOs</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="mobiletype">Assists</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="mobiletype">Suicides</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="mobiletype">Team Kills</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="mobiletype">Most Kills</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="mobiletype">Heals</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="mobiletype">Revives</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="mobiletype">Boosts</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="mobiletype">Matches</p>
      </span>
    </div>
  </article>
  <article class="card-container overflow-hidden">
    <div class="relative z-50">
      <div id="playerDropdown1" @click="handlePlayerDropdown(1)" class="player-card p1">
        <figure class="player-card-fig">
          <span class="text-white md-max:hidden">1</span>
        </figure>
        <span class="font-bold text-white text-sm px-2 mr-auto">{{
          players.$state.player1?.name || 'SEARCH FOR PLAYER'
        }}</span>

        <div class="flex justify-center items-center pr-4 h-full">
          <font-awesome-icon
            class="icon-pen transition-all"
            :class="{
              '-rotate-180 icon-pen': dropdown1
            }"
            icon="fa-solid fa-chevron-down"
          />
        </div>
      </div>

      <Transition class="absolute sm-max:left-0 sm-max:fixed z-30 w-full" name="playerTransition">
        <div class="bg-stone-100 p-2 shadow-lg" v-if="dropdown1">
          <div id="playerDropdown1" class="input-container">
            <input
              v-model="playerSearch"
              :autofocus="true"
              id="player"
              type="text"
              name="player"
              class="input-field peer"
              placeholder=" "
            />

            <label for="player" class="input-label">PLAYER NAME</label>
            <button class="input-icon-sm z-40">
              <font-awesome-icon
                @click="getPlayer"
                class="peer icon-sm bg-white"
                icon="fa-solid fa-magnifying-glass"
              />
            </button>
          </div>
        </div>
      </Transition>
    </div>
    <div v-if="players.$state.player1" class="flex flex-col py-4">
      <span class="flex justify-between px-4">
        <p class="type">Wins</p>
        <p class="font-bold">{{ displayPlayer?.p1?.wins }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Losses</p>
        <p class="font-bold">{{ displayPlayer?.p1?.losses }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Kills</p>
        <p class="font-bold">{{ displayPlayer?.p1?.kills }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">dBNOs</p>
        <p class="font-bold">{{ displayPlayer?.p1?.dBNOs }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Assists</p>
        <p class="font-bold">{{ displayPlayer?.p1?.assists }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Suicides</p>
        <p class="font-bold">{{ displayPlayer?.p1?.suicides }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Team Kills</p>
        <p class="font-bold">{{ displayPlayer?.p1?.teamKills }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Most Kills</p>
        <p class="font-bold">{{ displayPlayer?.p1?.roundMostKills }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Heals</p>
        <p class="font-bold">{{ displayPlayer?.p1?.heals }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Revives</p>
        <p class="font-bold">{{ displayPlayer?.p1?.revives }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Boosts</p>
        <p class="font-bold">{{ displayPlayer?.p1?.boosts }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Matches</p>
        <p class="font-bold">{{ displayPlayer?.p1?.roundsPlayed }}</p>
      </span>
    </div>
  </article>

  <article class="card-container overflow-hidden">
    <div class="relative z-50">
      <div id="playerDropdown2" @click="handlePlayerDropdown(2)" class="player-card p2">
        <figure class="player-card-fig">
          <span class="text-white md-max:hidden">2</span>
        </figure>
        <span class="font-bold text-white text-sm px-2 mr-auto">{{
          players.$state.player2?.name || 'SEARCH FOR PLAYER'
        }}</span>

        <div class="flex justify-center items-center pr-4 h-full">
          <font-awesome-icon
            class="icon-pen transition-all"
            :class="{
              '-rotate-180 icon-pen': dropdown2
            }"
            icon="fa-solid fa-chevron-down"
          />
        </div>
      </div>

      <Transition class="absolute sm-max:left-0 sm-max:fixed z-30 w-full" name="playerTransition">
        <div class="bg-stone-100 p-2 shadow-lg" v-if="dropdown2">
          <div id="playerDropdown2" class="input-container">
            <input
              v-model="playerSearch"
              :autofocus="true"
              id="player"
              type="text"
              name="player"
              class="input-field peer"
              placeholder=" "
            />

            <label for="player" class="input-label">PLAYER NAME</label>
            <button class="input-icon-sm z-40">
              <font-awesome-icon
                @click="getPlayer2"
                class="peer icon-sm bg-white"
                icon="fa-solid fa-magnifying-glass"
              />
            </button>
          </div>
        </div>
      </Transition>
    </div>
    <div v-if="players.$state.player2" class="flex flex-col py-4">
      <span class="flex justify-between px-4">
        <p class="type">Wins</p>
        <p class="font-bold">{{ displayPlayer?.p2?.wins }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Losses</p>
        <p class="font-bold">{{ displayPlayer?.p2?.losses }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Kills</p>
        <p class="font-bold">{{ displayPlayer?.p2?.kills }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">dBNOs</p>
        <p class="font-bold">{{ displayPlayer?.p2?.dBNOs }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Assists</p>
        <p class="font-bold">{{ displayPlayer?.p2?.assists }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Suicides</p>
        <p class="font-bold">{{ displayPlayer?.p2?.suicides }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Team Kills</p>
        <p class="font-bold">{{ displayPlayer?.p2?.teamKills }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Most Kills</p>
        <p class="font-bold">{{ displayPlayer?.p2?.roundMostKills }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Heals</p>
        <p class="font-bold">{{ displayPlayer?.p2?.heals }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Revives</p>
        <p class="font-bold">{{ displayPlayer?.p2?.revives }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Boosts</p>
        <p class="font-bold">{{ displayPlayer?.p2?.boosts }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Matches</p>
        <p class="font-bold">{{ displayPlayer?.p2?.roundsPlayed }}</p>
      </span>
    </div>
  </article>

  <article class="card-container overflow-hidden">
    <div class="relative z-50">
      <div id="playerDropdown3" @click="handlePlayerDropdown(3)" class="player-card p3">
        <figure class="player-card-fig">
          <span class="text-white md-max:hidden">3</span>
        </figure>
        <span class="font-bold text-white text-sm px-2 mr-auto">{{
          players.$state.player3?.name || 'SEARCH FOR PLAYER'
        }}</span>

        <div class="flex justify-center items-center pr-4 h-full">
          <font-awesome-icon
            class="icon-pen transition-all"
            :class="{
              '-rotate-180 icon-pen': dropdown3
            }"
            icon="fa-solid fa-chevron-down"
          />
        </div>
      </div>

      <Transition class="absolute sm-max:left-0 sm-max:fixed z-30 w-full" name="playerTransition">
        <div class="bg-stone-100 p-2 shadow-lg" v-if="dropdown3">
          <div id="playerDropdown3" class="input-container">
            <input
              v-model="playerSearch"
              :autofocus="true"
              id="player"
              type="text"
              name="player"
              class="input-field peer"
              placeholder=" "
            />

            <label for="player" class="input-label">PLAYER NAME</label>
            <button class="input-icon-sm z-40">
              <font-awesome-icon
                @click="getPlayer3"
                class="peer icon-sm bg-white"
                icon="fa-solid fa-magnifying-glass"
              />
            </button>
          </div>
        </div>
      </Transition>
    </div>
    <div v-if="players.$state.player3" class="flex flex-col py-4">
      <span class="flex justify-between px-4">
        <p class="type">Wins</p>
        <p class="font-bold">{{ displayPlayer?.p3?.wins }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Losses</p>
        <p class="font-bold">{{ displayPlayer?.p3?.losses }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Kills</p>
        <p class="font-bold">{{ displayPlayer?.p3?.kills }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">dBNOs</p>
        <p class="font-bold">{{ displayPlayer?.p3?.dBNOs }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Assists</p>
        <p class="font-bold">{{ displayPlayer?.p3?.assists }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Suicides</p>
        <p class="font-bold">{{ displayPlayer?.p3?.suicides }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Team Kills</p>
        <p class="font-bold">{{ displayPlayer?.p3?.teamKills }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Most Kills</p>
        <p class="font-bold">{{ displayPlayer?.p3?.roundMostKills }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Heals</p>
        <p class="font-bold">{{ displayPlayer?.p3?.heals }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Revives</p>
        <p class="font-bold">{{ displayPlayer?.p3?.revives }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Boosts</p>
        <p class="font-bold">{{ displayPlayer?.p3?.boosts }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Matches</p>
        <p class="font-bold">{{ displayPlayer?.p3?.roundsPlayed }}</p>
      </span>
    </div>
  </article>
  <article class="card-container overflow-hidden">
    <div class="relative z-50">
      <div id="playerDropdown4" @click="handlePlayerDropdown(4)" class="player-card p4">
        <figure class="player-card-fig">
          <span class="text-white md-max:hidden">4</span>
        </figure>
        <span class="font-bold text-white text-sm px-2 mr-auto">{{
          players.$state.player4?.name || 'SEARCH FOR PLAYER'
        }}</span>

        <div class="flex justify-center items-center pr-4 h-full">
          <font-awesome-icon
            class="icon-pen transition-all"
            :class="{
              '-rotate-180 icon-pen': dropdown4
            }"
            icon="fa-solid fa-chevron-down"
          />
        </div>
      </div>

      <Transition class="absolute sm-max:left-0 sm-max:fixed z-30 w-full" name="playerTransition">
        <div class="bg-stone-100 p-2 shadow-lg" v-if="dropdown4">
          <div id="playerDropdown4" class="input-container">
            <input
              v-model="playerSearch"
              :autofocus="true"
              id="player"
              type="text"
              name="player"
              class="input-field peer"
              placeholder=" "
            />

            <label for="player" class="input-label">PLAYER NAME</label>
            <button class="input-icon-sm z-40">
              <font-awesome-icon
                @click="getPlayer4"
                class="peer icon-sm bg-white"
                icon="fa-solid fa-magnifying-glass"
              />
            </button>
          </div>
        </div>
      </Transition>
    </div>
    <div v-if="players.$state.player4" class="flex flex-col py-4">
      <span class="flex justify-between px-4">
        <p class="type">Wins</p>
        <p class="font-bold">{{ displayPlayer?.p4?.wins }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Losses</p>
        <p class="font-bold">{{ displayPlayer?.p4?.losses }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Kills</p>
        <p class="font-bold">{{ displayPlayer?.p4?.kills }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">dBNOs</p>
        <p class="font-bold">{{ displayPlayer?.p4?.dBNOs }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Assists</p>
        <p class="font-bold">{{ displayPlayer?.p4?.assists }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Suicides</p>
        <p class="font-bold">{{ displayPlayer?.p4?.suicides }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Team Kills</p>
        <p class="font-bold">{{ displayPlayer?.p4?.teamKills }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Most Kills</p>
        <p class="font-bold">{{ displayPlayer?.p4?.roundMostKills }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Heals</p>
        <p class="font-bold">{{ displayPlayer?.p4?.heals }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Revives</p>
        <p class="font-bold">{{ displayPlayer?.p4?.revives }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Boosts</p>
        <p class="font-bold">{{ displayPlayer?.p4?.boosts }}</p>
      </span>
      <span class="flex justify-between px-4">
        <p class="type">Matches</p>
        <p class="font-bold">{{ displayPlayer?.p4?.roundsPlayed }}</p>
      </span>
    </div>
  </article>
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
.mobiletype {
  @apply inline;
}

.amount {
  @apply font-bold;
}
.card-container {
  @apply w-full bg-white flex flex-col border border-stone-400 sm-max:border-0;
}
.player-card {
  @apply flex z-40 bg-stone-100 items-center shadow-sm  sm-max:text-white;
}
.player-card-fig {
  @apply h-12 w-12 flex justify-center items-center  font-bold;
}
.p1 {
  @apply bg-yellow-500;
}
.p2 {
  @apply bg-red-800;
}
.p3 {
  @apply bg-blue-800;
}
.p4 {
  @apply bg-green-800;
}
</style>
