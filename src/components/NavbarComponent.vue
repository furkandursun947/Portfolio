<template>
<div>
        <div class="__header w-full p-1 border-b-2 fixed z-20" style="font-size: 16px">
            <div class="__navbar w-full p-4 inline-block ">
                <div class="float-left imgContainer" data-aos="fade-right">
                    <a href="#"><img class="imgLogo" src="../assets/logoTest2.png" alt="logo" /></a> 
                </div>
                <div class="float-right" >
                    <ul class="m-0" v-if="!isMobile" >
                        <li data-aos="fade-left" style="" class="inline-block mx-3 cursor-pointer hover:font-bold"><a href="#field1" >About</a></li>
                        <li data-aos="fade-left" style="" class="inline-block mx-3 cursor-pointer hover:font-bold"><a href="#field2" >Work</a></li>
                        <li data-aos="fade-left" style="" class="inline-block mx-3 cursor-pointer hover:font-bold"><a href="#field3" >Skills</a></li>
                        <li data-aos="fade-left" style="" class="inline-block mx-3 cursor-pointer hover:font-bold"><a href="#field4" >Contact</a></li>
                    </ul>
                    <button v-else class="bg-transparent z-20" :class="showDrawer ? 'x' : 'bar'" @click="handleDrawer">
                        <div class="hamBox">
                            <div class="hamBox-inner">  
                            </div>
                        </div>
                    </button>
                    
                </div>
            </div>

        </div>    
        <div :class="this.showDrawer ? 'openDrawer': ''" class="__drawer h-full fixed top-0 z-10" >
            <div class="__contentDrawer p-8" style="font-size: 20px">
                <ul class="m-0">
                    <li data-aos="fade-left" style="" class="block text-center mt-10 p-16 cursor-pointer hover:font-bold"><a href="#field1" @click="handleDrawer">About</a></li>
                    <li data-aos="fade-left" style="" class="block text-center p-16 cursor-pointer hover:font-bold"><a href="#field2" @click="handleDrawer">Work</a></li>
                    <li data-aos="fade-left" style="" class="block text-center p-16 cursor-pointer hover:font-bold"><a href="#field3" @click="handleDrawer">Skills</a></li>
                    <li data-aos="fade-left" style="" class="block text-center p-16 cursor-pointer hover:font-bold"><a href="#field4" @click="handleDrawer">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            isMobile: false,
            showDrawer: false,
        }
    },
    methods: {
        resizeHandler(){
            if(window.innerWidth <= 768) this.isMobile = true;
            else this.isMobile = false;
        },
        handleDrawer(){
            this.showDrawer = !this.showDrawer;
            var element = document.querySelector('.__mainContent');
            if(this.showDrawer) element.classList.add('blurContent');
            else element.classList.remove('blurContent');
        }
    },
    created() {
        window.addEventListener('resize', this.resizeHandler) 
        if(window.innerWidth <= 768) this.isMobile = true;
            else this.isMobile = false;
    },
    unmounted() {
        window.removeEventListener("resize", this.resizeHandler);
    },
}
</script>


<style scoped>
.imgContainer{
    width: 72px;
}


.imgLogo{
    object-fit: contain;
    
}

.__header{
    box-shadow: 0 10px 30px -10px var(--fillColor);
    background-color: var(--navbar);
}

.__navbar{
    background-color: var(--navbar);
}

.__drawer{
    background-color: var(--navbar);
    transition: right 1s;
    display: block;
    right: -300px;
    align-items: center;
    display: flex;
    justify-content: center;

}

@media screen and (min-width: 768) {
    .openDrawer, .__drawer{
        display: none !important;
    }
    .openDrawer{
        visibility: none !important;
    }

}

.openDrawer{
    right: 0;
}

.hamBox{
    width: 32px;
    height: 24px;
    position: relative;
    display: inline-block;
}

.hamBox-inner{
    top: 50%;
    position: absolute;
    right: 0;
    height: 2px;
    width: 32px;
    background-color: var(--text);
    border-radius: 4px;
    transition: transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19) 0s;
    transform: rotate(0deg) 
}

.hamBox-inner::before{
    width: 120%;
    top: -10px;
    opacity: 1;
}
.hamBox-inner::after{
    width: 80%;
    bottom: -10px;
    transform: rotate(0deg);
}
.hamBox-inner::after, .hamBox-inner::before{
    content: "";
    display: block;
    position: absolute;
    left: auto;
    right: 0px;
    height: 2px;
    border-radius: 4px;
    background-color: var(--text);

}





.x .hamBox{
    width: 32px;
    height: 24px;
    position: relative;
    display: inline-block;
}

.x .hamBox-inner{
    top: 50%;
    position: absolute;
    right: 0;
    height: 2px;
    width: 32px;
    background-color: var(--text);
    border-radius: 4px;
    transform: rotate(225deg);
    transition: transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s
}

.x .hamBox-inner::before{
    width: 100%;
    top: 0px;
    opacity: 0;
}
.x .hamBox-inner::after{
    width: 100%;
    bottom: 0px;
    transform: rotate(-90deg);
}
.x .hamBox-inner::after, .x .hamBox-inner::before{
        content: "";
    display: block;
    position: absolute;
    left: auto;
    right: 0px;
    height: 2px;
    border-radius: 4px;
    background-color: var(--text);

}


</style>