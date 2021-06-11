<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'
import Index from './components/Index.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Index,
  }
})
</script>

<template>
  <div class="min-h-screen max-w-screen-lg mx-auto">
    <header class="mx-2 lg:mx-0">
      <Header />
    </header>
  </div>
</template>
