<template>
    <div class="__container techComponent" id="field3" style="margin: 0px auto">
        <div class="__headingSection"  data-aos="fade-up">
            <h2>Skills</h2>
        </div>
        <div class="__contentSectionTech">
            <div data-aos="fade-left" class="mt-10" v-for="item in techs" :key="item">
                <ProgressBar :headerText="item.text" :level="item.level"/>
            </div>
            <div data-aos="fade-left" class="mt-10 langs" v-for="item in langs" :key="item">
                <span class="mr-5 font-bold">{{item.text}}:</span>
                <span class="">{{item.level}}</span>
            </div>
        </div>
        
    </div>    
</template>



<script>
import keys from '../../ResourceKeys.json';
import ProgressBar from './ProgressBar.vue';

export default {
    data() {
        return {
            techs: keys.techItems,
            langs: keys.languages
        }
    },
    methods: {


    },
    computed:{
        
    },
    created() {
        console.log(keys)
    },
    mounted() {
    },
    components: { ProgressBar },

}
</script>



<style scoped>

.techComponent{
    max-width: 1000px;
    min-height: 25vh;
}

.langs{
    font-weight: 500;
    font-size: 16px;
}


@media screen and (max-width: 640px){
    
}



</style>




