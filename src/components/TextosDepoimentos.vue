<template>
  <section class="py-32 bg-gray-200">
    <div class="container">
      <div class="flex justify-center">
        <div class="w-5/6 lg:w-2/3 xl:w-1/2 relative">
          <div class="glide text-depo">
            <div data-glide-el="track" class="glide__track">
              <ul class="glide__slides">
                <li class="glide__slide">
                  <p class="title-2">
                    “Sou viciada em cursos e esse foi, sem dúvida, o melhor que
                    já fiz!”
                  </p>
                  <div class="text-center mt-8">
                    <div class="font-bold">Lisandra Maioli</div>
                  </div>
                </li>
                <li class="glide__slide">
                  <p class="title-2">
                    “O curso te oferece clara visão do momento civilizacional e
                    humano pelo qual estamos passando.”
                  </p>
                  <div class="text-center mt-8">
                    <div class="font-bold">Holden Macedo da Silva</div>
                  </div>
                </li>
                <li class="glide__slide">
                  <p class="title-2">
                    “Penso que entender os novos paradigmas é a contribuição
                    mais importante da escola”
                  </p>
                  <div class="text-center mt-8">
                    <div class="font-bold">Álvaro Ademir Fauth</div>
                  </div>
                </li>
                <li class="glide__slide">
                  <p class="title-2">
                    “O curso é uma criptonita nas mentalidades atrasadas”
                  </p>
                  <div class="text-center mt-8">
                    <div class="font-bold">Claudia Riecken</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="controls left-0 md:ml-32" @click="slider.go('<')">
            <BigArrow class="inverter fill-current text-custom-darker-blue" />
            <div class="sr-only">Depoimento anterior</div>
          </div>
          <div class="controls right-0 md:mr-32" @click="slider.go('>')">
            <BigArrow class="fill-current text-custom-darker-blue" />
            <div class="sr-only">Próximo depoimento</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
import BigArrow from '~/assets/images/big-arrow.svg'

export default {
  name: 'DepoimentosSlider',
  components: {
    BigArrow
  },
  data() {
    return {
      slider: null
    }
  },
  mounted() {
    this.slider = new Glide('.text-depo', {
      autoplay: 6000,
      perView: 1
    })
    this.slider.mount()
  }
}
</script>

<style lang="scss" scoped>
.title-2 {
  @apply .text-center;
}

.controls {
  @apply .absolute .bottom-0 .font-bold .cursor-pointer .text-3xl .font-serif;

  @media (max-width: 767px) {
  }
}

.inverter {
  transform: rotate(180deg);
}
</style>
