<template>
  <div class="rootContainer">
    <Navbar/>
    <LeftOrientations/>
    <div class="__mainContent ">
      <div class="__pages">
        <HomeComponent/>
        <AboutComponent/>
        <ExperiencesComponent/>
        <TechnologiesComponent/>
        <ProjectsComponent/>

        <ContactComponent/>
        <FooterComponent/>

      </div>
    </div>
   
  </div>
</template>

<script>
import Navbar from './components/NavbarComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import AboutComponent from './components/AboutComponent.vue';
import ExperiencesComponent from './components/ExperiencesComponent.vue';
import TechnologiesComponent from './components/TechnologiesComponent.vue';
import ContactComponent from './components/ContactComponent.vue';
import ProjectsComponent from './components/ProjectsComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import LeftOrientations from './components/LeftOrientations.vue';

require('./scripts/darkMode')

export default {
  name: 'App',
  components: {
    Navbar,
    HomeComponent,
    LeftOrientations,
    AboutComponent,
    ExperiencesComponent,
    TechnologiesComponent,
    ContactComponent,
    FooterComponent,
    ProjectsComponent,
    
}
}
</script>

<style>
#app {
  min-height: 100vh;
  display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
}


.rootContainer{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.__mainContent{
  width: 100%;
  min-height: 100vh;
}

.__pages{
  padding: 0px 150px;
  margin: 0px auto;
  max-width: 1600px;
  min-height: 100vh;
}


@media screen and (max-width: 480px) {
    .__pages{
      padding: 0px 25px;
    }

}



@media screen and (max-width: 768px) and (min-width: 481px) {
    .__pages{
      padding: 0px 50px;
    }

}

@media screen and (max-width: 1080px) and (min-width: 769px) {
    .__pages{
      padding: 0px 100px;
    }

}





</style>
