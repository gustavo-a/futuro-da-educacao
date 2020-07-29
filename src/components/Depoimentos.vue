<template>
  <section id="alunos-section" class="pt-10 pb-32 relative bg-custom-blue-1">
    <Particles
      id="particles-depoimentos-right"
      color="#0A2B3F"
      :particleOpacity="0.7"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="4"
      linesColor="#0A2B3F"
      :linesWidth="1"
      :lineLinked="true"
      :linesOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      :clickMode="false"
    />
    <div class="container lg:px-16 xl:px-32">
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
              video-link="https://www.youtube.com/embed/WCgc8C-F76k"
            >
              <template #imagem>
                <g-image
                  src="~/assets/images/depoimentos/luciano-pires.jpg"
                  alt="Luciano Pires"
                />
              </template>
              <template #nome>
                Luciano Pires
              </template>
              <template #descricao>
                Palestrante
              </template>
            </Depoimento>
            <Depoimento
              class="glide__slide"
              video-link="https://www.youtube.com/embed/SeK2986i8zg"
            >
              <template #imagem>
                <g-image
                  src="~/assets/images/depoimentos/mauricio-vargas.jpg"
                  alt="Maurício Vargas"
                />
              </template>
              <template #nome>
                Mauricio Vargas
              </template>
              <template #descricao>
                Fundador do site Reclame Aqui
              </template>
            </Depoimento>
            <Depoimento
              class="glide__slide"
              video-link="https://www.youtube.com/embed/2oivSaxepYU"
            >
              <template #imagem>
                <g-image
                  src="~/assets/images/depoimentos/gustavo-carriconde.png"
                  alt="Gustavo Carriconde"
                />
              </template>
              <template #nome>
                Gustavo Carriconde
              </template>
              <template #descricao>
                Fundador do Resumocast
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
import Particles from 'particles.vue'

export default {
  components: {
    Depoimento,
    Particles
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
        1280: {
          perView: 3,
          gap: 40,
          peek: { before: 0, after: 0 }
        },
        767: {
          perView: 2,
          gap: 40,
          peek: { before: 0, after: 0 }
        },
        639: {
          perView: 1,
          gap: 30,
          peek: { before: 100, after: 200 }
        },
        530: {
          perView: 1,
          gap: 30,
          peek: { before: 100, after: 100 }
        },
        420: {
          perView: 1,
          gap: 30,
          peek: { before: 30, after: 30 }
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

#particles-depoimentos-right {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
