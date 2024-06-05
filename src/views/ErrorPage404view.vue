<script setup>
import Errorimg from "../assets/undraw_page_not_found_re_e9o6.svg";
</script>

<template>
  <div>
    <img class="mx-auto w-2/6 mt-5" v-bind:src="Errorimg" />
    <p class="text-center mt-5">Page not found</p>
    <p class="text-center mt-5">
      Oops!, page you are loooking for does not exist
    </p>
    <router-link :to="{ path: '/' }">
      <p class="text-center">Back to home</p>
    </router-link>
  </div>
</template>
