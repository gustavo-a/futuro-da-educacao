<template>
  <footer class="py-12">
    <div class="container">
      <div class="flex flex-wrap justify-between px-4">
        <div class="lg:w-1/2 xl:w-2/5">
          <g-image class="logo" src="@/assets/images/logo.png"> </g-image>
          <p class="mt-8 text-white">
            © 2020 - Pontonet Servicos Integrados LTDA. Todos os direitos
            reservados. <br />
            CNPJ: 00.977.020/0001-17.
          </p>
          <div class="flex justify-start mt-8">
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
        <div class="mt-16 lg:mt-0 pl-0 md:pl-8 xl:w-1/3">
          <div>
            <g-link
              to="/duvidas/"
              class="text-custom-blue-1 text-sm inline-flex border border-custom-blue-1 rounded font-sans2 italic py-4 px-8 mr-6 leading-none"
            >
              Dúvidas
            </g-link>
            <call-to-action :link="$static.metadata.loginUrl" size="lg" border>
              <span class="text-custom-blue-1 text-sm">Login</span>
            </call-to-action>
          </div>
          <div class="text-custom-blue-1 font-semibold py-8">
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
    <div class="container mt-8">
      <div class="flex justify-center">
        <div class="w-full px-4 wysiwyg text-xs text-white"></div>
      </div>
    </div>
  </footer>
</template>

<static-query>
query{
  metadata{
    hotmartUrl,
    loginUrl
  }
}
</static-query>

<script>
import CTA from '~/components/shared/Cta'
export default {
  name: 'DefaultFooter',
  components: {
    'call-to-action': CTA
  }
}
</script>

<style lang="scss" scoped>
footer {
  .wysiwyg {
    p {
      @apply .mb-2 .leading-tight;
    }
  }

  .logo {
    max-width: 300px;
  }
}
</style>
