<script lang="ts" src="./Statistics.ts"></script>

<template>
  <!-- <MenuBar /> -->
  <main class="width-max statistics-container">
    <h1 class="heading-styling heading-bebas-sm">STATISTICS PAGE</h1>
    <div class="padding-container lg-max:flex-col-reverse">
      <!-- <aside
        class="lg-max:w-full w-1/3 sm-max:w-full flex flex-col sm-max:flex-col-reverse sm-max:p-0"
      >
        <SeasonStats />
        <Suspense>
          <MatchList />
        </Suspense>
      </aside> -->

      <section class="flex flex-col w-full">
        <h2 class="heading-styling heading-bebas-sm sm-max:hidden">STATISTICS</h2>
        <OptionBar />
        <PlayerStats />
      </section>
    </div>
  </main>
  <AppFooter />
</template>

<style>
.statistics-container {
  @apply bg-neutral-400 bg-opacity-50 mb-10 flex flex-col;
}

.padding-container {
  @apply /* --------------------- */
  /* full */
  /* tablet */ 
  /* mobile */ sm-max:p-0 sm-max:gap-0
  /* design */ flex sm-max:flex-col-reverse p-2 gap-2;
}
</style>
