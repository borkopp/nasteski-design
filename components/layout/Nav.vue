<template>
  <nav id="header" class="fixed w-full z-30 top-0 text-white">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
      <div class="pl-4 flex items-center">
        <a href="#">
          <!-- <img v-if="scrollY === 0" src="../../assets/imgs/logo-white.png" class="h-12 ml-4" alt=" logo"> -->
          <img src="../../assets/imgs/logo-black.png" class="h-12 ml-4" alt="">
        </a>
      </div>
      <div class="block lg:hidden pr-4">
        <button @click="mobileSidebar = !mobileSidebar" id="nav-toggle"
          class="flex items-center p-1 text-black hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          <svg class="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div :class="mobileSidebar ? '' : 'hidden'"
        class="w-full flex-grow lg:flex lg:items-center bg-white sm:bg-transparent lg:w-auto mt-2 lg:mt-0 text-black p-4 lg:p-0 z-20"
        id="nav-content">
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3" @click="mobileSidebar = false">
            <a class="inline-block uppercase no-underline font-medium navHover py-2 px-3" href="#">Почетна</a>
          </li>
          <li class="mr-3" @click="mobileSidebar = false">
            <a class="inline-block uppercase no-underline font-medium navHover py-2 px-3" href="#about">Услуги</a>
          </li>
          <li class="mr-3" @click="mobileSidebar = false">
            <a class="inline-block uppercase no-underline font-medium navHover py-2 px-3" href="#gallery">Галерија</a>
          </li>
          <li class="mr-3" @click="mobileSidebar = false">
            <a class="inline-block uppercase no-underline font-medium navHover py-2 px-3" href="#contact">Контакт</a>
          </li>
        </ul>
      </div>
    </div>
    <hr class="border-none border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "layout-nav",
  data() {
    return {
      scrollY: 0,
      mobileSidebar: false,
    };
  },
  mounted() {
    this.scrollY = window.scrollY;

    // Listen to the scroll event to update the scrollY property dynamically
    window.addEventListener("scroll", this.handleScroll);
  },

  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    },
  },

  watch: {
    scrollY(newValue: number) {
      var navaction = document.getElementById("navAction");
      var header = document.getElementById("header");
      var toToggle = document.querySelector(".toggleColour");
      if (newValue > 10) {
        navaction?.classList.remove("bg-white");
        navaction?.classList.add("gradient");
        navaction?.classList.remove("text-[#170F4F]");
        navaction?.classList.add("text-white");
        header?.classList.add("bg-white");
        header?.classList.add("navbar-active");
        toToggle?.classList.add("text-gray-800");
        toToggle?.classList.remove("text-white");
      } else {
        navaction?.classList.add("bg-white");
        navaction?.classList.remove("gradient");
        navaction?.classList.add("text-black");
        navaction?.classList.remove("text-white");
        header?.classList.remove("bg-white");
        header?.classList.remove("navbar-active");
        toToggle?.classList.remove("text-gray-800");
        toToggle?.classList.add("text-white");
      }
    },
  },
});
</script>

<style scoped>
.navHover {
  box-shadow: inset 0 0 0 0 rgb(55 65 81);
  color: black;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
  font-style: normal !important;
  border-radius: 0.25rem;
}

.navHover:hover {
  box-shadow: inset 100px 0 0 0 rgb(55 65 81);

  color: white;
}
</style>
