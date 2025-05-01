<script >
import BodyElementor from '../brand/BodyElementor.vue';
import ExperienceBodyComponent from '../experience/ExperienceBodyComponent.vue';
import FooterCard from '../footer/FooterCard.vue';
import BungaCard from '../bunga/BungaCard.vue';

export default{
  name: 'BodyComponent',
  components: {
    BodyElementor,
    ExperienceBodyComponent,
    FooterCard,
    BungaCard
  }
}

</script>

<template>
<div class="brand">
  <BodyElementor></BodyElementor>
</div>

<div class="experience">
  <ExperienceBodyComponent></ExperienceBodyComponent>
</div>

<div id="bunga-section" class="bunga-card">
  <BungaCard></BungaCard>
</div>

<div id="footer-section" class="footer-card">
<FooterCard></FooterCard>
</div>

</template>
<style >

</style>
