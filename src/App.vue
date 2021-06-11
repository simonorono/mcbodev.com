<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
  }
})
</script>

<template>
  <div class="min-h-screen max-w-screen-lg mx-auto">
    <div class="mx-2 lg:mx-0">
      <header>
        <Header />
      </header>

      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
