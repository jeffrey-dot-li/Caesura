<template>
  <div>
    <navbar />
    <nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';
import navbar from '~/components/widgets/navbar.vue';

export default defineComponent({
  components: { navbar }
});
</script>
