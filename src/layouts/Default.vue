<template>
  <div class="layout overflow-x-hidden">
    <DefaultHeader v-if="!removeHeader" />
    <slot />
    <ReducedFooter v-if="reducedFooter" />
    <DefaultFooter v-else />
    <modal
      name="modal-video"
      classes="p-8 bg-white rounded"
      height="auto"
      @before-open="modalVideoData"
    >
      <div class="video-container">
        <iframe
          width="956"
          height="538"
          :src="currentVideo"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </modal>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import DefaultHeader from '~/components/DefaultHeader'
import ReducedFooter from '~/components/ReducedFooter'
import DefaultFooter from '~/components/DefaultFooter'

export default {
  props: {
    removeHeader: Boolean,
    reducedFooter: Boolean
  },
  components: {
    DefaultHeader,
    DefaultFooter,
    ReducedFooter
  },
  data() {
    return {
      currentVideo: null
    }
  },
  methods: {
    modalVideoData(event) {
      this.currentVideo = event.params.videoLink
    }
  }
}
</script>

<style lang="scss">
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

/******************************
  Lista
*******************************/
ul.lista {
  li {
    list-style-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2IiBoZWlnaHQ9IjYiIHZpZXdCb3g9IjAgMCA2IDYiPjxyZWN0IHdpZHRoPSI2IiBoZWlnaHQ9IjYiIGZpbGw9IiM0MkU5RDYiLz48L3N2Zz4=);
    margin-bottom: 0.25rem;
  }
}

/******************************
  Vídeo
*******************************/
.video-container {
  display: none;
}

.v--modal-box {
  .video-container {
    display: block;
  }
}

.popup__content {
  .video-container {
    display: block;
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
