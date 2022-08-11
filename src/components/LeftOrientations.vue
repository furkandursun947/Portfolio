<template>
    <div class="__leftBar">
        <div class="ulContainer">
            <ul>    
                <li title="Github">
                    <a href="https://github.com/furkandursun947" target="_blank">
                        <i class="fab fa-github"></i>
                    </a>
                </li>
                <li title="LinkedIn">
                    <a href="https://www.linkedin.com/in/furkandursun947/" target="_blank">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </li>
                <li title="Hackerrank">
                    <a href="https://www.hackerrank.com/dursun16" target="_blank">
                        <i class="fab fa-hackerrank"></i>
                    </a>
                </li>
                <li title="Instagram">
                    <a href="https://www.instagram.com/frknemredrsn/" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                </li>
                <li title="Resume">
                    <a href="https://github.com/furkandursun947/Portfolio/raw/master/Furkan%20Emre_Dursun_CV.pdf" target="_blank">
                        <i class="fas fa-file"></i>
                    </a>
                </li>
            </ul>
        </div>
        
    </div>    
</template>
<!-- 
<button class="linkButtons mx-1" title="Github" @click="open('github')"><i class="fab fa-github">
                    </i></button>
                    <button class="linkButtons mx-1" title="LinkedIn" @click="open('linkedin')"><i class="fab fa-linkedin"></i></button>
                    <button class="linkButtons mx-1" title="Hackerrank" @click="open('hackerrank')"><i class="fab fa-hackerrank"></i></button>
                    <button class="linkButtons mx-1" title="Resume" @click="open('resume')"> <i class="fas fa-file"></i></button> -->


<script>
export default {
    props:{
        type: String,
    }
}
</script>



<style scoped>




.__leftBar {
    width: 40px;
    position: fixed;
    height: 100vh;
    bottom: 0px;
    left: 40px;
    right: auto;
    z-index: 10;
    display: flex;
    align-content: center;
    align-items: center;
}

.__leftBar li{
    list-style: none;
    display: list-item;
    text-align: -webkit-match-parent;
    

}




.__leftBar li a{
    padding: 10px;
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    

}

.__leftBar li a i {
    width: 36px;
    height: 36px;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--secondaryColor);
}
._leftBar li:last-of-type{
    margin-bottom: 20px;
}


.__leftBar ul {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
    

}
.__leftBar ul::after{
    content: "";
    display: block;
    width: 1px;
    height: 120px;
    margin: 0px auto;
    background-color: var(--secondaryColor);
}

.__leftBar ul::before{
    content: "";
    display: block;
    width: 1px;
    height: 120px;
    margin: 0px auto;
    background-color: var(--secondaryColor);
}


@media screen and (max-width: 1080px) {
    .__leftBar{
        left: 20px;
        right: auto;
    }

}

@media screen and (max-width: 768px) {
    .__leftBar{
        display: none;
    }

}


.__leftBar li a:hover,.__leftBar li a:focus  {
    transform: translateX(5px);
   
}
.__leftBar li a:hover,.__leftBar li a:focus  {
     color: var(--text);

   
}





</style>