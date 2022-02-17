<template>
  <div class="nav-wrapper" :class="isOpen ? 'open' : ''">
    <nav class="nav hidden md:flex flex-col fixed w-full bg-white top-[68px] md:top-0 py-2 md:py-0 left-0 md:w-auto md:relative md:flex-row md:items-center justify-start animated">
      <li<g-link class="px-4 py-5 mx-1 text-sm font-display font-medium text-brand-gray relative hover:bg-transparent after:hidden after:bg-brand-lime after:w-full after:h-1 after:absolute after:-bottom-[11px] after:left-0 hover:after:block" to="/product">Product</g-link>
      <li<g-link class="px-4 py-5 mx-1 text-sm font-display font-medium text-brand-gray relative hover:bg-transparent after:hidden after:bg-brand-lime after:w-full after:h-1 after:absolute after:-bottom-[11px] after:left-0 hover:after:block" to="/resources">Resources</g-link>
      <li<g-link class="px-4 py-5 mx-1 text-sm font-display font-medium text-brand-gray relative hover:bg-transparent after:hidden after:bg-brand-lime after:w-full after:h-1 after:absolute after:-bottom-[11px] after:left-0 hover:after:block" to="/about">Our Team</g-link>
      <li<g-link class="px-4 py-5 mx-1 text-sm font-display font-medium text-brand-gray relative hover:bg-transparent after:hidden after:bg-brand-lime after:w-full after:h-1 after:absolute after:-bottom-[11px] after:left-0 hover:after:block" to="/careers">Careers</g-link>
      <div class="mt-6 md:mt-0">
		  <g-link class="px-9 py-3 mx-1 ml-4 md:ml-1 text-sm font-display font-medium text-white bg-brand-gray hover:bg-brand-lime hover:text-brand-gray transition-colors duration-1000" to="/pricing">Get started</g-link>
	  </div>
    </nav>
    <a href="#" class="menu-icon-toggle inline-block md:hidden hover:bg-transparent appearance-none" @click="handleMobileMenu"><span></span></a>
  </div>
</template>

<script>
export default {
  props: {},
  data: function () {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleMobileMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
.nav-item::after {
  animation-name: fadeInDown;
  animation-duration: 0.5s;
}
.menu-icon-toggle {
  display: block;
  width: 30px;
  height: 30px;
  position: relative;
  z-index: 9;
}
.menu-icon-toggle {
  top: 50px;
  position: absolute;
  right: 20px;
  top: 20px;
}
.menu-icon-toggle span {
  height: 2px;
  top: 50%;
  transform: translate(0, -50%);
  transition: opacity 0.3s 0.3s;
  @apply bg-brand-gray absolute w-full block;
}
.nav-wrapper:not(.open) .menu-icon-toggle span {
  @apply bg-brand-gray;
}
.menu-icon-toggle::before,
.menu-icon-toggle::after {
  content: "";
  height: 2px;
  transition: transform 0.3s, top 0.3s 0.3s, bottom 0.3s 0.3s;
  @apply absolute bg-brand-gray w-full block;
}
.menu-icon-toggle::before {
  top: 6px;
}
.menu-icon-toggle::after {
  bottom: 6px;
}
.open .menu-icon-toggle span {
  opacity: 0;
  transition: opacity 0.3s;
}
.open .menu-icon-toggle::before,
.open .menu-icon-toggle::after {
  @apply bg-brand-gray-light;
}
.open .menu-icon-toggle::before {
  top: calc(50% - 1px);
  transform: rotate(45deg);
}
.open .menu-icon-toggle::after {
  bottom: calc(50% - 1px);
  transform: rotate(-45deg);
}
.open .menu-icon-toggle::before,
.open .menu-icon-toggle::after {
  transition: top 0.3s, bottom 0.3s, transform 0.3s 0.3s;
}
.nav-wrapper.open .nav {
  @apply flex h-full;
}
@media (max-width: 640px) {
  .nav {
    animation-name: fadeInLeft;
    animation-duration: 0.1s !important;
  }
}
</style>