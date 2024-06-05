<script setup>
import { onMounted, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { Octokit } from "octokit";

const repo = ref([]);
const route = useRoute();

const repoDetails = () => {
  const name = route.params.name;
  const octokit = new Octokit({
    auth: import.meta.env.VITE_API_URL,
  });

  octokit
    .request(`GET /repos/Rolalove/${name}`)

    .then((response) => {
      console.log(response);
      repo.value = response.data;
    });
};
onMounted(repoDetails);
</script>
<template>
  <section
    class="bg-[#F5F5F5] mt-5 flex justify-center items-center max-sm:py-4"
  >
    <div class="bg-white w-[70%] h-max bg-blue rounded shadow-md">
      <div class="px-5 py-3">
        <h3 class="text-[#002147] mt-2 font-defaultfont font-bold">
          {{ repo.name }}
        </h3>
        <div class="flex gap-2 py-3"></div>
      </div>

      <div
        className="grid grid-cols-3 gap-6 px-5 py-3 text-center max-sm:flex max-sm:flex-col "
      >
        <div className="ring-1 px-2 py-2  ">
          Branch: {{ repo.default_branch }}
        </div>
        <div className="ring-1 px-2 py-2">Fork: {{ repo.forks }}</div>
        <div className="ring-1 px-2 py-2">Language: {{ repo.language }}</div>
      </div>
      <div
        className="grid grid-cols-3 gap-6 px-5 py-5  text-center  max-sm:flex max-sm:flex-col"
      >
        <div className="ring-1  px-2 py-2">
          Stars: {{ repo.stargazers_count }}
        </div>
        <div className="ring-1  px-2 py-2">Watchers: {{ repo.watchers }}</div>
        <div className="ring-1  px-2 py-2">File Size: {{ repo.size }}</div>
      </div>
      <div
        className="grid grid-cols-3 gap-6 px-5 py-5 text-center max-sm:flex max-sm:flex-col"
      >
        <div className="ring-1  px-7 py-7 max-sm:py-5">
          Visibility : {{ repo.visibility }}
        </div>
        <div className="ring-1  px-7 py-7 max-sm:py-5">
          Open Issues : {{ repo.open_issues }}
        </div>
        <div className="ring-1 px-7 py-7 max-sm:py-5">
          Created_at :{{ repo.created_at }}
        </div>
      </div>
      <div className="flex  justify-between px-5 py-5 ">
        <button class="p-3 bg-[#002147] px-6 py-2 rounded-2xl text-white">
          <a target="'_blank'" :href="repo.html_url">ViewSite</a>
        </button>

        <button class="bg-[#007D56] p-3 px-6 py-2 rounded-3xl text-white">
          <router-link :to="{ path: '/' }">Back</router-link>
        </button>
      </div>
    </div>
  </section>
</template>
