<template>
    <div class="__container projectsSection">
        <div class="__headingSection" data-aos="fade-up">
            <h2>Projects</h2>

        </div>
        <div class="__contentSectionProjects grid grid-cols-1 sm:grid-cols-2" data-aos="flip-left">
                <div v-for="(item, index) in this.projects"  :key="item"  class="containerItem">
                    <div class="cardItem">
                        <div class="imageItem">
                            <img href="#" :src="item.image ? item.image: '@/assets/movies.png'"/>
                        </div>
                        <div class="content">
                            <h3 class="font-bold mb-5">{{item.title}}</h3>
                            <span class="badge mr-3 mb-3" v-for="item in this.projects[index].techs" :key="item">
                                {{item}}
                            </span>
                            <div class="w-full h-full justify-center mt-3 items-start flex">
                                <a class="hireButton" :href="item.github" target="_blank">Github</a>
                            </div>
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
            projects: keys.projects,
        }
    },
    computed:{  
        
       
    },
    components:{
        
    }
}
</script>


<style scoped>


.hireButton{
    color: var(--text);
    padding: 1rem 1.5rem;
    background-color: transparent;
    border: 2px solid var(--text);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    line-height: 1;
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);;

}

.hireButton:hover{
    background-color: var(--scroll);
    outline: none;
}
.projectsSection{
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding: 0px;
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





.containerItem {
  font-family: var(--font-inter);
  position : relative;
  display : flex;
  align-items : center;
  flex-wrap: wrap;
  padding: 30px;
}

.containerItem .cardItem {
  position: relative;
  max-width : 300px;
  height : 215px;  
  background-color : #fff;
  margin : 30px 10px;
  padding : 20px 15px;
  
  display : flex;
  flex-direction : column;
  box-shadow : 0 5px 20px rgba(0,0,0,0.5);
  transition : 0.3s ease-in-out;
  border-radius : 15px;
}
.containerItem .cardItem:hover {
  height : 320px;    
}


.containerItem .cardItem .imageItem {
  position : relative;
  width : 260px;
  top : -40%;
  box-shadow : 0 5px 20px rgba(0,0,0,0.2);
  z-index : 1;
}

.containerItem .cardItem .imageItem img {
  max-width : 100%;
  border-radius : 15px;
}

.containerItem .cardItem .content {
  position : relative;
  top : -140px;
  padding : 10px 15px;
  color : #111;
  text-align : center;
  
  visibility : hidden;
  opacity : 0;
  transition : 0.3s ease-in-out;
    
}

.containerItem .cardItem:hover .content {
   margin-top : 30px;
   visibility : visible;
   opacity : 1;
   transition-delay: 0.2s;
  
}


@media screen and (max-width: 640px){
    .containerItem{
        padding: 30px 0px;
    }
}

</style>