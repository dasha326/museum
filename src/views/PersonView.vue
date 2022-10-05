<template>
    <div class="person-page">
        {{person.name}}
        <PlayBlock :playList="person.playlist" :personName="person.name" :personFolder="person.folder"></PlayBlock>
    </div>
</template>

<script>
    import PlayBlock from "../components/PlayBlock";
    export default {
        components: {
            PlayBlock
        },
        name: "PersonView",
        data(){
            return{
            }
        },
        computed: {
            person(){
                return this.$store.getters.getPersons.find(el => el.id === parseInt(this.$route.params.id));
            }
        }
    }
</script>

<style scoped>

</style>