<template>
  <section class="py-16 bg-gradient">
    <div class="container bg-white rounded">
      <div class="flex justify-center">
        <div
          class="w-11/12 md:w-5/6 flex flex-wrap px-4 sm:px-16 py-20 items-center justify-between cta-bg rounded-lg"
        >
          <div class="w-full md:w-1/2 mb-8 md:mb-0">
            <p class="text-custom-red font-bold text-xl font-sans2">
              Entenda por que o Sapiens vai promover uma mudança profunda e
              disruptiva na forma de aprender nos próximos anos.
            </p>
          </div>
          <div
            class="w-full md:w-1/2 lg:w-1/3 flex justify-start md:justify-end lg:block"
          >
            <call-to-action
              filled="blue1"
              :link="$static.metadata.hotmartUrl"
              size="lg"
              class="shadow-2xl transform transition-transform duration-300 hover:scale-110"
            >
              <span class="pr-3 text-custom-darker-blue font-bold">
                Inscreva-se
              </span>
              <RightArrow class="text-custom-darker-blue fill-current" />
            </call-to-action>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<static-query>
query{
  metadata{
    hotmartUrl
  }
}
</static-query>

<script>
import CTA from '~/components/shared/Cta.vue'
import RightArrow from '~/assets/images/right-arrow.svg'

export default {
  name: 'BlocoCTA',
  components: {
    'call-to-action': CTA,
    RightArrow
  }
}
</script>

<style lang="scss" scoped>
.bg-gradient {
  background: linear-gradient(#0a2b3f 50%, #42e9d6 50%);
}

.cta-bg {
  @media (max-width: 767px) {
    background: #a4c546;
  }
}
</style>
