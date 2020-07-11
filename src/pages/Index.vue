<template>
  <Layout>
    <div class="bg-custom-darker-blue">
      <section class="flex">
        <div class="container relative pb-12 mt-auto">
          <GirlVR class="absolute top-0 right-0 left-0 m-auto h-full z-0" />
          <div class="flex pt-8 md:pt-32 pb-8 md:pb-20">
            <Particles
              id="particles-header-left"
              class="tsparticles"
              color="#dedede"
              :particleOpacity="0.7"
              :particlesNumber="100"
              shapeType="circle"
              :particleSize="4"
              linesColor="#dedede"
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
            <Particles
              id="particles-header-right"
              class="tsparticles"
              color="#dedede"
              :particleOpacity="0.7"
              :particlesNumber="100"
              shapeType="circle"
              :particleSize="4"
              linesColor="#dedede"
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
            <div class="sm:w-2/3 lg:w-2/5 px-4">
              <h1 class="quote">
                {{ $static.metadata.indexPage.header.textHeader }}
              </h1>
            </div>
            <div
              class="hidden md:w-1/3 lg:w-1/2 px-4 md:flex justify-center align-middle z-10"
            >
              <button @click="openVideo">
                <PlayButton />
                <div class="text-custom-blue-1 font-sans1 font-bold mt-3">
                  Assista ao Vídeo
                </div>
              </button>
            </div>
          </div>
          <div class="flex justify-start mb-32 md:mb-0 md:mt-0 px-4">
            <call-to-action
              filled="blue1"
              :link="$static.metadata.hotmartUrl"
              size="lg"
              class="shadow-2xl transform transition-transform duration-300 hover:scale-110"
            >
              <span class="pr-3 text-custom-darker-blue font-bold"
                >Inscreva-se</span
              >
              <RightArrow class="text-custom-darker-blue fill-current" />
            </call-to-action>
          </div>
        </div>
      </section>
    </div>
    <section class="bg-custom-darker-blue pt-16 pb-8">
      <div class="container">
        <div class="flex flex-wrap text-white font-sans2">
          <!-- inicio -->
          <div
            class="w-full md:w-1/2 lg:w-1/4 px-4 my-4 lg:m-0 flex"
            v-for="text in $static.metadata.indexPage.header.bulletsHeader"
            :key="text.replace(/\s+/g, '')"
          >
            <div class="w-1/3 flex justify-center">
              <Cpu class="text-custom-blue-1 fill-current" />
            </div>
            <div class="w-2/3 self-center md:self-start">
              {{ text }}
            </div>
          </div>
          <!-- fim -->
        </div>
      </div>
    </section>
    <section class="pt-20 pb-32">
      <div class="container">
        <div class="flex justify-center">
          <h2 class="title-1 text-custom-blue-2">
            Uma visão sobre o Futuro da Educação <br />
            que te fará sair de Matrix!
          </h2>
        </div>
        <div class="flex justify-center">
          <div
            class="wysiwyg font-sans1 md:w-11/12 lg:w-2/3 my-16 mx-4 sm:mx-8"
          >
            <p>
              Uma visão sobre o Futuro da Educação que te fará sair de Matrix!
            </p>
            <p>
              Depois deste curso, você <b>NUNCA</b> mais verá o futuro do mesmo
              jeito. Um mergulho filosófico, teórico, metodológico e operacional
              para você conseguir entender a dimensão da mudança que está por
              vir e estar melhor preparado para ela.
            </p>
            <p>
              Nepomuceno é conhecido pela capacidade de trocar a “placa-mãe” dos
              seus alunos. Estamos convidando você para vir tomar a “pílula
              vermelha”.
            </p>
            <p>Bora?</p>
          </div>
        </div>
        <div class="flex justify-center">
          <call-to-action
            filled="blue1"
            :link="$static.metadata.hotmartUrl"
            size="lg"
            class="shadow-2xl transform transition-transform duration-300 hover:scale-110"
          >
            <span class="pr-3 text-custom-darker-blue font-bold"
              >Inscreva-se</span
            >
            <RightArrow class="text-custom-darker-blue fill-current" />
          </call-to-action>
        </div>
      </div>
    </section>
    <!-- Outras sessões -->
    <Autor />
    <BlocoCTA />
    <Depoimentos />

    <section class="py-32">
      <div class="container px-4">
        <div class="flex justify-center mb-16">
          <h2 class="title-1 text-custom-red">
            Quem vai se beneficiar deste conteúdo
          </h2>
        </div>
        <div class="flex flex-wrap justify-center">
          <div class="w-full px-4">
            <div class="wysiwyg flex flex-wrap">
              <div class="w-full md:w-1/2">
                <ul class="lista">
                  <li>Educadores;</li>
                  <li>Empreendedores de Educação;</li>
                  <li>Professores;</li>
                  <li>Pais;</li>
                </ul>
              </div>
              <div class="w-full md:w-1/2">
                <ul class="lista">
                  <li>Alunos;</li>
                  <li>Estudantes e Pesquisadores de Pedagogia;</li>
                  <li>Lideranças Políticas;</li>
                  <li>Cidadãos Inquietos.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Assine />
  </Layout>
</template>

<static-query>
query{
  metadata{
    hotmartUrl,
    indexPage {
      header{
        textHeader,
        videoUrl,
        bulletsHeader
      }
    },
  }
}
</static-query>

<script>
import PlayButton from '~/assets/images/play.svg'
import RightArrow from '~/assets/images/right-arrow.svg'
import GirlVR from '~/assets/images/girl-vr-lines.svg'
import Cpu from '~/assets/images/cpu.svg'
import CTA from '~/components/shared/Cta'

import Autor from '~/components/Autor'
import Modulos from '~/components/Modulos'
import Depoimentos from '~/components/Depoimentos'
import Assine from '~/components/Assine'
import BlocoCTA from '~/components/BlocoCTA'

import Particles from 'particles.vue'

import 'wysiwyg.css'

export default {
  metaInfo: {
    title: 'Como aumentar sua performance em meio a adversidades',
    meta: [
      {
        key: 'description',
        name: 'description',
        content:
          'Um curso sobre Produtividade para quem quer ir além das ações táticas e mergulhar na estratégia: desenvolver um Olhar Produtivo. Provocativo, irreverente e com um material de apoio riquíssimo que em sua maior parte você não encontra aqui no Brasil.'
      }
    ],
    link: [{ rel: 'canonical', href: '' }]
  },
  components: {
    PlayButton,
    RightArrow,
    'call-to-action': CTA,
    Modulos,
    Autor,
    Depoimentos,
    BlocoCTA,
    Assine,
    Cpu,
    Particles,
    GirlVR
  },
  methods: {
    openVideo() {
      this.$modal.show('modal-video', {
        videoLink: this.videoLink
      })
    }
  },
  computed: {
    videoLink() {
      return this.$static.metadata.indexPage.videoUrl
    }
  }
}
</script>

<style lang="scss" scoped>
.quote {
  @apply .text-white .font-sans2 .text-5xl .font-bold .relative .inline .leading-tight;

  @media (max-width: 1024px) {
    @apply .text-3xl;
  }

  @media (max-width: 500px) {
    @apply .text-2xl;
  }

  @media (max-width: 360px) {
    @apply .text-xl;
  }
}

.tsparticles {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 0;
}

#particles-header-left {
  left: 0;
  transform: translateX(-50%);
}

#particles-header-right {
  right: 0;
  transform: translateX(50%);
}
</style>
