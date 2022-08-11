<template>
    <div class="__container homeSection">
        <div class="hiSection" data-aos="zoom-in-up" data-aos-duration="1500">
            <h1>{{hi}}</h1>
        </div>
        <div class="nameSection" data-aos="zoom-in-right" data-aos-duration="2000">
            <div class="coloredSection">

            </div>
            <h2 data-aos="zoom-in-right">{{name}}</h2>
        </div>
        <div class="welcomeText" data-aos="zoom-out" data-aos-duration="2500"> 
            <h3>{{welcome}}</h3>
        </div>
        <div class="descText" data-aos="fade-down-right" data-aos-duration="3000">
            <p style="font-size:20px">
                {{who}}
            </p>
        </div>
    </div>    
</template>



<script>
import keys from '../../ResourceKeys.json';
export default {
    data() {
        return {
            hi: keys.homeHi,
            welcome: keys.welcome,
            who: keys.whoAm,
            name: keys.name
        }
    },
}
</script>



<style scoped>

.homeSection{
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding: 0px;
}

.coloredSection{
    position: absolute;
    top: 0;
    right: 0;
    width: 20vh;
    height: 20vh;
    background-color: red;
    opacity: 0.2;
}


.hiSection h1{
    font-weight: 400;
    font-size: clamp(14px,5vw,16px);
    line-height: 1.1;
    color: var(--secondaryColor) !important;
    margin: 0px;
    margin-bottom: 10px;
}

.nameSection h2{
    font-size: clamp(40px, 8vw, 80px);
    font-weight: 600;
    font-family: var(--font-inter);
    color: var(--text);
        line-height: 1.1;
        margin: 0px;
    margin-bottom: 10px;

}

.welcomeText h3{
    line-height: 0.9;
    color: #8892b0;
    font-weight: 600;
    font-size: clamp(40px, 8vw, 80px);
    margin: 0px;
    margin-bottom: 10px;

}


.descText p {
    margin: 20px 0px 0px;
    max-width: 540px;
    color: var(--text);
    margin: 0px;
    margin-top: 10px;
}






</style>