<template>
  <footer class="py-12">
    <div class="container">
      <div class="flex flex-wrap justify-between">
        <div class="lg:w-1/2 xl:w-2/5">
          <g-image quality="100" width="360px" src=""></g-image>
          <p class="pl-8 text-cafe-verde-amarelado">
            © 2020 - Café Brasil. Todos os direitos reservados. <br />
            Produtividade Antifrágil é uma realização Café Brasil Editorial
            Ltda. CNPJ: 05.809.981/0001-36.
          </p>
          <div class="flex justify-start pl-8 mt-8">
            <a
              href="https://www.instagram.com/lucianopires/?hl=pt-br"
              target="_blank"
              class="pr-2"
              ><g-image quality="100" src=""></g-image
            ></a>
            <a
              href="https://twitter.com/lucianopires"
              target="_blank"
              class="pr-2"
              ><g-image quality="100" src=""></g-image
            ></a>
            <a
              href="https://www.facebook.com/luciano.pires/"
              target="_blank"
              class="pr-2"
              ><g-image quality="100" src=""></g-image
            ></a>
          </div>
        </div>
        <div class="mt-16 lg:mt-0 pl-8 lg:pl-8 xl:w-1/3">
          <div class="text-cafe-verde-amarelado font-semibold py-8">
            <g-link to="/politica-de-cancelamento/" class="hover:underline">
              Política de cancelamento
            </g-link>
            &bull;
            <g-link to="/politica-de-privacidade/" class="hover:underline">
              Política de privacidade
            </g-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import CTA from '~/components/shared/Cta'
export default {
  name: 'DefaultFooter',
  components: {
    'call-to-action': CTA
  }
}
</script>

<style lang="scss">
footer {
  background: #03072a;
}
</style>
