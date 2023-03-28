<script lang="ts" src="./Player"></script>

<template>
  {{ loading }}
  <article id="playerDropdown" class="card-container overflow-hidden border border-stone-400">
    <div @click="handlePlayerDropdown(1)" class="flex z-50 bg-stone-100 items-center shadow-sm">
      <figure class="h-12 w-12 flex justify-center items-center bg-yellow-500 font-bold">
        <span class="text-white text-">1</span>
      </figure>
      <span class="font-bold text-sm px-2 mr-auto">{{ activePlayer }}</span>

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

    <Transition class="overflow-hidden" name="playerTransition">
      <div class="bg-stone-100 p-2 shadow-lg" v-if="dropdown1">
        <div class="input-container">
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
        <div class="px-2 pt-4 pb-2 flex flex-col">
          <span class="text-sm font-bold">HISTORY</span>
          <div class="text-sm flex flex-col">
            <!-- <div v-for="(date, index) in suggestions" :key="`dag_${index}`">
              <span class="cursor-pointer" @click="handleHistoryName(date)" :ref="date.id">{{
                date
              }}</span>
            </div> -->
          </div>
        </div>
      </div>
    </Transition>
    <div v-if="players.$state.player1" class="flex flex-col">
      {{ players.$state.player1.name }}
    </div>
  </article>

  <article id="playerDropdown" class="card-container overflow-hidden border border-stone-400">
    <div @click="handlePlayerDropdown(2)" class="flex z-50 bg-stone-100 items-center shadow-sm">
      <figure class="h-12 w-12 flex justify-center items-center bg-orange-600 font-bold">
        <span class="text-white text-">2</span>
      </figure>
      <span class="font-bold text-sm px-2 mr-auto">{{ activePlayer }}</span>

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

    <Transition class="overflow-hidden" name="playerTransition">
      <div class="bg-stone-100 p-2 shadow-lg" v-if="dropdown2">
        <div class="input-container">
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
        <div class="px-2 pt-4 pb-2 flex flex-col">
          <span class="text-sm font-bold">HISTORY</span>
          <div class="text-sm flex flex-col">
            <!-- <div v-for="(date, index) in suggestions" :key="`dag_${index}`">
              <span class="cursor-pointer" @click="handleHistoryName(date)" :ref="date.id">{{
                date
              }}</span>
            </div> -->
          </div>
        </div>
      </div>
    </Transition>
    <div v-if="players.$state.player2" class="flex flex-col">
      {{ players.$state.player2.name }}
    </div>
  </article>

  <article id="playerDropdown" class="card-container overflow-hidden border border-stone-400">
    <div @click="handlePlayerDropdown(3)" class="flex z-50 bg-stone-100 items-center shadow-sm">
      <figure class="h-12 w-12 flex justify-center items-center bg-blue-700 font-bold">
        <span class="text-white text-">3</span>
      </figure>
      <span class="font-bold text-sm px-2 mr-auto">{{ activePlayer }}</span>

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

    <Transition class="overflow-hidden" name="playerTransition">
      <div class="bg-stone-100 p-2 shadow-lg" v-if="dropdown3">
        <div class="input-container">
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
        <div class="px-2 pt-4 pb-2 flex flex-col">
          <span class="text-sm font-bold">HISTORY</span>
          <div class="text-sm flex flex-col">
            <!-- <div v-for="(date, index) in suggestions" :key="`dag_${index}`">
              <span class="cursor-pointer" @click="handleHistoryName(date)" :ref="date.id">{{
                date
              }}</span>
            </div> -->
          </div>
        </div>
      </div>
    </Transition>
    <div v-if="players.$state.player3" class="flex flex-col">
      {{ players.$state.player3.name }}
    </div>
  </article>
  <article id="playerDropdown" class="card-container overflow-hidden border border-stone-400">
    <div @click="handlePlayerDropdown(4)" class="flex z-50 bg-stone-100 items-center shadow-sm">
      <figure class="h-12 w-12 flex justify-center items-center bg-green-800 font-bold">
        <span class="text-white text-">4</span>
      </figure>
      <span class="font-bold text-sm px-2 mr-auto">{{ activePlayer }}</span>

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

    <Transition class="overflow-hidden" name="playerTransition">
      <div class="bg-stone-100 p-2 shadow-lg" v-if="dropdown4">
        <div class="input-container">
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
        <div class="px-2 pt-4 pb-2 flex flex-col">
          <span class="text-sm font-bold">HISTORY</span>
          <div class="text-sm flex flex-col">
            <!-- <div v-for="(date, index) in suggestions" :key="`dag_${index}`">
              <span class="cursor-pointer" @click="handleHistoryName(date)" :ref="date.id">{{
                date
              }}</span>
            </div> -->
          </div>
        </div>
      </div>
    </Transition>
    <div v-if="players.$state.player4" class="flex flex-col">
      {{ players.$state.player4.name }}
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

.amount {
  @apply font-bold;
}
.card-container {
  @apply w-full bg-white flex flex-col;
}
</style>
