<template>
  <router-link :to="{name: `person`, params:{id: person.id}}" class="person-card">
      <div class="person-card__picture">
        <img :src="imgLink(person.folder, person.img)" :alt="name">
      </div>
      <div class="person-card__name">{{name}}</div>
  </router-link>
</template>

<script>
export default {
    name: 'PersonCard',
    props: {
        person: Object
    },
    data() {
        return {
            ...this.person
        }
    },
    methods:{
        imgLink(folder, img){
            return `../assets/${folder}/${img}`;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
