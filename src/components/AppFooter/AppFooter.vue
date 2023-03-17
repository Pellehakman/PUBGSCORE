<script lang="ts" src="./AppFooter"></script>
<template>
  <footer class="width-max mt-auto footer-gradient p-2 rounded-sm">
    <div class="border border-stone-300 w-full h-full rounded-sm pt-12">
      <div class="flex gap-16 pl-12">
        <section>
          <h2 class="heading-bebas-sm mb-4">RESOURCES</h2>
          <ul class="flex flex-col gap-2">
            <li class="footer-links">Privacy Policy</li>
            <li class="footer-links">Terms of use</li>
            <li class="footer-links">Help</li>
            <li class="footer-links">Feedback</li>
          </ul>
        </section>
        <section>
          <h2 class="heading-bebas-sm mb-4">MORE</h2>
          <ul class="flex flex-col gap-2">
            <li class="footer-links">Business</li>
            <li class="footer-links">Advertise</li>
          </ul>
        </section>
      </div>
      <div class="footer-brand-container">
        <img id="logo" class="footer-logo opacity-50 py-5" :src="logo" alt="brand logo" />
        <figure class="w-full border-t border-stone-300 mt-2 mx-2"></figure>
        <p class="text-sm my-2">© 2022 PBGSCORE is based on data from PUBG Offical API.</p>
      </div>
    </div>
  </footer>
</template>
<style>
.footer-links {
  @apply text-sm;
}
.footer-brand-container {
  @apply pt-12 px-12;
}
.footer-logo {
  @apply w-20;
}

.footer-gradient {
  background: rgb(249, 248, 241);
  background: linear-gradient(114deg, rgb(241, 241, 241) 0%, rgb(238, 238, 238) 100%);
}
</style>
