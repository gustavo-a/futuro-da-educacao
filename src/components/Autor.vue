<template>
  <section class="bg-custom-darker-blue relative">
    <Particles
      id="particles-autor-left"
      color="#42E9D6"
      :particleOpacity="0.7"
      :particlesNumber="100"
      shapeType="circle"
      :particleSize="4"
      linesColor="#42E9D6"
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
    <div class="container py-32">
      <div class="flex flex-wrap justify-around">
        <div class="lg:w-1/3 px-4">
          <g-image src="~/assets/images/autor.png" quality="80" alt="Autor" />
        </div>
        <div class="lg:w-1/2 px-4">
          <h2 class="title-1">Conheça o Curador do Curso</h2>
          <div class="wysiwyg text-white">
            <p>
              Jornalista de tecnologia, Doutor em Ciência da Informação,
              escreve, ministra aulas e palestras, pesquisa sobre a Era Digital
              há mais de 40 anos.
            </p>
            <p>
              É Curador, professor e pesquisador da Bimodais – Futurismo
              Competitivo, primeira e única escola sobre futuro totalmente
              online, com base teórica nos pensadores canadenses.
            </p>
            <p>
              Ministra cursos e palestras por todo o país sobre a disrupção
              digital.
            </p>
            <p>
              É professor em vários cursos de pós-graduação no Brasil, publicou
              três livros sobre o Digital, ganhou o prêmio de Inovação da
              Revista Info e Top Entrevistado da Época Negócios.
            </p>
            <p>
              Tem na carteira mais de 500 clientes de todos os perfis e
              tamanhos. Já proferiu centenas de palestras com milhares de alunos
              atendidos
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Particles from 'particles.vue'
export default {
  components: {
    Particles
  }
}
</script>

<style lang="scss" scoped>
.title-1 {
  @apply .text-white .text-left;

  &::after {
    @apply .mr-auto .ml-0 .mt-2 .mb-8 .bg-white;
  }
}

#particles-autor-left {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
}
</style>
