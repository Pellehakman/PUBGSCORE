<script lang="ts" src="./Player"></script>

<template>
  <article
    id="playerSearchDropdown"
    class="card-container overflow-hidden border border-stone-400"
  >
    <div
      @click="handlePlayerDropdown"
      class="flex z-50 bg-stone-100 items-center shadow-sm"
    >
      <figure
        class="h-12 w-12 flex justify-center items-center bg-yellow-500 font-bold"
      >
        <span class="text-white text-">1</span>
      </figure>
      <span class="font-bold text-sm px-2 mr-auto">{{ playerSearch }}</span>

      <div class="flex justify-center items-center pr-4 h-full">
        <font-awesome-icon
          class="icon-pen transition-all"
          :class="{
            '-rotate-180 icon-pen': playerDropdown,
          }"
          icon="fa-solid fa-chevron-down"
        />
      </div>
    </div>

    <Transition class="overflow-hidden" name="playerTransition">
      <div class="bg-stone-100 p-2 shadow-lg" v-if="playerDropdown">
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
            <!-- <font-awesome-icon
                class="peer animate-spin text-white icon-md"
                icon="fa-solid fa-spinner"
              /> -->
            <font-awesome-icon
              class="peer icon-sm bg-white"
              icon="fa-solid fa-magnifying-glass"
            />
          </button>
        </div>
        <div class="px-2 pt-4 pb-2 flex flex-col">
          <span class="text-sm font-bold">HISTORY</span>
          <div class="text-sm flex flex-col">
            <span>Phawkman</span>
            <span>Ekkan</span>
          </div>
        </div>
      </div>
    </Transition>
    <div class="flex flex-col">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, aliquid
      temporibus? Molestiae repellendus qui eum aut ut vitae quae perspiciatis
      dignissimos illum accusantium id, suscipit inventore dicta quidem?
      Quisquam, amet! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Minima laudantium vel in quod explicabo iste ex sint, nulla mollitia
      voluptate quidem magni nihil vitae! Excepturi dolore sapiente ipsum earum
      error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nemo
      doloremque, at id inventore voluptatum dolore. Nisi culpa, incidunt
      voluptate aut sapiente sed recusandae itaque mollitia facere sit porro
      dolore?
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
