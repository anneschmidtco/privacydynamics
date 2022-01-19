<template>
  <div class="w-full">
    <header class="container max-w-screen-xl flex justify-between items-center py-2">
        <strong>
          <g-link to="/">
            <g-image :src="$static.settings.logo" width="500"/>
          </g-link>
        </strong>
        <nav class="flex flex-col md:flex-row items-center justify-start">
          <g-link class="px-4 py-5 mx-1 text-sm text-brand-gray hover:text-brand-lime" to="/">Product</g-link>
          <g-link class="px-4 py-5 mx-1 text-sm text-brand-gray hover:text-brand-lime" to="/resources/">Resources</g-link>
          <g-link class="px-4 py-5 mx-1 text-sm text-brand-gray hover:text-brand-lime" to="/our-team/">Our Team</g-link>
          <g-link class="px-4 py-5 mx-1 text-sm text-brand-gray hover:text-brand-lime" to="/careers/">Careers</g-link>
          <g-link class="px-9 py-3 mx-1 text-sm text-white bg-brand-gray hover:bg-brand-lime hover:text-brand-gray" to="/">Get started</g-link>
        </nav>
      </header>
    <slot/>
    <footer class="w-full bg-brand-gray text-white pt-9">
      <div class="container">
        <div class="w-full flex flex-col md:flex-row justify-between pb-11 border-b border-brand-gray-light">
          <div>
            <g-image :src="'/uploads/logo-icon.svg'" class="mb-8"/>
            <h4 class="text-[38px] leading-[48px] tracking-[-0.76px] max-w-[415px]">Empowering <strong class="text-brand-lime font-light">innovative</strong> and ethical data teams</h4>
          </div>
          <div class="w-full flex flex-col md:flex-row md:items-end mt-8 md:mt-auto">
            <ul class="grid grid-cols-2">
              <li class="flex"><g-link :href="'/'" class="text-[17px] leading-[31px] tracking-normal py-2 text-center md:text-left">Home</g-link></li>
              <li class="flex"><g-link :href="'/'" class="text-[17px] leading-[31px] tracking-normal py-2 text-center md:text-left">About</g-link></li>
              <li class="flex"><g-link :href="'/'" class="text-[17px] leading-[31px] tracking-normal py-2 text-center md:text-left">Careers</g-link></li>
              <li class="flex"><g-link :href="'/'" class="text-[17px] leading-[31px] tracking-normal py-2 text-center md:text-left">Resources</g-link></li>
              <li class="flex"><g-link :href="'/'" class="text-[17px] leading-[31px] tracking-normal py-2 text-center md:text-left">Pricing</g-link></li>
              <li class="flex"><g-link :href="'/'" class="text-[17px] leading-[31px] tracking-normal py-2 text-center md:text-left">Product</g-link></li>
            </ul>
            <ul class="flex mx-auto mt-8 md:mt-auto md:ml-14">
              <li class="flex">
                <g-link :href="'/'" class="px-2">
                  <g-image :src="'/uploads/linkedin-icon.svg'"/>
                </g-link>
              </li>
              <li class="flex">
                <g-link :href="'/'" class="px-2">
                  <g-image :src="'/uploads/fb-icon.svg'"/>
                </g-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full flex flex-col md:flex-row justify-between items-center pt-3 pb-10 md:pb-28">
          <p class="text-sm leading-[35px] tracking-normal">© Privacy Dynamics 2021</p>
          <g-link :href="'/terms'" class="text-sm leading-[35px] tracking-normal">Terms & Conditions</g-link>
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
