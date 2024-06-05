<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div>
      <nav
        class="flex justify-between px-10 py-5 text-[#002147] text-xl font-medium"
      >
        <div class="italic"><p>RolasGit</p></div>
        <div>
          <RouterLink class="ml-5" to="/">Home</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
