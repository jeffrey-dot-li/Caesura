<template>
  <main>
    <section id="hero-section" class="bg-img w-screen">
      <div id="hero-container" class="w-full max-w-[1200px] px-4">
        <div id="hero-wrapper" class="flex flex-col text-white ml-[20%] min-h-[550px] gap-6 justify-center items-start">
          <p id="hero-paragraph" class="font-sen font-medium text-gray-200 md:w-[50%] lg:w-[40%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minus eveniet repellat quaerat animi? Perferendis reiciendis quas in
            culpa iure laboriosam molestias dignissimos magni deleniti, atque velit soluta quia molestiae aperiam?
          </p>
          <h1 class="font-patuaone font-bold text-5xl md:w-[50%] lg:w-[40%]">
            Sheet Music
          </h1>
        </div>
      </div>
    </section>

    <section id="featured-section" class="w-screen py-16">
      <div class="mx-auto max-w-[1200px] px-4">
        <div id="featured-title" class="mb-8">
          <span class="font-sen font-medium ml-4 text-gray-500">
            TOP SHEET MUSIC
          </span>
          <h1 class="font-patuaone font-bold text-5xl text-gray-800">
            Featured
          </h1>
        </div>

        <div class="w-full grid gap-6 grid-cols-3 justify-items-stretch items-stretch">
          <div v-for="(music, key) in featuredItems" id="featured-item" :key="key" class="border-solid border-width-[1px] w-full p-2">
            <div id="image-wrapper" class="w-full">
              <img :src="music.image" :alt="music.title" class="h-full object-cover w-full">
            </div>

            <div id="content-wrapper" class="p-4">
              <div class="flex flex-row justify-end items-center">
                <span class="rounded-md font-sans font-medium bg-light-500 mx-1 leading-none p-2 text-gray-600">
                  {{ music.instrument }}
                </span>
                <span class="rounded-md font-sans font-medium bg-light-500 mx-1 leading-none p-2 text-gray-600">
                  Lv {{ music.level }}
                </span>
                <span class="rounded-md font-sans font-medium bg-light-500 mx-1 leading-none p-2 text-gray-600">
                  Exam
                </span>
              </div>
              <h3 class="font-patuaone text-2xl">
                {{ music.title }}
              </h3>
              <h5 class="font-serif font-light text-gray-600 indent-md">
                {{ music.composer }}
              </h5>
              <vs-button active flat class="flex font-sans font-semibold text-xl leading-none px-2 pb-1 transition-500 float-right items-center !bg-primary !hover:bg-secondary">
                Details
              </vs-button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
const sheetMusicExamples = [
  {
    image: require('~/assets/images/mocks/sheet-music.PNG'),
    title: 'Frere Jacques',
    composer: 'French Trad.',
    instrument: 'Flute',
    level: 4,
  },
  {
    image: require('~/assets/images/mocks/canon-in-D.PNG'),
    title: 'Canon In D',
    composer: 'Johann Pachelbel',
    instrument: 'Piano',
    level: 6,
  },
] as const;

export default defineComponent({
  setup(_props, context) {
    const featuredItems = sheetMusicExamples;
    return {
      featuredItems,
    };
  },
});
</script>
<style lang="scss" scoped>
#hero-paragraph
{
  &::first-letter
  {
    font-size: 3rem;
    line-height: 1rem;
    color: white;
    font-weight: bold;
    margin-right: 0.05rem;
  }
  text-indent: 1rem;
}
#image-wrapper
{
  aspect-ratio: 3 / 4;
}

#hero-section
{
  background-image: linear-gradient(360deg, rgb(34, 34, 34), rgba(34, 34, 34, 0)), url("https://lh3.googleusercontent.com/pw/AM-JKLUy-sIu3OaeOeC_5ALLNn_eZSaHBK90ufgtPB4t-IBm71Yhv9KQMAdROCGliuGBgBJbC6Liz6iMHRWEkVdIXLpFaNrrbX1FQKhhCb38XhRn-YDzFV-uBFWtHAuFjQdi_JWPkDgVsP1b4qXDwnaYcur7yA=w1698-h955-no?authuser=0");
}
</style>
