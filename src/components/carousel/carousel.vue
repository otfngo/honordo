<template>
  <section id="carouselIndicators" class="carousel slide" data-ride="carousel" v-once>
    <ol class="carousel-indicators">
      <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselIndicators" data-slide-to="1"></li>
      <li data-target="#carouselIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" :class="$style.img" src="./banner2.jpg" alt="荣和共兴展示图1" v-webp:src="">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" :class="$style.img" src="./banner1.jpg" alt="荣和共兴展示图2" v-webp:src="">
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" :class="$style.img" src="./banner3.jpg" alt="荣和共兴展示图3" v-webp:src="">
      </div>
    </div>
  </section>
</template>

<script>
  export default {}
</script>

<style module lang="stylus">
  .img {
    min-height 15rem
  }
</style>
