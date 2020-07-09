<template>
  <Layout>
    <div class="bg-custom-darker-blue">
      <section class="bg-luciano-wrapper flex">
        <div class="container pb-12 bg-luciano mt-auto">
          <div class="flex pt-8 md:pt-32 pb-8 md:pb-20">
            <div class="sm:w-2/3 lg:w-2/5 px-4">
              <h1 class="quote">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              </h1>
            </div>
            <div
              class="hidden md:w-1/3 lg:w-1/2 px-4 md:flex justify-center align-middle"
            >
              <Popup v-model="videoPopup">
                <div class="video-container">
                  <iframe
                    width="956"
                    height="538"
                    src="https://www.youtube.com/embed/1lveKJ4cGfw"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </Popup>
              <button @click="videoPopup = !videoPopup">
                <PlayButton />
                <div class="sr-only">Assistir ao Vídeo</div>
              </button>
            </div>
          </div>
          <div class="flex justify-start mb-32 md:mb-0 md:mt-0 px-4">
            <call-to-action
              filled="blue1"
              :link="$static.generalData.hotmartUrl"
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
          <div class="w-full md:w-1/2 lg:w-1/4 px-4 my-4 lg:m-0 flex">
            <div class="w-1/3 flex justify-center">
              <Work class="text-custom-blue-1 fill-current" />
            </div>
            <div class="w-2/3 self-center md:self-start">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 px-4 my-4 lg:m-0 flex">
            <div class="w-1/3 flex justify-center">
              <Work class="text-custom-blue-1 fill-current" />
            </div>
            <div class="w-2/3 self-center md:self-start">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore.
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 px-4 my-4 lg:m-0 flex">
            <div class="w-1/3 flex justify-center">
              <Work class="text-custom-blue-1 fill-current" />
            </div>
            <div class="w-2/3 self-center md:self-start">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 my-4 lg:m-0 px-4 flex">
            <div class="w-1/3 flex justify-center">
              <Work class="text-custom-blue-1 fill-current" />
            </div>
            <div class="w-2/3 self-center md:self-start">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam,
              odio.
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-20 pb-32">
      <div class="container">
        <div class="md:w-2/3 xl:w-1/3 m-auto">
          <h2 class="title-1 text-custom-red">
            Lorem ipsum dolor sit amet.
          </h2>
        </div>
        <div class="flex justify-center">
          <div
            class="wysiwyg font-sans1 md:w-11/12 lg:w-2/3 my-16 mx-4 sm:mx-8"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad veniam
              modi aliquam et repellendus sunt quo, commodi recusandae, debitis
              tempore quae labore. Obcaecati est officiis neque, sed saepe
              perspiciatis debitis deserunt eveniet tempore!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              ipsam eaque corrupti dicta pariatur! Dignissimos perspiciatis ad
              illo inventore, <b>excepturi aperiam accusamus</b> sed repellat
              quasi in quo enim recusandae eaque libero! Similique sit deleniti
              eum cumque possimus odit, explicabo debitis necessitatibus nulla
              eaque modi totam?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
              iure aspernatur similique accusantium voluptatibus optio omnis
              quae totam ullam quod, hic obcaecati iste reiciendis, cumque qui
              rerum quas dolore quos! Fugiat maiores sit mollitia laudantium rem
              velit est?
            </p>
            <h3 class="title-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae.
            </h3>
          </div>
        </div>
        <div class="flex justify-center">
          <call-to-action
            filled="blue1"
            :link="$static.generalData.hotmartUrl"
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
          <div class="w-full md:w-1/2 px-4">
            <div class="wysiwyg">
              <p class="text-center">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatem, architecto suscipit deserunt molestias nihil et
                perspiciatis dignissimos soluta laborum ullam maxime tenetur
                alias culpa nemo ratione officiis mollitia natus esse impedit
                expedita. Repellendus possimus soluta illum nulla voluptatibus
                autem delectus hic necessitatibus eligendi harum ducimus a illo,
                fugiat velit voluptates odio optio sit ratione veniam deserunt?
              </p>
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
  generalData(id: "1"){
    hotmartUrl
  }
}
</static-query>

<script>
import PlayButton from '~/assets/images/play.svg'
import RightArrow from '~/assets/images/right-arrow.svg'
import Work from '~/assets/images/work.svg'
import CTA from '~/components/shared/Cta'

import Autor from '~/components/Autor'
import Modulos from '~/components/Modulos'
import Depoimentos from '~/components/Depoimentos'
import Assine from '~/components/Assine'
import Popup from '~/components/shared/Popup'
import BlocoCTA from '~/components/BlocoCTA'

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
    link: [{ rel: 'canonical', href: 'https://produtividadeantifragil.com.br' }]
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
    Popup,
    Work
  },
  data() {
    return {
      videoPopup: false
    }
  }
}
</script>

<style lang="scss">
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
ul.lista {
  li {
    list-style-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2IiBoZWlnaHQ9IjYiIHZpZXdCb3g9IjAgMCA2IDYiPjxyZWN0IHdpZHRoPSI2IiBoZWlnaHQ9IjYiIGZpbGw9IiM0MkU5RDYiLz48L3N2Zz4=);
    margin-bottom: 0.25rem;
  }
}

/******************************
  Títulos
*******************************/

.title-1,
.title-2 {
  @apply .font-sans2;
}

.title-1 {
  @apply .text-3xl .text-center .relative .font-bold;

  &::after {
    content: '';
    @apply .block .m-auto .mt-6 text-current bg-current;
    height: 3px;
    width: 125px;
  }
}

.title-2,
.wysiwyg .title-2 {
  @apply .text-2xl .font-normal;

  @media (max-width: 360px) {
    @apply .text-xl;
  }
}
.v--modal-box,
.popup__content {
  .video-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
  }

  .video-container iframe,
  .video-container object,
  .video-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
