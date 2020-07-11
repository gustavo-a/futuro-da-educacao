<template>
  <header class="bg-custom-darker-blue">
    <!-- <Countdown
      :starttime="new Date()"
      endtime="Jun 19, 2020 0:59:59"
      trans='{  
         "day":"Dias",
         "hours":"Horas",
         "minutes":"Minutos",
         "seconds":"Segundos",
         "expired":"Event has been expired.",
         "running":"Para encerrarmos as vendas",
         "upcoming":"Till start of event.",
         "status": {
            "expired":"Expired",
            "running":"Running",
            "upcoming":"Future"
           }}'
    /> -->
    <div class="container bg-linha">
      <div class="flex flex-wrap justify-between py-4">
        <div class="px-4 w-full sm:w-1/2">
          <g-link to="/" id="logo-header">
            <Logo />
          </g-link>
        </div>

        <div
          class="pr-2 sm:px-4 ml-auto sm:ml-0 text-left hidden md:flex items-start"
        >
          <call-to-action
            filled="blue1"
            :link="$static.metadata.hotmartUrl"
            size="sm"
            class="sm:mx-2 text-sm sm:text-base"
          >
            <span class="text-custom-darker-blue font-bold">Inscreva-se</span>
          </call-to-action>
          <call-to-action
            border
            link="https://hotmart.com"
            size="sm"
            class="ml-2 sm:mx-2 text-sm sm:text-base"
            style="display:contents"
          >
            <User /> <span class="pl-3 text-cafe-verde-amarelado">Login</span>
          </call-to-action>
        </div>
      </div>
    </div>
  </header>
</template>

<static-query>
query{
  metadata{
    hotmartUrl
  }
}
</static-query>

<script>
import CTA from '~/components/shared/Cta'
import Countdown from '~/components/shared/Countdown'
import Logo from '~/assets/images/logo.svg'
import User from '~/assets/images/user.svg'

export default {
  name: 'DefaultHeader',
  components: {
    'call-to-action': CTA,
    Countdown,
    Logo,
    User
  }
}
</script>

<style lang="scss">
#logo-header {
  svg {
    max-width: 300px;
  }

  @media (max-width: 639px) {
    max-width: 100%;

    svg {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>
