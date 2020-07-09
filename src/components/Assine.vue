<template>
  <section class="bg-custom-blue-2 py-32" id="assine-bloco">
    <div class="container px-4">
      <div class="flex justify-center mb-16">
        <h2 class="title-1">
          <a :href="$static.generalData.hotmartUrl">Assine agora</a>
        </h2>
      </div>
      <div class="flex flex-wrap md:justify-around">
        <div
          class="w-full md:w-1/2 lg:w-1/3 rounded-lg bg-gray-100 text-center px-4 py-10 self-center mb-16 md:mb-0"
        >
          <!--  <div
            class="font-sans2 text-cafe-verde-amarelado text-3xl mb-2"
          >
            De R$ <span class="line-through">469,00</span>
          </div> -->
          <span>Por apenas:</span>
          <div class="grid font-sans2 font-bold text-custom-red my-4">
            <div class="text-2xl">10x de</div>
            <div class="text-5xl">R$ 00,00</div>
          </div>
          <span>Total:R$000,00</span>
        </div>
        <div class="w-full md:w-1/3 text-white">
          <p class="mb-4 font-bold text-justify">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium, et quisquam saepe blanditiis quo pariatur ut.
            Temporibus.
          </p>
          <ul class="lista text-justify">
            <li>
              Lorem ipsum dolor sit amet consectetur.
            </li>
            <li>
              Lorem ipsum dolor sit amet.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
              beatae!
            </li>
            <li>Lorem ipsum dolor sit amet consectetur.</li>
            <li>
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </li>
          </ul>
          <call-to-action
            filled="blue1"
            :link="$static.generalData.hotmartUrl"
            size="lg"
            class="shadow-2xl mt-6 transform transition-transform duration-300 hover:scale-110"
          >
            <span class="pr-3 text-custom-darker-blue font-bold">
              Inscreva-se
            </span>
            <RightArrow class="text-custom-darker-blue fill-current" />
          </call-to-action>
        </div>
      </div>
    </div>
  </section>
</template>

<static-query>
query{
  generalData(id: "1"){
    hotmartUrl
  }
}
</static-query>

<script>
import CTA from '~/components/shared/Cta'
import RightArrow from '~/assets/images/right-arrow.svg'

export default {
  components: {
    'call-to-action': CTA,
    RightArrow
  }
}
</script>

<style lang="scss">
#assine-bloco {
  h2.title-1 {
    @apply .text-white;

    &::after {
      @apply .bg-white;
    }
  }
}
</style>
