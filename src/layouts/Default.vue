<template>
  <div class="w-full">
    <header class="fixed top-0 bg-white w-full z-50 border-b">
      <div class="container flex justify-between items-center py-2">
        <g-link to="/" class="py-[13px] hover:bg-transparent max-w-[180px] md:max-w-none">
          <g-image :src="$static.settings.logo" width="500" />
        </g-link>
        <mobile-menu />
      </div>
    </header>
    <slot />
    <footer class="w-full bg-brand-gray text-white pt-9">
      <div class="container">
        <div class="w-full flex flex-col md:flex-row justify-start md:justify-between text-left pb-11 border-b border-brand-gray-light">
          <div class="w-full md:w-8/12 flex flex-col justify-start">
            <g-image :src="'/uploads/logo-icon.svg'" class="mb-8 w-[80px] ml-0" />
            <h4 class="text-[38px] leading-[48px] tracking-[-0.76px] max-w-[415px]">
              Empowering
              <strong class="text-brand-lime font-light">innovative</strong> and ethical data teams
            </h4>
          </div>
          <div class="w-full md:w-4/12 flex flex-col justify-start md:flex-row md:items-end mt-8 md:mt-auto">
            <ul class="grid grid-cols-2 text-left">
              <li class="flex justify-start">
                <g-link :to="'/'" class="text-[17px] leading-tight tracking-normal py-2 text-left">Home</g-link>
              </li>
              <li class="flex justify-start">
                <g-link :to="'/about'" class="text-[17px] leading-tight tracking-normal py-2 text-left">About</g-link>
              </li>
              <li class="flex justify-start">
                <g-link :to="'/careers'" class="text-[17px] leading-tight tracking-normal py-2 text-left">Careers</g-link>
              </li>
              <li class="flex justify-start">
                <g-link :to="'/resources'" class="text-[17px] leading-tight tracking-normal py-2 text-left">Resources</g-link>
              </li>
              <li class="flex justify-start">
                <g-link :to="'/pricing'" class="text-[17px] leading-tight tracking-normal py-2 text-left">Pricing</g-link>
              </li>
              <li class="flex justify-start">
                <g-link :to="'/product'" class="text-[17px] leading-tight tracking-normal py-2 text-left">Product</g-link>
              </li>
            </ul>
            <ul class="flex ml-0 mt-8 md:mt-auto md:ml-14">
              <li class="flex">
                <g-link :to="'https://www.linkedin.com/company/privacydynamics/'" class="px-2">
                  <g-image :src="'/uploads/linkedin-icon.svg'" />
                </g-link>
              </li>
              <li class="flex">
                <g-link :to="'https://twitter.com/privacydynamics'" class="px-2">
                  <g-image :src="'/uploads/twitter-icon.svg'" />
                </g-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full flex flex-row justify-start md:justify-between md:items-center pt-3 pb-10 md:pb-28">
          <p class="text-sm leading-tight md:leading-[35px] tracking-normal pr-2 border-r border-white md:border-none">© Privacy Dynamics 2021</p>
          <g-link :to="'/terms'" class="text-sm leading-tight md:leading-[35px] tracking-normal pl-2 md:pl-0">Terms & Conditions</g-link>
        </div>
      </div>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  },
  settings(path: "/site/settings") {
    logo
  }
}
</static-query>

<script>
import MobileMenu from "~/components/MobileMenu.vue";
export default {
  components: {
    MobileMenu,
  },
};
</script>
<style>
header {
  border-color: rgba(166, 175, 188, 0.5);
}
</style>