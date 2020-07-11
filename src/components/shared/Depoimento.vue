<template>
  <div class="depoimentoWrapper w-11/12 sm:w-2/3 md:w-5/12 lg:w-1/5">
    <div
      class="depoimento cursor-pointer overflow-hidden relative flex rounded-lg"
      @click="abrirDepoimento"
    >
      <slot name="imagem" />
      <div class="absolute top-0 bottom-0 table m-auto w-full z-30">
        <PlayButton class="play" />
      </div>
    </div>
    <section class="flex">
      <div class="p-4 bottom-0 h-full w-full flex flex-col justify-end">
        <div
          class="font-serif text-xl font-bold text-cafe-verde-amarelado italic"
        >
          <slot name="nome" />
        </div>
        <div
          class="font-sans1 text-custom-darker-blue italic font-semibold text-lg"
        >
          <slot name="descricao" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PlayButton from '~/assets/images/play.svg'

export default {
  name: 'Depoimento',
  props: {
    videoLink: String
  },
  components: {
    PlayButton
  },
  methods: {
    abrirDepoimento() {
      this.$modal.show('modal-video', { videoLink: this.videoLink })
    }
  }
}
</script>

<style lang="scss" scoped>
.depoimento {
  height: 300px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 15;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5) 50%);
  }

  @media (max-width: 767px) {
    height: 400px;
  }
}
img {
  @apply .object-cover .w-full .h-full;
}

.play {
  margin: auto;
  transform: scale(0.6);
}
</style>
