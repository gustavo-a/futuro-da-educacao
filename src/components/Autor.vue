<template>
  <section class="bg-custom-darker-blue">
    <div class="container py-32">
      <div class="flex flex-wrap justify-around">
        <div class="lg:w-1/3 px-4">
          <g-image src="~/assets/images/autor.png" quality="80" alt="Autor" />
        </div>
        <div class="lg:w-1/2 px-4">
          <div class="title-1">Conheça o autor</div>
          <div class="wysiwyg text-white">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
              nisi alias facere fugiat nam ad.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
              numquam tenetur ab quos optio, suscipit delectus vero voluptates
              minus nemo! Dolor quis consectetur doloremque sapiente, eligendi
              quo nisi animi neque!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus ducimus deleniti voluptates, minus id eos praesentium
              ratione sapiente cumque commodi dolor sed assumenda eius animi, at
              porro similique perferendis labore amet ut quas illum laudantium.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.title-1 {
  @apply .text-white .text-left;

  &::after {
    @apply .mr-auto .ml-0 .mt-2 .mb-8 .bg-white;
  }
}
</style>
