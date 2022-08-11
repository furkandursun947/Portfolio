<template>
    <div>
        <div class="headerBar">
            <span class="headerTextBar">{{this.headerText}}</span>
        </div>
        <div class="containerProgress mt-5">
            <div class="progressBar" :style="{ width: [getLevel]}">

            </div>
        </div>
    </div>
</template>



<script>
export default {
    props: {
        level: Number,
        headerText: String
    },
    computed:{
        getLevel(){
            return (this.level*10).toString() + '%';
        }
    },
    created() {
    },
}
</script>


<style scoped>
.headerTextBar{
    font-weight: 500;
    font-size:16px;
}

.containerProgress{
    width: 80%;
    height: 5px;
    background-color: var(--gray);
    border-radius: 10px;
}

.progressBar{
    width: 0px;
    height: 5px;
    border-radius: 10px;
    background-color: var(--secondaryColor);
    transition: all 1s;
}

</style>