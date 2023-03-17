<script lang="ts" src="./MatchList"></script>

<template>
  <section class="flex flex-col mt-2 sm-max:mt-0">
    <h2 class="heading-styling heading-bebas-sm">MATCHLIST</h2>

    <ul class="px-2 pt-2">
      {{
        matchlistError
      }}
      <div>{{ matchlist }}</div>
    </ul>
  </section>
</template>
