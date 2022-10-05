<template>
  <section class="persons">
    <div class="persons__row row">
      <div class="persons__item col-lg-4 col-sm-6" v-for="(person, i) in persons" :key="i">
        <PersonCard :person="person"/>
      </div>
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import PersonCard from "../components/PersonCard";
export default {
  components: {
    PersonCard
  },
  data() {
    return {

    }
  },
  computed: {
    persons() {
      return this.$store.getters.getPersons
    }
  },
}
</script>
