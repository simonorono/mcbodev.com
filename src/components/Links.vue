<script>
import { defineComponent } from "vue"

export default defineComponent({
  name: 'Links',

  setup() {
    const links = [
      {
        name: 'twitter',
        url: 'https://twitter.com/simonorono',
        newTab: true,
      },
      {
        name: 'github',
        url: 'https://github.com/simonorono',
        newTab: true
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/simonorono',
        newTab: true
      }
    ]

    return { links }
  }
})
</script>

<template>
  <div class="space-x-2">
    <template v-for="link in links">
      <a
        v-if="link.newTab"
        :href="link.url"
        class="underline"
        target="_blank"
        rel="noreferrer"
      >
        {{ link.name }}
      </a>
    </template>
  </div>
</template>
