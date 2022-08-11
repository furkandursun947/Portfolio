<template>
    <footer class="footer flex justify-center items-center flex-col">
        <div class="iconSection">
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
                    <a href="https://github/furkandursun947/resume/raw/main/Furkan%20Emre_Dursun_CV%20(1).pdf" target="_blank">
                        <i class="fas fa-file"></i>
                    </a>
                </li>
            </ul>
        </div>
        </div>
        <div class="copyRight">
            <span>{{text}}</span>
        </div>
    </footer> 
</template>



<script>
import keys from '../../ResourceKeys.json'
export default {
    data() {
        return {
            text: keys.footerText
        };
    },
    components: {  }
}
</script>


<style scoped>
.footer{
    min-height: 70px;
    padding: 15px;
    height: auto;
    text-align: center;
}

@media screen and (max-width: 768px){
    .iconSection {
        display: block;
        width: 100%;
        max-width: 270px;
        margin: 0px auto 10px;
        color: var(--secondaryColor);

    }
}

.copyRight{
    color: var(--secondaryColor);
    font-size: 12px;
    line-height: 1;
}






.iconSection li{
    list-style: none;
    display: inline-block;
    text-align: -webkit-match-parent;
}




.iconSection li a{
    padding: 5px;
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    

}

.iconSection li a i {
    width: 36px;
    height: 36px;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--secondaryColor);
}



.iconSection ul::after{
    content: "";
    display: block;
    width: 120px;
    height: 1px;
    margin: 0px auto;
    background-color: var(--secondaryColor);
}




@media screen and (min-width: 768px) {
    .iconSection{
        display: none;
    }

}


.iconSection li a:hover,.iconSection li a:focus  {
    transform: translateX(5px);
   
}
.iconSection li a:hover,.iconSection li a:focus  {
     color: var(--text);

   
}



</style>