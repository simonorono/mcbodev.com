<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: 'Header'
})
</script>

<template>
  <div class="mt-10 mx-2 sm:mt-20 lg:mx-0">
    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
      <h1 class="text-5xl font-bold">Simón Oroño</h1>
      <h2 class="font-medium">Computer Scientist & Software Developer</h2>
    </div>
    <hr class="mt-2">
  </div>
</template>
