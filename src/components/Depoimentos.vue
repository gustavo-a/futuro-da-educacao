<template>
  <section id="alunos-section" class="pt-10 pb-32 relative bg-custom-blue-1">
    <div class="container px-32">
      <div class="flex justify-center mb-16">
        <h2 class="title-1">
          Depoimentos
        </h2>
      </div>
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <div class="glide__slides">
            <Depoimento
              class="glide__slide"
              video-link="https://www.youtube.com/embed/Ga4cgvplTFc"
            >
              <template #imagem>
                <g-image src="https://placedog.net/400/500" alt="Fulano" />
              </template>
              <template #nome>
                Fulano
              </template>
              <template #descricao>
                Lorem ipsum dolor sit amet.
              </template>
            </Depoimento>
            <Depoimento
              class="glide__slide"
              video-link="https://www.youtube.com/embed/Ga4cgvplTFc"
            >
              <template #imagem>
                <g-image src="https://placedog.net/400/500" alt="Fulano" />
              </template>
              <template #nome>
                Fulano
              </template>
              <template #descricao>
                Lorem ipsum dolor sit amet.
              </template>
            </Depoimento>
            <Depoimento
              class="glide__slide"
              video-link="https://www.youtube.com/embed/Ga4cgvplTFc"
            >
              <template #imagem>
                <g-image src="https://placedog.net/400/500" alt="Fulano" />
              </template>
              <template #nome>
                Fulano
              </template>
              <template #descricao>
                Lorem ipsum dolor sit amet.
              </template>
            </Depoimento>
            <Depoimento
              class="glide__slide"
              video-link="https://www.youtube.com/embed/Ga4cgvplTFc"
            >
              <template #imagem>
                <g-image src="https://placedog.net/400/500" alt="Fulano" />
              </template>
              <template #nome>
                Fulano
              </template>
              <template #descricao>
                Lorem ipsum dolor sit amet.
              </template>
            </Depoimento>
            <Depoimento
              class="glide__slide"
              video-link="https://www.youtube.com/embed/Ga4cgvplTFc"
            >
              <template #imagem>
                <g-image src="https://placedog.net/400/500" alt="Fulano" />
              </template>
              <template #nome>
                Fulano
              </template>
              <template #descricao>
                Lorem ipsum dolor sit amet.
              </template>
            </Depoimento>
            <Depoimento
              class="glide__slide"
              video-link="https://www.youtube.com/embed/Ga4cgvplTFc"
            >
              <template #imagem>
                <g-image src="https://placedog.net/400/500" alt="Fulano" />
              </template>
              <template #nome>
                Fulano
              </template>
              <template #descricao>
                Lorem ipsum dolor sit amet.
              </template>
            </Depoimento>
          </div>
          <div class="glide__bullets" data-glide-el="controls[nav]">
            <button class="glide__bullet" data-glide-dir="=0"></button>
            <button class="glide__bullet" data-glide-dir="=1"></button>
            <button class="glide__bullet" data-glide-dir="=2"></button>
            <button class="glide__bullet" data-glide-dir="=3"></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Depoimento from '~/components/shared/Depoimento'
import Glide from '@glidejs/glide'

export default {
  components: {
    Depoimento
  },
  mounted() {
    new Glide('.glide', {
      type: 'slider',
      perView: 3,
      gap: 100,
      autoplay: 2000,
      bound: true,
      peek: { before: 0, after: 0 },
      breakpoints: {
        1300: {
          perView: 4,
          gap: 40,
          peek: { before: 0, after: 0 }
        },
        1023: {
          perView: 3,
          gap: 40,
          peek: { before: 0, after: 0 }
        },
        800: {
          perView: 2,
          gap: 40,
          peek: { before: 0, after: 0 }
        },
        639: {
          perView: 1,
          gap: 30,
          peek: { before: 0, after: 250 }
        },
        530: {
          perView: 1,
          gap: 30,
          peek: { before: 0, after: 100 }
        }
      }
    }).mount()
  }
}
</script>

<style lang="scss">
@import 'node_modules/@glidejs/glide/src/assets/sass/glide.core';

#alunos-section {
  h2.title-1 {
    @apply .text-white;

    &::after {
      @apply hidden;
    }
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(100%);
    left: 0;
    margin: auto;
    height: 5px;
    width: 80%;
  }
}

.glide {
  &__bullets {
    @apply flex justify-center mt-8;
    .glide__bullet {
      @apply rounded-full bg-white cursor-pointer m-2;
      width: 20px;
      height: 20px;

      &--active {
        @apply bg-custom-darker-blue;
      }
    }
  }
}
</style>
