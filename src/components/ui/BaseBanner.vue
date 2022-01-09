<template>
<section >
    <div class="bg container">
        <ul>
            <li class="btn1">Next</li>
            <li class="center"><h1>#slot1 is very easy</h1></li>
            <li class="btn2">Forward</li>
        </ul>
        </div>
            <div class="page">
                </div>
    </section>    
</template>
<script>
export default {
    
}
</script>
<style scoped>

.bg{
background: tomato;
    width: 95%;
    margin: 0 auto;
    
}
ul{
    display: grid;
  grid-template-columns: 1fr 1fr 1fr ;
   list-style-type: none;
   margin: 0% auto;
   width: 100%;
   max-width: 100%;


}
.container {
  
    max-width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.center{
    max-width: 100%;
    width: 100%;
    justify-self: center;
    align-items: center;
}
.btn1{
    margin: 0% ;
    margin-right: 0%;
    direction: ltr;
  background: #eee;
max-width: 25%;
justify-items: start;
}
ul .btn2{
    direction: ltr;
    background: #eee;
justify-items: end;
}

</style>