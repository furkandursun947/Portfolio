<template>
    <div class="__container contactComponent" id="field4" style="margin: 0px auto">
        <div class="__headingSection"  data-aos="fade-up">
            <h2>Contact Me</h2>
        </div>
        <div class="__contentSectionTech">
            <div data-aos="flip-right" class="headingContent justify-center font-bold flex mb-5" style="font-size:20px">
                <span class="header_headingContent">{{header}}</span>
            </div>
            <div data-aos="flip-left" class="contextTextTech">
                <span class="content_contextText">
                    {{context}}
                </span>
            </div>
            <div class="w-full h-full mt-10 flex items-center justify-center">
                <a class="hireButton" href="mailto:furkandursun947@gmail.com" target="_blank">Say Hello</a>
            </div>
        </div>
        
    </div>    
</template>



<script>
import keys from '../../ResourceKeys.json'
export default {
    data() {
        return {
            header: keys.contactHeader,
            context: keys.contactText
        }
    },
    methods: {


    },
    computed:{
        
    },
    created() {
    },
    mounted() {
    },
    components: {  },

}
</script>



<style scoped>

.contactComponent{
    max-width: 700px;
    min-height: 25vh;
}




.hireButton{
    color: var(--text);
    padding: 1.25rem 1.75rem;
    background-color: transparent;
    border: 2px solid var(--text);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    line-height: 1;
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);

}

.hireButton:hover{
    background-color: var(--scroll);
    outline: none;
}



</style>




