<template>
  <div class="inline-flex">
    <a
      class="border-custom-blue-1 text-white rounded font-sans2 flex"
      v-if="link"
      :class="{
        'bg-custom-blue-1': filled === 'blue1',
        'bg-custom-red': filled === 'red1',
        'py-3 px-4': size === 'sm',
        'p-4': size === 'md',
        'py-4 px-8': size === 'lg',
        border: border
      }"
      :href="linkUTM"
    >
      <slot />
    </a>

    <div
      class="border-custom-blue-1 text-white rounded font-sans2 italic cursor-pointer"
      v-else
      :class="{
        'bg-cafe-verde-amarelado': filled === 'bege',
        'bg-guten-cinza-1': filled === 'cinza-1',
        'p-4': size === 'md',
        'py-4 px-8': size === 'lg',
        border: border
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CTA',
  props: {
    link: String,
    filled: String,
    size: String,
    border: Boolean
  },
  data() {
    return {
      linkUTM: ''
    }
  },
  mounted() {
    this.linkUTM = this.link + window.location.search
  }
}
</script>

<style lang="scss" scoped>
a,
button {
  @apply .leading-none;
  * {
    @apply .inline;
  }
}
</style>
