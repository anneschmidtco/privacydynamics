<template>
  <div class="w-full">
    <header class="fixed top-0 bg-white w-full z-50 border-b">
      <div class="container flex justify-between items-center py-2">
        <g-link to="/" class="py-[13px] hover:bg-transparent">
          <g-image :src="$static.settings.logo" width="500" />
        </g-link>
        <nav class="hidden md:flex flex-col fixed w-full bg-white top-[77px] md:top-0 py-2 md:py-0 left-0 md:w-auto md:relative md:flex-row items-center justify-start">
          <g-link class="nav-item px-4 py-5 mx-1 text-sm font-display font-medium text-brand-gray relative hover:bg-transparent after:hidden after:bg-brand-lime after:w-full after:h-1 after:absolute after:-bottom-[11px] after:left-0 hover:after:block" to="/product">Product</g-link>
          <g-link class="nav-item px-4 py-5 mx-1 text-sm font-display font-medium text-brand-gray relative hover:bg-transparent after:hidden after:bg-brand-lime after:w-full after:h-1 after:absolute after:-bottom-[11px] after:left-0 hover:after:block" to="/resources">Resources</g-link>
          <g-link class="nav-item px-4 py-5 mx-1 text-sm font-display font-medium text-brand-gray relative hover:bg-transparent after:hidden after:bg-brand-lime after:w-full after:h-1 after:absolute after:-bottom-[11px] after:left-0 hover:after:block" to="/about">Our Team</g-link>
          <g-link class="nav-item px-4 py-5 mx-1 text-sm font-display font-medium text-brand-gray relative hover:bg-transparent after:hidden after:bg-brand-lime after:w-full after:h-1 after:absolute after:-bottom-[11px] after:left-0 hover:after:block" to="/careers">Careers</g-link>
          <g-link class="px-9 py-3 mx-1 text-sm font-display font-medium text-white bg-brand-gray hover:bg-brand-lime hover:text-brand-gray" to="/pricing">Get started</g-link>
        </nav>
      </div>
    </header>
    <slot />
    <footer class="w-full bg-brand-gray text-white pt-9">
      <div class="container">
        <div class="w-full flex flex-col md:flex-row justify-center md:justify-between text-center md:text-left pb-11 border-b border-brand-gray-light">
          <div class="w-full md:w-8/12 flex flex-col justify-center md:justify-start">
            <g-image :src="'/uploads/logo-icon.svg'" class="mb-8 w-[80px] mx-auto md:ml-0" />
            <h4 class="text-[38px] leading-[48px] tracking-[-0.76px] max-w-[415px]">
              Empowering
              <strong class="text-brand-lime font-light">innovative</strong> and ethical data teams
            </h4>
          </div>
          <div class="w-full md:w-4/12 flex flex-col justify-center md:justify-start md:flex-row md:items-end mt-8 md:mt-auto">
            <ul class="grid grid-cols-2 text-center md:text-left">
              <li class="flex justify-center md:justify-start">
                <g-link :to="'/'" class="text-[17px] leading-tight tracking-normal py-2 text-center md:text-left">Home</g-link>
              </li>
              <li class="flex justify-center md:justify-start">
                <g-link :to="'/about'" class="text-[17px] leading-tight tracking-normal py-2 text-center md:text-left">About</g-link>
              </li>
              <li class="flex justify-center md:justify-start">
                <g-link :to="'/careers'" class="text-[17px] leading-tight tracking-normal py-2 text-center md:text-left">Careers</g-link>
              </li>
              <li class="flex justify-center md:justify-start">
                <g-link :to="'/resources'" class="text-[17px] leading-tight tracking-normal py-2 text-center md:text-left">Resources</g-link>
              </li>
              <li class="flex justify-center md:justify-start">
                <g-link :to="'/pricing'" class="text-[17px] leading-tight tracking-normal py-2 text-center md:text-left">Pricing</g-link>
              </li>
              <li class="flex justify-center md:justify-start">
                <g-link :to="'/product'" class="text-[17px] leading-tight tracking-normal py-2 text-center md:text-left">Product</g-link>
              </li>
            </ul>
            <ul class="flex mx-auto mt-8 md:mt-auto md:ml-14">
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
        <div class="w-full flex flex-col md:flex-row justify-between items-center pt-3 pb-10 md:pb-28">
          <p class="text-sm leading-[35px] tracking-normal">© Privacy Dynamics 2021</p>
          <g-link :to="'/terms'" class="text-sm leading-[35px] tracking-normal">Terms & Conditions</g-link>
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

<style>
header {
  border-color: rgba(166, 175, 188, 0.5);
}
.nav-item::after {
  animation-name: fadeInDown;
  animation-duration: 0.5s;
}
</style>