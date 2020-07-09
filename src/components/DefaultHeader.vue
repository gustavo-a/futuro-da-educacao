<template>
  <header class="">
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
        <g-link to="/" class="px-4 w-full sm:w-1/2" id="logo-header">
          <g-image
            quality="100"
            height="60"
            src=""
            fit="inside"
            alt="Guten Morgen GO"
          />
        </g-link>
        <div
          class="pr-2 sm:px-4 ml-auto sm:ml-0 text-left grid sm:flex items-center"
          style="grid-gap: 5px"
        >
          <call-to-action
            filled="bege"
            border
            :link="$static.generalData.hotmartUrl"
            size="sm"
            class="sm:mx-2 text-sm sm:text-base"
          >
            <span class="text-cafe-ardosia">Inscreva-se</span>
          </call-to-action>
          <!-- https://produtividadeantifragil.club.hotmart.com -->
          <call-to-action
            border
            link="https://produtividadeantifragil.club.hotmart.com"
            size="sm"
            class="ml-2 sm:mx-2 text-sm sm:text-base"
            style="display:contents"
          >
            <span class="pl-3 text-cafe-verde-amarelado">Login</span>
          </call-to-action>
        </div>
      </div>
    </div>
  </header>
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
import Countdown from '~/components/shared/Countdown'

export default {
  name: 'DefaultHeader',
  components: {
    'call-to-action': CTA,
    Countdown
  }
}
</script>

<style lang="scss">
#logo-header {
  @media (max-width: 639px) {
    width: 200px;
  }
}
</style>
