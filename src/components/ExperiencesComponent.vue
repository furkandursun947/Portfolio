<template>
    <div class="__container experiencesComponent" id="field2" style="margin: 0px auto">
        <div class="__headingSection"  data-aos="fade-up">
            <h2>Work</h2>
        </div>
        <div class="__contentSection sm:grid sm:grid-cols-6 sm:grid-flow-col">
            <div class="buttonContainer block ">
                <button class="workButton" v-for="item in this.workItems" :key="item.id" :class="item.active ? 'selected':''" @click="changeSelected(item.id)">
                    {{item.label}}
                </button>
            </div>
            <div class="sm:col-span-5 ml-6">
                <div class="workContentHeading">
                    <h3 style="font-size:20px; font-weight:600; color:var(--text)" class="">{{this.workDescItems[selectedIndex].header}}</h3>
                    <span style="color: var(--gray)">{{this.workDescItems[selectedIndex].date}}</span>
                </div>
                <div class="workContentText">
                    <ul class="mt-8">
                        <li class="p-2" v-for="item in this.workDescItems[selectedIndex].description" :key="item">{{item}}</li>
                    </ul>
                    <div v-if="this.workItems[this.selectedIndex].special" class="w-full h-full">
                         <a class="hireButton" href="mailto:furkandursun947@gmail.com" target="_blank">Hire me!</a>
                    </div>
                    <div class="techSection">
                        <span class="badge mr-3 mb-3" v-for="item in this.workDescItems[selectedIndex].technoliges" :key="item">
                            {{item}}
                        </span>
                    </div>
                </div>
            </div>                
        </div>
    </div>    
</template>



<script>
import keys from '../../ResourceKeys.json';

export default {
    data() {
        return {
            selectedIndex:0,
            workItems: keys.works,
            workDescItems: keys.renderItems,
        }
    },
    methods: {
        changeSelected(id){
            this.workItems.map((item) => {
                var itemNew = item;
                itemNew.active = false;
                this.workItems[item.id] = itemNew
            })
            this.workItems[id].active = true;
            this.selectedIndex = id;
        },

    },
    computed:{
        
    },
    created() {
        console.log(this.workDescItems[0].header)  
    },
}
</script>



<style scoped>


.__textSection, .__picSection{
    display: block;
}

.experiencesComponent{
    max-width: 700px;
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
.workButton{
    padding: 12px;
    border-left: 1px solid var(--scroll);
    transition: 0.5s all;
    width: 100%;
}

.workButton.selected {
    border-left: 3px solid var(--text);
    font-weight: 700;
    
}

.workButton:hover{
    background-color: var(--scroll);
}

@media screen and (min-width: 700px){
  .experiencesComponent{
    min-height: 340px;
  }

}

.workContentText li:before{
    content:"▹";
    position: absolute;
    left: 0px;
    color: var(--text);
}

.workContentText ul {
    list-style: none;
    padding: 0;
}


.workContentText li{
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;
}

.workContentText{
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
    margin-left: 100px;
    margin-top: 50px;
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);;

}

.hireButton:hover{
    background-color: var(--scroll);
    outline: none;
}

.badge{
    background-color: #bbd4dd;
    font-weight: 500;
    font-size: 13px;
    display: inline-block;
    padding: 0.25em 0.4em;
    text-align: center;
    border-radius: 0.25rem;
}


@media screen and (max-width: 640px){
    .workButton{
        display: inline-block;
        width: 100px;
        border-left: none;
        border-bottom: 1px solid var(--scroll);
    }

    .workButton.selected {
        border-bottom: 3px solid var(--text);
        border-left: none;
        
    }

    .buttonContainer{
        overflow-x: scroll;
        justify-content: center;
        display: flex;
    }

}



</style>




