<template>
    <div class="play-block">
        <div class="play-audios">
            <ThePlayer :playList="playList" :personFolder="personFolder" :audioIndex="audioIndex" ></ThePlayer>
        </div>

        <div class="play-list">
            <div class="play-list__item" v-for="(item, index) in playList" :key="index">
                <button class="play-list__button" @click="checkAudio(index)">
                    <span class="play-list-button__content">
                        <span class="play-list-button__title">{{item.title}}</span>
                        <span class="play-list-button__title">{{audioSubtitle(item.title)}}</span>
                    </span>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import ThePlayer from "./ThePlayer";
    export default {
        name: "PlayBlock",
        components: {ThePlayer},
        props: {
            playList: Array,
            personName: String,
            personFolder: String
        },
        data() {
            return {
                audioIndex: 0
            }
        },
        methods: {
            audioSubtitle(audioName) {
                return this.personName +', '+ audioName
            },
            checkAudio(index){
               this.audioIndex = index;
            }
        }
    }
</script>

<style scoped>

</style>