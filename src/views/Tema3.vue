<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Gestión ambiental y residuos en el proceso productivo de la panela

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(data-aos='fade-right')(
        :style="{'background-image': `url(${require('@/assets/curso/temas/T3/img-1.png')})`}"
      )
      .bloque-texto-g__texto.p-5
        p.mb-0 A lo largo de los años, la industria de la panela ha evolucionado su proceso de producción a través de la artesanía sin agregar valor a sus productos ni realizar cambios importantes en el proceso de producción. A continuación, se presenta un video que muestra cómo se ve la gestión ambiental y de residuos del proceso de producción de panela en Colombia. 

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/f_Vk-TuAcFI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      

    .tarjeta.tarjeta-amarillo.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(data-aos='fade-right')(src="@/assets/curso/temas/T3/img-2.svg")

        .col-md.col-lg-6
          p.mb-4 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
