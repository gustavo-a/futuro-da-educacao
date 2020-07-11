<template>
  <section class="bg-custom-blue-2 py-32" id="assine-bloco">
    <div class="container px-4">
      <div class="flex justify-center mb-16">
        <h2 class="title-1">
          <a :href="$static.metadata.hotmartUrl">Assine agora</a>
        </h2>
      </div>
      <div class="flex flex-wrap md:justify-around">
        <div
          class="w-full md:w-1/2 lg:w-1/3 rounded-lg bg-gray-100 text-center px-4 py-10 self-center mb-16 md:mb-0 shadow-2xl"
        >
          <div
            v-if="$static.metadata.fromPrice"
            class="font-sans2 text-2xl mb-2"
          >
            De R$
            <span class="line-through">{{
              $static.metadata.fromPrice.toLocaleString('pt-BR')
            }}</span>
          </div>
          <span>Por apenas:</span>
          <div class="grid font-sans2 font-bold text-custom-red my-4">
            <div class="text-2xl">{{ $static.metadata.installments }}x de</div>
            <div class="text-5xl">{{ installmentPrice }}</div>
          </div>
          <span>Total:{{ price }}</span>
        </div>
        <div class="w-full md:w-1/3 text-white">
          <p class="mb-4">
            “Você pode ignorar o futuro, mas não poderá ignorar as consequências
            que terá ao ignorá-lo.” <br />
            (Nepô, inspirado por Ayn Rand).
          </p>
          <call-to-action
            filled="red1"
            :link="$static.metadata.hotmartUrl"
            size="lg"
            class="shadow-2xl mt-6 transform transition-transform duration-300 hover:scale-110"
          >
            <span class="pr-3 text-white font-bold">
              QUERO ME INSCREVER
            </span>
            <RightArrow class="text-white fill-current" />
          </call-to-action>
        </div>
      </div>
    </div>
  </section>
</template>

<static-query>
query{
  metadata{
    hotmartUrl,
    fromPrice,
    productPrice,
    installments,
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
  },
  computed: {
    price() {
      return this.$static.metadata.productPrice.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        style: 'currency',
        currency: 'BRL'
      })
    },
    installmentPrice() {
      const p =
        this.$static.metadata.productPrice / this.$static.metadata.installments

      return p
        .toLocaleString('pt-BR', {
          minimumFractionDigits: 3,
          style: 'currency',
          currency: 'BRL'
        })
        .slice(0, -1)
    }
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
