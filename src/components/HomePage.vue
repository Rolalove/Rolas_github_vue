<script setup>
import { onMounted, ref } from "vue";
import { Octokit } from "octokit";
import  rolaimg from "../assets/rolaimg.jpg";

const github = ref(null);
const page = ref(1);
const perPage = 4;
const rolaimage = rolaimg;

const prevPage = () => {
  if (page.value > 1) {
    page.value--;
    fetchRepo(page.value, perPage);
  }
};

const nextPage = () => {
  page.value++;
  fetchRepo(page.value, perPage);
};

const fetchRepo = (page, perPage) => {
  const octokit = new Octokit({
    auth: import.meta.env.VITE_API_URL,
  });
  octokit
    .request(`GET /users/Rolalove/repos?page=${page}&per_page=${perPage}`)
    .then((respo) => {
      console.log(respo);
      console.log(respo.data);
      github.value = respo.data;
    });
};
onMounted(() => {
  fetchRepo(page.value, perPage);
});
</script>
<template>
  <main class="flex px-8 gap-10 max-sm:px-2 max-sm:flex-col-reverse sm:gap-0">
    <!-- //left -->
    <div class="w-[70%] max-sm:flex max-sm:flex-col max-sm:w-full">
      <ul
        class="grid grid-cols-2 gap-5 max-sm:flex max-sm:flex-col max-sm:w-full"
      >
        <li
          class="px-5 py-5 flex flex-col justify-between shadow-xl border rounded-lg h-[45vh] max-sm:w-full"
          v-for="reposList in github"
          :key="reposList.name"
        >
          <div class="flex justify-between items-center">
            <p class="font-defaultfont text-lg text-[#002147] font-bold">
              {{ reposList.name }}
            </p>
            <RouterLink :to="'/repoDisplay/' + reposList.name"
              ><font-awesome-icon
                icon="arrow-up-right-from-square"
                size="20x"
                style="color: rgb(0, 125, 86)"
            /></RouterLink>
          </div>

          <p class="py-5 text-xl mb-10 text-[#002147]">
            {{ reposList.description }}
          </p>
          <div class="flex justify-between px-2 mb-5">
            <button class="p-2 px-4 text-white bg-[#002147] rounded-2xl">
              {{ reposList.visibility }}
            </button>
            <button
              class="p-2 px-6 text-white bg-[#007d56] rounded-2xl flex items-center gap-2"
            >
              <font-awesome-icon icon="fa-solid fa-code-fork" />{{
                reposList.forks
              }}
            </button>
            <button
              class="p-2 px-6 text-white bg-[#7fd77b] rounded-2xl flex items-center gap-1"
            >
              <font-awesome-icon icon="fa-regular fa-star" />{{
                reposList.stargazers_count
              }}
            </button>
            <button class="p-2 px-4 text-white bg-[#C48786] rounded-2xl">
              {{ reposList.language }}
            </button>
          </div>
        </li>
      </ul>
      <div class="flex justify-between mt-2">
        <button
          @click="prevPage"
          class="px-2 py-2 border-[#a33e3d] text-[#a33e3d] border-2 font-bold rounded"
          :disabled="page === 1"
        >
          Prev
        </button>
        <button
          @click="nextPage"
          class="px-2 py-2 border-[#a33e3d] border-2 text-[#a33e3d] font-bold rounded"
        >
          Next
        </button>
      </div>
    </div>
    <!-- righ -->
    <div
      class="w-[30%] h-[100vh] bg-[#002147] ml-6 rounded px-6 py-3 max-sm:ml-0 max-sm:w-full max-sm:rounded max-sm:mt-5 max-sm:py-3"
    >
      <img
        className="h-[50vh] w-full rounded mb-3"
        :src="rolaimage"
        alt=""
      />
      <p class="text-[#70facb] w-full text-lg mb-2 font-semibold">
        Kofoworola Shonuyi
      </p>
      <p class="text-white w-full mb-3 text-sm">Username: Rolalove</p>
      <p class="text-white text-sm mb-4">Frontend Developer</p>
      <div>
        <div className="flex items-center text-white text-sm mb-2 gap-5">
          <p>
            <font-awesome-icon icon="fa-regular fa-envelope" />
          </p>
          <p>skofoworola3@gmail.com</p>
        </div>
        <div className="flex  text-white items-center mb-4 text-sm gap-5">
          <p>
            <font-awesome-icon icon="fa-solid fa-location-pin" />
          </p>
          <p>Lagos Nigeria</p>
        </div>
        <div className="flex gap-5 text-white items-center mb-3   text-sm">
          <p>
            <font-awesome-icon icon="fa-solid fa-link" />
          </p>
          <a href="https://github.com/Rolalove" target="_blank">
            https://github.com/Rolalove
          </a>
        </div>
        <div className="flex text-white gap-20 mb-4 text-sm ">
          <div className="flex gap-3">
            <p>
              <font-awesome-icon icon="fa-solid fa-user-plus" />
            </p>
            <p className="text-white text-sm">Followers: 3</p>
          </div>
          <div className="flex gap-3">
            <p>
              <font-awesome-icon icon="fa-solid fa-user-plus" />
            </p>

            <p className="text-white text-sm">Following: 3</p>
          </div>
        </div>
        <div className="flex text-white gap-16 mb-4 text-sm ">
          <div className="flex gap-3">
            <p className="text-white text-sm">Public Repo:34</p>
          </div>
          <div className="flex gap-3">
            <p className="text-white text-sm">Public Gists: 1</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
