<template>
  <Layout>
    <div class="container px-4 my-16">
      <div class="flex justify-center">
        <div class="text-center">
          <p
            style="font-size: calc(30px + 10vw)"
            class="font-sans2 text-cafe-verde-amarelado"
          >
            404
          </p>
          <p class="text-xl">
            Oops, parece que essa página não existe...
          </p>
          <call-to-action
            filled="blue1"
            :link="$static.metadata.hotmartUrl"
            size="lg"
            class="shadow-2xl mt-8 transform transition-transform duration-300 hover:scale-110"
          >
            <span class="pr-3">Voltar para a Home</span>
          </call-to-action>
        </div>
      </div>
    </div>
  </Layout>
</template>

<static-query>
query{
  metadata{
    hotmartUrl
  }
}
</static-query>

<script>
import PlayButton from '~/assets/images/play.svg'
import RightArrow from '~/assets/images/right-arrow.svg'
import CTA from '~/components/shared/Cta'

export default {
  metaInfo: {
    title: 'Conheça a guerra que mudou tudo!'
  },
  components: {
    PlayButton,
    RightArrow,
    'call-to-action': CTA
  },
  data() {
    return {
      videoPopup: false
    }
  }
}
</script>

<style lang="scss" scoped>
.quote {
  @apply .font-sans2 .text-4xl .relative .inline;

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
    list-style-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2IiBoZWlnaHQ9IjYiIHZpZXdCb3g9IjAgMCA2IDYiPjxyZWN0IHdpZHRoPSI2IiBoZWlnaHQ9IjYiIGZpbGw9IiNiMjk5NjUiLz48L3N2Zz4=);
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
  @apply .text-3xl .text-center .relative;

  &::after {
    content: '';
    @apply .block .m-auto .mt-6;
    height: 5px;
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
</style>
