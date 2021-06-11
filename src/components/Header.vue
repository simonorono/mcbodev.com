<script>
import { defineComponent } from "vue"
import Links from './Links.vue'

export default defineComponent({
  name: 'Header',
  components: {
    Links
  }
})
</script>

<template>
  <div class="mt-10 sm:mt-20 mb-4">
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
      <h1 class="text-5xl font-bold">Simón Oroño</h1>
      <h2 class="font-medium">Computer Scientist & Software Developer</h2>
    </div>
    <hr class="mt-2 mb-1">
    <Links />
  </div>

</template>
