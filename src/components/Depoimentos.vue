<template>
  <section id="depoimentos-section" class="pt-10 pb-32 relative">
    <div class="container">
      <div class="flex justify-center mb-16">
        <h2 class="title-1">
          Depoimentos
        </h2>
      </div>
      <div class="flex flex-wrap justify-center md:justify-evenly">
        <Depoimento video-link="https://www.youtube.com/embed/J41n4b_JWy0">
          <template #imagem>
            <g-image src="" alt="Gustavo Cerbasi - Economista" />
          </template>
          <template #nome>
            Gustavo Cerbasi
          </template>
          <template #descricao>
            Economista
          </template>
        </Depoimento>
        <Depoimento video-link="https://www.youtube.com/embed/y9KF8VuPXhM">
          <template #imagem>
            <g-image src="" alt="Adalberto Piotto - Jornalista" />
          </template>
          <template #nome>
            Adalberto Piotto
          </template>
          <template #descricao>
            Jornalista
          </template>
        </Depoimento>
        <Depoimento video-link="https://www.youtube.com/embed/OjkP_Kibylk">
          <template #imagem>
            <g-image src="" alt="Dado Schneider - Palestrante" />
          </template>
          <template #nome>
            Dado Schneider
          </template>
          <template #descricao>
            Escritor e Palestrante
          </template>
          <template #conteudo>
            <div class="video-container">
              <iframe
                width="956"
                height="538"
                src="https://www.youtube.com/embed/OjkP_Kibylk"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </template>
        </Depoimento>
        <Depoimento video-link="https://www.youtube.com/embed/8G-e3hKrQc0">
          <template #imagem>
            <g-image src="" alt="Bruno Garschagen - Escritor" />
          </template>
          <template #nome>
            Bruno Garschagen
          </template>
          <template #descricao>
            Cientista Político e Escritor
          </template>
        </Depoimento>
      </div>
    </div>
  </section>
</template>

<script>
import Depoimento from '~/components/shared/Depoimento'
export default {
  name: 'Depoimentos',
  components: {
    Depoimento
  },
  methods: {
    modalData() {}
  }
}
</script>

<style lang="scss">
#depoimentos-section {
  h2.title-1 {
    @apply .text-white;

    &::after {
      @apply .bg-white;
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
</style>
