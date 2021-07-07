<template>
  <nav
    id="nav-wrapper"
    role="banner"
    class="bg-primary flex flex-row w-screen py-5 px-4 top-0 left-0 justify-center items-center sticky"
  >
    <div class="flex-row flex w-full max-w-[1200px] justify-between self-center">
      <div id="navbar-start" class="flex-row">
        <nuxt-link to="/">
          <span class="font-pacifico text-white text-2xl">Caesura</span>
        </nuxt-link>
      </div>

      <div id="navbar-end" class="flex-row flex self-center">
        <nuxt-link v-for="(v, k) in links" :key="k" to="/" class="rounded-md flex flex-col mx-2 px-2 duration-300 justify-center items-center hover:bg-secondary hover:bg-opacity-80">
          <span class="font-saira text-white text-md self-center">{{ v.name }}</span>
        </nuxt-link>
        <vs-input
          id="music-search"
          v-model="MusicSearch"
          class="expand"
          icon-after
          placeholder="Search Music..."
          aria-label="search"
        >
          <template #icon>
            <SearchIcon size="16" />
          </template>
        </vs-input>
      </div>
    </div>
  </nav>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from '@nuxtjs/composition-api';
import { SearchIcon } from 'vue-feather-icons';
export default defineComponent({
  components: { SearchIcon },
  setup(_props, context) {
    const links = [
      { name: 'About' },
      { name: 'Music' },
      { name: 'Contact' },
    ] as const;

    const MusicSearch = ref('');

    return { MusicSearch, links };
  },
});
</script>
<style lang="scss">

#music-search.expand
{
  >* input {
    width: 12rem;
    &:focus
    {
      width: 20rem;
    }
  }
}
</style>
