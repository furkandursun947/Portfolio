<template>
    <div class="__container aboutComponent" id="field1" style="margin: 0px auto">
        <div class="__headingSection" id="field1" data-aos="fade-up">
            <h2>About</h2>
        </div>
        <div class="__contentSection w-full  min-h-full md:grid md:grid-rows-3 md:grid-cols-5 grid-flow-col">
            <div class="__textSection md:grid md:col-span-3 md:row-span-3">
                <p data-aos="fade-right">
                    Hi, My Name is <b>Furkan Emre</b>. I was born in Batman/Turkey in 1999. My interest in computers started in 2015 when I started playing computer games. I thought a lot about how they create these games, so I began to investigate the game tool Unity. It turned out that I enjoy programming a lot.
                </p>
                <p data-aos="fade-right">
                    {{this.second}}
                </p>
                <p data-aos="fade-right">
                    Since then, I have been working in a company and studying <b>Front-End Development</b>.
                </p>
            </div>
            <div class="__picSection md:grid md:col-span-2  md:row-span-3 md:ml-16" data-aos="fade-left">
                <div class="wrapper mt-16 md:mt-0 flex justify-center items-center ">
                    <img src="../assets/me.jpeg" alt="me"/>
                </div>
            </div>
        </div>
    </div>    
</template>



<script>
import keys from '../../ResourceKeys.json'
export default {
    data() {
        return {
            second: keys.firstAbout,
        }
    },
}
</script>



<style scoped>

.__textSection, .__picSection{
    display: block;
}

.aboutComponent{
    max-width: 900px;
}

.aboutComponent p {
    margin: 0px 0px 15px 0px;
    font-size: 20px;
    line-height: 1.3;
    font-family: var(--font-inter);
}


.aboutComponent img{
    width: 300px;
    max-height: 300px;
    display: block;
    position: static;
    object-fit: cover;
    border-radius: 15px;

    
}

.wrapper {
    max-width: 500px;
    
}

</style>